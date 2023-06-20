// import { View, StyleSheet, ScrollView } from "react-native";
// import Checkbox from "expo-checkbox";
// import React, { useContext, useState } from "react";
// import TaskCard from "../../components/TaskCard";
// import { Button } from "react-native-paper";
// import { AuthContext } from "../../contexts/AuthContext";
// import fetchUserUnitTasks from "../../services/unitTask"

// export default function TodoList() {
//   const { user } = useContext(AuthContext);

//   const [tasks, setTasks] = useState([]);
//   async function getTasks() {
//     const response = await fetchUserUnitTasks(user.id);
//     setTasks(response);
//   }


//   return (
//     <ScrollView style={{ flex: 1, marginTop: 30}}>
//       {tasks.map((task) => (
//         <TaskCard key={task.id} name={task.name} created_at={task.created_at} completed={task.completed} status={task.status}/>
//       ))}
//     </ScrollView>
//   );
// }

import { View, StyleSheet, ScrollView, TouchableOpacity, Text, TextInput, DatePickerIOSBase } from "react-native";
import Checkbox from "expo-checkbox";
import React, { useContext, useState } from "react";
import TaskCard from "../../components/TaskCard";
import { Button } from "react-native-paper";
import { AuthContext } from "../../contexts/AuthContext";
import fetchUserUnitTasks from "../../services/unitTask";
import Overlay from "../../components/Overlay";

export default function TodoList() {
  const { user } = useContext(AuthContext);

  const [tasks, setTasks] = useState([]);
  async function getTasks() {
    const response = await fetchUserUnitTasks(user.id);
    setTasks(response);
  }
  function addTask() {
    setTasks([])
    getTasks();
    // VERIFICAT TAREFA E MANDAR PARA O DB

  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            name={task.name}
            created_at={task.created_at}
            completed={task.completed}
            status={task.status}
          />
        ))}
      </ScrollView>
      <Overlay children={<View>
        <Text>Add Task</Text>
        <TextInput placeholder="nome da tarefa" />
        <Button onPress={addTask}>Adicionar</Button>
      </View>
      }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    marginTop: 30,
  },
});
