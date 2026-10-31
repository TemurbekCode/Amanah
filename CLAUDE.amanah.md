# Amanah — permanent project rules

## Product
- **Amanah** — "Protect what matters." Family safety & digital wellbeing app.
- Android first; iOS, desktop and web dashboard later. Languages: Uzbek (Latin) and English. Themes: Light, Dark, System.
- Two modes with separate navigation: Parent (`src/app/parent`) and Child (`src/app/child`).

## Stack
React Native, TypeScript (strict), Expo, Expo Router (`src/app`), i18next + react-i18next, Zustand + AsyncStorage (preferences only), Supabase (Phase 4), Kotlin native modules (Phase 5). Install Expo-compatible packages with `npx expo install`.

## Phases (never start a later phase unless asked)
1 Foundation · 2 Core UI/UX · 3 Functional features · 4 Backend (Supabase) · 5 Android native.

## Architecture
- `src/app` routes only; screens stay thin and compose components/features.
- `src/components/common` reusable UI; `src/components/navigation` tab helpers.
- `src/features/<name>` feature logic and feature components.
- `src/store` Zustand stores; `src/services` api contracts + storage; `src/theme`; `src/i18n`; `src/types`; `src/hooks`; `src/constants`.
- Business logic never lives inside UI components. No giant components.

## Theme
- Always `useTheme()`; never hardcode colors, spacing or radius in screens/components.
- Add new colors as semantic tokens in `src/theme/colors.ts` for both light and dark.

## Translations
- All UI text, including accessibility labels, uses `t('key')`. Add every key to BOTH `en.json` and `uz.json`.
- Run `node scripts/check-i18n.js` after changing locales.
- Natural Uzbek Latin; no machine-literal translations.

## TypeScript
Strict. No `any`, no `@ts-ignore`, no unused imports. Run `npx tsc --noEmit` before finishing a task.

## Security & privacy
- Transparent, consent-based monitoring only. Official platform APIs and permissions only.
- Never implement covert microphone/camera access, message interception, hidden gallery access, or bypassing OS protections.
- No hardcoded secrets; no service-role keys in the app. Tokens go in secure storage, never AsyncStorage.
- Check Google Play policy before sensitive Android features.

## No fake functionality
- Never show "Protected/Active" unless the feature is actually active. Use statuses: Active, Needs setup, Permission required, Not supported, Demo mode.
- Demo data must be labelled as demo in the UI and kept separate from real services.
- No buttons that look functional but do nothing.
- Never claim tests/checks passed unless they were actually run.

## Workflow
Inspect before editing. Preserve working code. Make the narrowest change. Report commands run and real output.
