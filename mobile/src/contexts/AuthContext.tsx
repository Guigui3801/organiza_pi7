import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { api } from "../services/api";

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
};

type UserProps = {
  id: string;
  name: string;
  email: string;
  token: string;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

type SignInProps = {
  email: string;
  password: string;
};

export const AuthContext = React.createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = React.useState<UserProps>({
    id: "",
    email: "",
    name: "",
    token: "",
  });
  const [loadingAuth, setLoadingAuth] = React.useState(false);
  const isAuthenticated = !!user.name;

  async function signIn({ email, password }: SignInProps) {
    setLoadingAuth(true);
    try {
      const response = await api.post("/session", {
        email,
        password,
      });

      const { id, name, token } = response.data;

      const data = {
        ...response.data,
      };

      await AsyncStorage.setItem("@organiza", JSON.stringify(data));

      api.defaults.headers.common[`Authorization`] = `Bearer ${token}`

      setUser({
        id,
        name,
        email,
        token,
      });
      setLoadingAuth(false);
    } catch (err) {
      alert(`Erro ao acessar: ${err}`);
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
