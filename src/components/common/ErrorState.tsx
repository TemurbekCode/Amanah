import { useTranslation } from 'react-i18next';

import { EmptyState } from './EmptyState';

interface Props {
  title?: string;
  description?: string;
  onRetry?: () => void;
}

export function ErrorState({ title, description, onRetry }: Props) {
  const { t } = useTranslation();
  return (
    <EmptyState
      icon="alert-triangle"
      title={title ?? t('errors.generic')}
      description={description}
      actionLabel={onRetry ? t('common.retry') : undefined}
      onAction={onRetry}
    />
  );
}
