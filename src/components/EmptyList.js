import { StyleSheet, Text, View } from "react-native";

import ClipboardLogo from '../assets/clipboard.svg'

export function EmptyList() {
  return (
    <View style={styles.container}>
      <ClipboardLogo />

      <View>
        <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.subtitle}>Crie tarefas e organize seus itens a fazer</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    alignItems: 'center', 
    justifyContent: 'center',
    paddingVertical: 48,
    paddingHorizontal: 20,
    gap: 16
  },
  title: {
    color: '#808080',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 19.6,
  },
  subtitle: {
    color: '#808080',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19.6,
  }
})