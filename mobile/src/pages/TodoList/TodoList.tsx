import { View, StyleSheet, ScrollView } from "react-native";
import Checkbox from "expo-checkbox";
import React, { useContext, useState } from "react";
import TaskCard from "../../components/TaskCard";
import { Button } from "react-native-paper";
import { AuthContext } from "../../contexts/AuthContext";
import fetchUserUnitTasks from "../../services/unitTask"

export default function TodoList() {
  const { user } = useContext(AuthContext);

  const [tasks, setTasks] = useState([]);
  async function getTasks() {
    const response = await fetchUserUnitTasks(user.id);
    setTasks(response);
  }


  return (
    <ScrollView style={{ flex: 1, marginTop: 30}}>
      {tasks.map((task) => (
        <TaskCard key={task.id} name={task.name} created_at={task.created_at} completed={task.completed} status={task.status}/>
      ))}
    </ScrollView>
  );
}
