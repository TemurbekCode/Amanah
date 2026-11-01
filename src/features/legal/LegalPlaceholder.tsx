import { useTranslation } from 'react-i18next';

import { AppCard, AppHeader, EmptyState, Screen } from '@/components/common';

/** Legal documents are not written yet. This screen says so honestly. */
export function LegalPlaceholder({ title }: { title: string }) {
  const { t } = useTranslation();

  return (
    <Screen>
      <AppHeader title={title} showBack />
      <AppCard>
        <EmptyState icon="file-text" title={t('legal.draftTitle')} description={t('legal.draftBody')} />
      </AppCard>
    </Screen>
  );
}
