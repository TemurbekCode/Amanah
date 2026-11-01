import { Redirect } from 'expo-router';

import { useSessionStore } from '@/store/sessionStore';

/** Routes to the saved mode, or to the welcome flow when no role is selected. */
export default function Index() {
  const role = useSessionStore((s) => s.role);

  if (role === 'parent') return <Redirect href="/parent" />;
  if (role === 'child') return <Redirect href="/child" />;
  return <Redirect href="/welcome" />;
}
