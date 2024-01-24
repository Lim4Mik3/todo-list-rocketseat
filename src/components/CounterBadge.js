import { View, Text, StyleSheet } from 'react-native';

export function CounterBadge({ color, label, count }) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.label, { color }]}>{label}</Text>
      <View style={styles['count-wrapper']}>
        <Text style={styles.count}>{count}</Text>
      </View>
    </View>   
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
  },
  label: {
    fontWeight: '700',
    fontSize: 14,
  },
  'count-wrapper': {
    borderRadius: '50%',
    backgroundColor: '#333333',
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  count: {
    color: '#D9D9D9',
    fontSize: 12,
    fontWeight: '700',
  }
})