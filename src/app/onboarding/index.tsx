import { useRouter } from 'expo-router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';

import { AppButton, AppIcon, AppText, Screen, TextLink } from '@/components/common';
import { ONBOARDING_SLIDES } from '@/features/onboarding/slides';
import { useTheme } from '@/theme';

export default function OnboardingScreen() {
  const { t } = useTranslation();
  const router = useRouter();
  const { colors, radius, spacing } = useTheme();
  const [index, setIndex] = useState(0);

  const slide = ONBOARDING_SLIDES[index];
  const isLast = index === ONBOARDING_SLIDES.length - 1;
  const goToLanguage = () => router.push('/onboarding/language');

  return (
    <Screen>
      <View style={styles.skip}>
        {!isLast ? <TextLink label={t('onboarding.skip')} onPress={goToLanguage} tone="secondary" /> : null}
      </View>

      <View style={[styles.slide, { gap: spacing.xl, paddingVertical: spacing.xxl }]}>
        <View
          style={{
            width: 112,
            height: 112,
            borderRadius: radius.lg * 1.5,
            backgroundColor: colors.primarySoft,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <AppIcon name={slide.icon} size={48} color={colors.primary} />
        </View>
        <View style={{ gap: spacing.sm }}>
          <AppText variant="title" style={styles.text} accessibilityRole="header">
            {t(slide.titleKey)}
          </AppText>
          <AppText tone="secondary" style={styles.text}>
            {t(slide.bodyKey)}
          </AppText>
        </View>
      </View>

      <View
        style={styles.dots}
        accessibilityLabel={t('onboarding.step', { current: index + 1, total: ONBOARDING_SLIDES.length })}
      >
        {ONBOARDING_SLIDES.map((item, i) => (
          <View
            key={item.titleKey}
            style={{
              width: i === index ? 24 : 8,
              height: 8,
              borderRadius: radius.pill,
              backgroundColor: i === index ? colors.primary : colors.border,
            }}
          />
        ))}
      </View>

      <AppButton
        title={isLast ? t('onboarding.continue') : t('onboarding.next')}
        onPress={isLast ? goToLanguage : () => setIndex(index + 1)}
      />
      {index > 0 ? (
        <AppButton title={t('common.back')} variant="ghost" onPress={() => setIndex(index - 1)} />
      ) : null}
    </Screen>
  );
}

const styles = StyleSheet.create({
  skip: { alignItems: 'flex-end', minHeight: 44 },
  slide: { alignItems: 'center' },
  text: { textAlign: 'center' },
  dots: { flexDirection: 'row', justifyContent: 'center', gap: 8 },
});
