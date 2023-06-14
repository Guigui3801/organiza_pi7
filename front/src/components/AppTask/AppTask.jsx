import React, { useState } from "react";
import "./AppTask.scss";
import { Button, Menu, Input } from "antd";
import { CreateTask } from "./AppTask.Service";

const taskData = [

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
                <Menu mode="inline" theme="dark" className='addMenu' hidden={!menuOpen}>
                    <Menu.Item key="1">
                        <Input placeholder="Nome da tarefa" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    </Menu.Item>
                    <Menu.Item key="2"><Button onClick={() => handleAppend()}>Adicionar</Button></Menu.Item>
                </Menu>
                <div className="spacer" />
                {/* button */}
                <Button className="showTasks" type="default" onClick={handleTaks}>
                    <h3>
                        Suas Tarefas :
                    </h3>
                </Button>
                <div className="spacer" />
                <Menu
                    mode="inline"
                    style={{
                        backgroundColor: 'transparent',
                    }}
                    className="showTasks"
                    hidden={!menuTarefasOpen}
                >
                    {taskData.length === 0 ? (
                        <p>Todas as tarefas concluídas!</p>
                    ) : (
                        taskData.map((task) => (
                            <div key={task.id}>
                                <p
                                    style={{
                                        paddingBottom: '25px',
                                        color:
                                            task.completed
                                                ? 'green'
                                                : task.postponed ||
                                                    task.forgot ||
                                                    task.abandoned ||
                                                    task.forbidden
                                                    ? 'red'
                                                    : 'black',
                                    }}
                                >
                                    {task.name} =&gt; Criada em =&gt; {task.created_at}
                                </p>
                                <br />
                            </div>
                        ))
                    )}
                </Menu>



            </div>
        </div>
    );
};

export default AppTask;
