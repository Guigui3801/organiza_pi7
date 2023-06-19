import React, { useState } from "react";
import "./AppTask.scss";
import { Button, Menu, Input } from "antd";
import { CreateTask } from "./AppTask.Service";

const taskData = [
    {
        id: 1,
        name: "Exemplo Concluida",
        created_at: "10/10/2021",
        completed: true,
        postponed: false,
        forgot: false,
        abandoned: false,
        forbidden: false,
    },
    {
        id: 2,
        name: "Exemplo Abandonada",
        created_at: "10/10/2021",
        completed: false,
        postponed: false,
        forgot: false,
        abandoned: true,
        forbidden: false,
    },
    {
        id: 3,
        name: "Exemplo incompleta",
        created_at: "10/10/2021",
        completed: false,
        postponed: false,
        forgot: false,
        abandoned: false,
        forbidden: false,
    },
    {
        id: 4,
        name: "Exemplo Proibida",
        created_at: "10/10/2021",
        completed: false,
        postponed: false,
        forgot: false,
        abandoned: false,
        forbidden: true,
    }

];

const AppTask = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [menuTarefasOpen, setMenuTarefasOpen] = useState(false);


    const handleAdd = () => {
        setMenuOpen(!menuOpen);
    };
    const handleTaks = () => {
        setMenuTarefasOpen(!menuTarefasOpen);
    }
    const handleAppend = () => {
        if (inputValue != '') {
            CreateTask(inputValue);
            setInputValue('');
        }
        setMenuOpen(!menuOpen);
    }

    return (
        <div className="AppTask">
            <div className="container">
                <h2>Tarefas</h2>
                <Button className="addTask" type="default" onClick={handleAdd}>
                    Adicionar tarefa
                </Button>
                <Menu mode="inline" theme="dark" className={`addMenu ${menuOpen ? '' : 'hidden'}`}>
                    <Menu.Item key="1">
                        <Input placeholder="Nome da tarefa" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
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
                <Menu mode="inline" className={`showTasks ${menuTarefasOpen ? '' : 'hidden'}`}>
                    {taskData.length === 0 ? (
                        <p className="Tasks">Todas as tarefas concluídas!</p>
                    ) : (
                        taskData.map((task) => (
                            <div key={task.id} className="Tasks">
                                <p className="TaskColor">
                                    {task.name}
                                </p>
                                <br />
                                <p className={`TaskDate ${task.completed ? 'completed' : task.postponed || task.forgot || task.abandoned ? 'postponed' : task.forbidden ? 'forbidden' : ''}`}>
                                    {task.created_at}
                                </p>
                            </div>
                        ))
                    )}
                </Menu>
            </div>
        </div>
    );
};

export default AppTask;