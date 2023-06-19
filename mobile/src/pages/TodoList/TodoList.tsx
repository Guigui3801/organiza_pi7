import { View, StyleSheet, ScrollView } from "react-native";
import Checkbox from "expo-checkbox";
import React, { useState, useEffect, useContext } from "react";
import TaskCard from "../../components/TaskCard";
import { Button } from "react-native-paper";
import { AuthContext } from "../../contexts/AuthContext";
import { fetchUserUnitTasks } from "../../services/unitTask";
export default function TodoList() {

useEffect(() => {
  getAllTasks();
},[])

async function getAllTasks(){
  await fetchUserUnitTasks().then((resp) =>{
console.log(resp)
  }
  )
}


  return (
    <ScrollView style={{ flex: 1, marginTop: 30 }}>

      <TaskCard
        name="Lavar a louça"
        created_at="20/05/2023"
        completed={true}
        status="Não feita"
      />
    </ScrollView>
  );
}
