import { api } from "./api";

const fetchUserUnitTasks = async () => {
  try {
    const response = await api.get("/userUnitTasks");
    return response.data;
  } catch (error) {
    console.log("Erro ao buscar:", error);
    return [];
  }
};

export {fetchUserUnitTasks};