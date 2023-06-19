import React, { useState, useEffect } from "react";
import "./AppTaskFooter.scss";
import { Button, Menu, Input } from "antd";
import { CreateTask } from "./AppTask.Service";


const AppTaskFooter = () => {
    return (
        <div className="AppTaskFooter">
            <Button type="primary" onClick={CreateTask}>
                Create Task
            </Button>
        </div>
    );
}

export default AppTaskFooter