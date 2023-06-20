import api from "../../services/api";

const token = localStorage.getItem("token");
const id = localStorage.getItem("accountId");

const config = {
  headers: { Authorization: `Bearer ${token}` },
};

const CreateTask = (name) => {
  const body = {
    name: name,
    forbiden: false,
    completed: false,
    postponed: false,
    forgot: false,
    abandoned: false,
    created_at: new Date().toLocaleDateString(),
    updated_at: new Date().toLocaleDateString(),
    reference: id,
    referenceId: id,
  };
  try {
    const response = api.post("/createUnitTask", body, config);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
const getTasks = () => {
  const response = api.get(`/userUnitTasks/${id}`, config);
  return response;
};

export { CreateTask, getTasks };
