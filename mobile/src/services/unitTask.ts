import { AuthContext } from "../contexts/AuthContext";
import { api } from "./api";
import React, {useContext} from 'react';
const fetchUserUnitTasks = async () => {
const {user} = useContext(AuthContext)

  try {
    const response = await api.get(`/userUnitTasks/${user.id}`,
    );
    return response.data;
  } catch (error) {
    console.log("Erro ao buscar:", error);
    return [];
  }
};

export {fetchUserUnitTasks};