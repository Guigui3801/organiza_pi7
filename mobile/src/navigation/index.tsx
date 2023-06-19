import { View, Text, ActivityIndicator } from "react-native";
import { useContext } from "react";

import AppRouter from "./app.routes";
import AuthRouter from "./auth.routes";

import React from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Routes() {
  const { isAuthenticated } = useContext(AuthContext);
  const loading = false;

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#1d1d2e",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size={60} color={"#fff"} />
      </View>
    );
  }
  return isAuthenticated ? <AppRouter /> : <AuthRouter />;
  // return <AppRouter />;
}
