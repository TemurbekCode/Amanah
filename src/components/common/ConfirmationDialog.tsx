import { useTranslation } from 'react-i18next';

import { AppModal } from './AppModal';

interface Props {
  visible: boolean;
  title: string;
  message?: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
  destructive?: boolean;
}

export function ConfirmationDialog({ confirmLabel, cancelLabel, ...rest }: Props) {
  const { t } = useTranslation();
  return (
    <AppModal
      {...rest}
      confirmLabel={confirmLabel ?? t('common.confirm')}
      cancelLabel={cancelLabel ?? t('common.cancel')}
    />
  );
}
