import React from "react";
import "./AppTaskFooter.scss";
import { Button } from "antd";

import { useNavigate } from "react-router-dom";




const AppTaskFooter = () => {
    const navigate = useNavigate();
    function CreateTaskHandler () {
        navigate('/kanban/1')
        
    }
    return (
        <div className="AppTaskFooter">
            <Button type="primary" onClick={CreateTaskHandler}>
                Minhas Tarefas
            </Button>
        </div>
    );
}

export default AppTaskFooter