import React, { useState, useContext } from "react";
import * as S from "./Login.styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    if (email === '' || password === ''){
      return
    }
    await signIn({email, password})
  }

  return (
    <S.Container>
      <S.LogoContainer>
        <S.Logo source={require("./../../img/logo.png")} />
      </S.LogoContainer>
      <S.FormContainer>
        <S.Input placeholder="Email" value={email} onChangeText={setEmail} />
        <S.Input
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <S.Button title="Login" onPress={() => {handleLogin()}} />
      </S.FormContainer>
    </S.Container>
  );
};

export default Login;
