import { FlatList, Keyboard, StyleSheet, Text, View } from "react-native";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { AddButton } from "../components/AddButton";
import { CounterBadge } from "../components/CounterBadge";
import { EmptyList } from "../components/EmptyList";
import { TaskCard } from "../components/TaskCard";
import { useState } from "react";

export function App() {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState();

  const handleAddTask = () => {
    setTasks((state) => ([...state, { title: inputText, finished: false }]))
    setInputText('');
    Keyboard.dismiss();
  };

  const handleDeleteTask = (taskTitle) => {
    setTasks((state) => state.filter((item) => item.title !== taskTitle));
  }

  const handleFinished = (taskTitle) => {
    setTasks((state) => state.map((item) => {
      if (item.title === taskTitle) {
        return {
          ...item,
          finished: true,
        }
      }
      
      return item;
    }));
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.wrapper}> 

        <View style={styles["actions-wrapper"]}>
          <Input 
            onChangeText={setInputText}
            value={inputText}
            placeholder="Adicione uma nova tarefa" 
            style={{ flex: 1 }} 
          />

          <AddButton onPress={handleAddTask} />
        </View>

        <View style={styles["display-wrapper"]}>
          <CounterBadge color="#4EA8DE" label="Criadas" count={tasks.length} />
          <CounterBadge color="#8284FA" label="Concluídas" count={tasks.filter((item) => item.finished).length} />
        </View>

        <FlatList 
          data={tasks}
          contentContainerStyle={{ paddingVertical: 16 }}
          renderItem={(props) => 
            <TaskCard 
              title={props.item.title} 
              finished={props.item.finished}
              onDelete={handleDeleteTask} 
              onFinish={handleFinished} 
            />
          }
          ItemSeparatorComponent={() => <View style={{ paddingVertical: 4 }} />}
          ListEmptyComponent={EmptyList}
        />
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