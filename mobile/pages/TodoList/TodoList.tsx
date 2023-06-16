import { View, StyleSheet, ScrollView } from "react-native";
import Checkbox from "expo-checkbox";
import React, { useState, useEffect } from "react";
import TaskCard from "../../components/TaskCard";
import { Button } from "react-native-paper";
import { fetchUserUnitTasks } from '../../src/services/unitTask'

export default function TodoList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUserUnitTasks();
      setTasks(data);
    };

    fetchData();
  }, []);

  return (
    <ScrollView style={{ flex: 1, marginTop: 30 }}>
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
  );
}
