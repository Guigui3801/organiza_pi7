import React, { useState, useEffect } from "react";
import "./AppTask.scss";
import { Button, Menu, Input } from "antd";
import { CreateTask, getTasks } from "./AppTask.Service";

const AppTask = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [tasks, setTasks] = useState('');
    const [menuTarefasOpen, setMenuTarefasOpen] = useState(false);

    useEffect(() => {
        getTasksByUser();
    }, [])

    async function getTasksByUser() {
       await getTasks().then((resp) => {
            const {data} = resp
            setTasks(data)
        })
    }

    const handleAdd = () => {
        setMenuOpen(!menuOpen);
    };
    const handleTaks = () => {
        setMenuTarefasOpen(!menuTarefasOpen);
    }
    const handleAppend = () => {
        if (inputValue !== '') {
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
                    {tasks.length === 0 ? (
                        <p className="Tasks">Todas as tarefas concluídas!</p>
                    ) : (
                        tasks.map((task) => (
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