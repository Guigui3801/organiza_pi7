import React, { useState } from "react";
import "./AppTask.scss";
import { Button, Menu, Input } from "antd";

const taskData = [
    {
        id: 1,
        name: 'Comer um pão',
        created_at: '27/05/2023',
        completed: false,
        postponed: true,
        forgot: false,
        abandoned: false,
        forbidden: true,
    },
];

const AppTask = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleAdd = () => {
        setMenuOpen(!menuOpen);
    };
    const handleAppend = () => {
        if (inputValue != ''){
        taskData.push({
            id: taskData.length + 1,
            name: inputValue,
            created_at: new Date().toLocaleDateString(),
            completed: false,
            postponed: true,
            forgot: false,
            abandoned: false,
            forbidden: true,
        });
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
                        <Input placeholder="Nome da tarefa" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                    </Menu.Item>
                    <Menu.Item key="2"><Button onClick={() => handleAppend()}>Adicionar</Button></Menu.Item>
                </Menu>
                <div className="spacer" />
                <h2>Suas tarefas:</h2>
                {taskData.map((task) => (
                    <div key={task.id}>
                        <p>
                            {task.name} => Criada em => {task.created_at}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AppTask;
