import type { IconName } from '@/components/common';

export interface OnboardingSlide {
  icon: IconName;
  titleKey: string;
  bodyKey: string;
}

export const ONBOARDING_SLIDES: readonly OnboardingSlide[] = [
  { icon: 'shield', titleKey: 'onboarding.slide1Title', bodyKey: 'onboarding.slide1Body' },
  { icon: 'clock', titleKey: 'onboarding.slide2Title', bodyKey: 'onboarding.slide2Body' },
  { icon: 'eye', titleKey: 'onboarding.slide3Title', bodyKey: 'onboarding.slide3Body' },
];
