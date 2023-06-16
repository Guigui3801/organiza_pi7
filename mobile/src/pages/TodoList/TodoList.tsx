import { View, StyleSheet, ScrollView } from "react-native";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import TaskCard from "../../components/TaskCard";
import { Button } from "react-native-paper";

export default function TodoList() {
  return (
    <ScrollView style={{ flex: 1, marginTop: 30}}>
      <TaskCard name="Lavar a louça" created_at="20/05/2023" completed={true} status="Não feita" />
      <TaskCard name="Limpar o quarto" created_at="13/06/2023" completed={true} status="Não feita" />
      <TaskCard name="Lavar a louça" created_at="14/05/2002" completed={true} status="Não feita" />
      <TaskCard name="Lavar a louça" created_at="17/05/2002" completed={true} status="Não feita" />
      <TaskCard name="Lavar a louça" created_at="18/05/2002" completed={true} status="Não feita" />
      <TaskCard name="Lavar a louça" created_at="10/05/2002" completed={true} status="Não feita" />
      <TaskCard name="Lavar a louça" created_at="12/06/2002" completed={true} status="Não feita" />
    </ScrollView>
  );
}
