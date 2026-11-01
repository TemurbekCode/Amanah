import { useTranslation } from 'react-i18next';

import { Badge, type BadgeTone } from './Badge';

export type ProtectionStatus = 'active' | 'needsSetup' | 'permissionRequired' | 'notSupported' | 'demo';

const TONES: Record<ProtectionStatus, BadgeTone> = {
  active: 'success',
  needsSetup: 'warning',
  permissionRequired: 'warning',
  notSupported: 'neutral',
  demo: 'info',
};

/** Never use `active` unless the feature is genuinely active. */
export function StatusBadge({ status }: { status: ProtectionStatus }) {
  const { t } = useTranslation();
  return <Badge label={t(`status.${status}`)} tone={TONES[status]} />;
}
