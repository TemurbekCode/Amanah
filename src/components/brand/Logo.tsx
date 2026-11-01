import { StyleSheet, View } from 'react-native';

import { AppIcon } from '@/components/common/AppIcon';
import { AppText } from '@/components/common/AppText';
import { BRAND_NAME_AR } from '@/constants/brand';
import { useTheme } from '@/theme';

/**
 * PLACEHOLDER LOGO — not the approved Amanah logo.
 * To use the real logo, replace the body of `LogoMark` with an <Image> pointing at the
 * approved asset (for example `assets/images/amanah-mark.png`). Every screen uses
 * `LogoMark` / `Logo`, so this is the only file that needs to change.
 */
export function LogoMark({ size = 56 }: { size?: number }) {
  const { colors } = useTheme();
  return (
    <View
      accessibilityRole="image"
      accessibilityLabel="Amanah"
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.28,
        backgroundColor: colors.brand,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <AppIcon name="shield" size={size * 0.5} color="#FFFFFF" />
    </View>
  );
}

interface LogoProps {
  size?: number;
  showArabic?: boolean;
}

/** Mark plus wordmark. */
export function Logo({ size = 56, showArabic = false }: LogoProps) {
  return (
    <View style={styles.row}>
      <LogoMark size={size} />
      <View>
        <AppText variant="heading" style={{ fontSize: size * 0.4, lineHeight: size * 0.5 }}>
          Amanah
        </AppText>
        {showArabic ? (
          <AppText variant="body" tone="secondary" style={styles.arabic}>
            {BRAND_NAME_AR}
          </AppText>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  arabic: { writingDirection: 'rtl' },
});
