import { useEffect, useState } from 'react';

import { useSessionStore } from '@/store/sessionStore';
import { useSettingsStore } from '@/store/settingsStore';

const isHydrated = () =>
  useSettingsStore.persist.hasHydrated() && useSessionStore.persist.hasHydrated();

/**
 * True only on the client, after mount, once persisted preferences are loaded.
 * The initial value is always false so the server render and the first client
 * render are identical (no dependence on persisted theme, language or device locale).
 */
export function useStoresHydrated(): boolean {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const update = () => setReady(isHydrated());
    const unsubSettings = useSettingsStore.persist.onFinishHydration(update);
    const unsubSession = useSessionStore.persist.onFinishHydration(update);
    update();
    return () => {
      unsubSettings();
      unsubSession();
    };
  }, []);

  return ready;
}
