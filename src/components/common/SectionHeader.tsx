import { StyleSheet, View } from 'react-native';

import { AppText } from './AppText';

interface Props {
  title: string;
  description?: string;
}

export function SectionHeader({ title, description }: Props) {
  return (
    <View style={styles.wrap}>
      <AppText variant="subheading" accessibilityRole="header">
        {title}
      </AppText>
      {description ? (
        <AppText variant="caption" tone="secondary">
          {description}
        </AppText>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({ wrap: { gap: 2 } });
