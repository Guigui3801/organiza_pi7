import { api } from "./api";

const fetchUserUnitTasks = async (id: string) => {
  try {
    const response = await api.get("/userUnitTasks/" + id);
    return response.data;
  } catch (error) {
    console.log("Erro ao buscar:", error);
    return [];
  }
};

export default fetchUserUnitTasks;