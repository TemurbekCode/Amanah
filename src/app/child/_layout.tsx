import { Redirect, Tabs } from 'expo-router';
import { useTranslation } from 'react-i18next';

import { renderTabIcon, useTabScreenOptions } from '@/components/navigation/tabOptions';
import { useSessionStore } from '@/store/sessionStore';

export default function ChildLayout() {
  const { t } = useTranslation();
  const role = useSessionStore((s) => s.role);
  const screenOptions = useTabScreenOptions();

  if (role !== 'child') return <Redirect href="/" />;

  return (
    <Tabs screenOptions={screenOptions}>
      <Tabs.Screen name="index" options={{ title: t('nav.home'), tabBarIcon: renderTabIcon('home') }} />
      <Tabs.Screen name="screen-time" options={{ title: t('nav.screenTime'), tabBarIcon: renderTabIcon('clock') }} />
      <Tabs.Screen name="protection" options={{ title: t('nav.protection'), tabBarIcon: renderTabIcon('shield') }} />
      <Tabs.Screen name="settings" options={{ title: t('nav.settings'), tabBarIcon: renderTabIcon('settings') }} />
    </Tabs>
  );
}
