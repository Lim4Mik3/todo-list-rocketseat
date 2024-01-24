import { StyleSheet, Text, View } from "react-native";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { AddButton } from "../components/AddButton";
import { CounterBadge } from "../components/CounterBadge";
import { EmptyList } from "../components/EmptyList";

export function App() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.wrapper}> 

        <View style={styles["actions-wrapper"]}>
          <Input placeholder="Adicione uma nova tarefa" style={{ flex: 1 }} />

          <AddButton />
        </View>

        <View style={styles["display-wrapper"]}>
          <CounterBadge color="#4EA8DE" label="Criadas" count={0} />
          <CounterBadge color="#8284FA" label="Concluídas" count={0} />
        </View>

        <View>
          <EmptyList />
        </View>
      </View> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1A1A1A' },
  wrapper: { flex: 1, paddingHorizontal: 24 },
  'actions-wrapper': { flexDirection: 'row', gap: 4, marginTop: -27 },
  'display-wrapper': { 
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 32,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333333'
  }
})