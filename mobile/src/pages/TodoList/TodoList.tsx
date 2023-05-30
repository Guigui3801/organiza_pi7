import { View, Text, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";

export default function TodoList() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          width: 300,
          height: 200,
          backgroundColor: "#d9d9d9",
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginTop: 20 }}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setIsChecked}
          color={isChecked ? "#84dcc6" : undefined}
          />
        <Text> Tarefa: Lavar a louça</Text>
          </View>
        <View
          style={{
            marginTop: 10,
            marginHorizontal: 10,
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
          />
          <Text style={{marginLeft: 30, marginTop: 30}}> Status: A fazer</Text>


          
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
});
