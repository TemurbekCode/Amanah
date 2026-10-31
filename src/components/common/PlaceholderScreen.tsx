import { useTranslation } from 'react-i18next';

import type { IconName } from './AppIcon';
import { AppCard } from './AppCard';
import { AppHeader } from './AppHeader';
import { Badge } from './Badge';
import { EmptyState } from './EmptyState';
import { Screen } from './Screen';

interface Props {
  title: string;
  icon: IconName;
}

/** Temporary Phase 1 screen. Clearly labelled so it is never mistaken for finished UI. */
export function PlaceholderScreen({ title, icon }: Props) {
  const { t } = useTranslation();

  return (
    <Screen>
      <AppHeader title={title} right={<Badge label={t('states.comingSoon')} tone="info" />} />
      <AppCard>
        <EmptyState
          icon={icon}
          title={t('placeholder.title')}
          description={t('placeholder.description')}
        />
      </AppCard>
    </Screen>
  );
}
