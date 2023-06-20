import React, { useState, useEffect } from "react";
import "./AppTask.scss";
import { Button, Menu, Input, notification } from "antd";
import { CreateTask, getTasks } from "./AppTask.Service";
import { Link } from "react-router-dom";

const AppTask = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState("");
  const [menuTarefasOpen, setMenuTarefasOpen] = useState(true);

  useEffect(() => {
    getTasksByUser();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
  
    // Formate o dia e o mês para sempre terem dois dígitos
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
  
    return `${formattedDay}/${formattedMonth}/${year}`;
  };

  async function getTasksByUser() {
    await getTasks().then((resp) => {
      const { data } = resp;
      setTasks(data);
    });
  }

  const handleAdd = () => {
    setMenuOpen(!menuOpen);
  };
  const handleTaks = () => {
    setMenuTarefasOpen(!menuTarefasOpen);
  };
  const handleAppend = () => {
    if (inputValue !== "") {
      CreateTask(inputValue);
      setInputValue("");
      setMenuOpen(!menuOpen);
    } else {
      notification.error({
        message: "Erro!",
        description: "Insira o nome da tarefa",
      });
    }
  };

  return (
    <div className="AppTask">
      <div className="container">
        <h2>Tarefas</h2>
        <Button className="addTask" type="default" onClick={handleAdd}>
          Adicionar tarefa
        </Button>
        <Menu
          mode="inline"
          theme="dark"
          className={`addMenu ${menuOpen ? "" : "hidden"}`}
        >
          <Menu.Item key="1">
            <Input
              placeholder="Nome da tarefa"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </Menu.Item>
          <Menu.Item key="2">
            <Button onClick={handleAppend}>Adicionar</Button>
          </Menu.Item>
        </Menu>
        <div className="spacer" />
        {/* button */}
        <Button className="showTasks" type="default" onClick={handleTaks}>
          <h3>Suas Tarefas :</h3>
        </Button>
        <div className="spacer" />
        <Menu
          mode="inline"
          className={`showTasks ${menuTarefasOpen ? "" : "hidden"}`}
        >
          {tasks.length === 0 ? (
            <p className="Tasks">Todas as tarefas concluídas!</p>
          ) : (
            tasks.map((task) => (
              <div key={task.id} className="Tasks">
                <p className="TaskColor">Nome: {task.name}</p>
                <br />
                <p
                  className={`TaskDate ${
                    task.completed
                      ? "completed"
                      : task.postponed || task.forgot || task.abandoned
                      ? "postponed"
                      : task.forbidden
                      ? "forbidden"
                      : ""
                  }`}
                >
                  Criado Em:{formatDate(task.created_at)}
                </p>
              </div>
            ))
          )}
        </Menu>
        <Link to='/pomodoro'>
        <Button style={{marginTop: 30}}>
            Preciso de foco!
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default AppTask;
