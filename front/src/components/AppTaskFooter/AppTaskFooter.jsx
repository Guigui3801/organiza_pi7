import React, { useState, useEffect } from "react";
import "./AppTaskFooter.scss";
import { Button, Menu, Input } from "antd";
import { CreateTask } from "./AppTask.Service";


function CreateTaskHandler () {
    //Open modal AppTask

}

const AppTaskFooter = () => {
    return (
        <div className="AppTaskFooter">
            <Button type="primary" onClick={CreateTaskHandler}>
                Minhas Tarefas
            </Button>
        </div>
    );
}

export default AppTaskFooter