import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Text, Divider, Card, Avatar, Button } from "react-native-paper";
import Checkbox from "expo-checkbox";
import { Feather, AntDesign } from "@expo/vector-icons";

interface TasksList {
  id?: number;
  name?: string;
  created_at?: string;
  completed?: boolean;
  postponed?: boolean;
  forgot?: boolean;
  abandoned?: boolean;
  forbidden?: boolean;
}

const LeftContent = (props) => <Avatar.Icon {...props} icon="check" />;

export default function TaskCard({ name, created_at, completed }: TasksList) {
  const [isChecked, setIsChecked] = useState<boolean>(completed);
  return (
    <Card>
      <Card.Content
        style={{
          width: 300,
        }}
      >
        <Card.Title
          subtitle="Nome da tarefa"
          left={LeftContent}
          title={"Status da tarefa"}
        />
        <Divider />
        <Text style={{ marginLeft: 20, marginTop: 10 }}>
          Status: {completed}
        </Text>
        <Text style={{ marginLeft: 20, marginTop: 10 }}>
          Criado em: {created_at}
        </Text>
        <Card.Actions>
          <Button>Terminei :D</Button>
          <Button>Foco! :P</Button>
        </Card.Actions>
      </Card.Content>
    </Card>
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
