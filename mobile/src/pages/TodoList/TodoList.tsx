import { View, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import TaskCard from "../../components/TaskCard";

export default function TodoList() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TaskCard name="Lavar a louça" created_at="20/20/2002" completed={true} />
    </View>
  );
}
