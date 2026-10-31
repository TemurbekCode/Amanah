import { Redirect, Tabs } from 'expo-router';
import { useTranslation } from 'react-i18next';

import { renderTabIcon, useTabScreenOptions } from '@/components/navigation/tabOptions';
import { useSessionStore } from '@/store/sessionStore';

export default function ParentLayout() {
  const { t } = useTranslation();
  const role = useSessionStore((s) => s.role);
  const screenOptions = useTabScreenOptions();

  if (role !== 'parent') return <Redirect href="/" />;

  return (
    <Tabs screenOptions={screenOptions}>
      <Tabs.Screen name="index" options={{ title: t('nav.home'), tabBarIcon: renderTabIcon('home') }} />
      <Tabs.Screen name="location" options={{ title: t('nav.location'), tabBarIcon: renderTabIcon('map-pin') }} />
      <Tabs.Screen name="apps" options={{ title: t('nav.apps'), tabBarIcon: renderTabIcon('grid') }} />
      <Tabs.Screen name="protection" options={{ title: t('nav.protection'), tabBarIcon: renderTabIcon('shield') }} />
      <Tabs.Screen name="settings" options={{ title: t('nav.settings'), tabBarIcon: renderTabIcon('settings') }} />
    </Tabs>
  );
}
