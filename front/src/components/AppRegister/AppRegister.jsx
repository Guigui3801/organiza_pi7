import React, { useState, useContext } from "react";
import { Row, Col, Input, Form, Button } from 'antd';
import axios from 'axios';
import './AppRegister.styles.scss';


const AppRegister = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');

    function handleAdd() {
        //alert(name+" ,"+email+" ,"+password+" ,"+confirmpassword)
        if (name === '') {
            return;
        }
        if (email === '') {
            return;
        }
        if (password === '') {
            return;
        }
        if (confirmpassword === '') {
            return;
        }
        if (password != confirmpassword) {
            alert('As senhas não são iguais')
            return;
        }
        //criar objeto  com os dados 
        const userData = {
            name,
            email,
            password,
        }
    
    }
    return (
        <Row justify={"center"}>
            <Col>
                <div className="container">
                    <h2>CADASTRAR-SE</h2>

                    <Form
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16, offset: 4 }}
                        style={{ maxWidth: 600 }}
                        layout={"vertical"} onSubmitCapture={handleAdd}>



                        <Form.Item
                            name="name"
                            label={"Nome:"}
                        >
                            <Input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}

                            />
                        </Form.Item>

                        <Form.Item
                            name="email"
                            label={"E-Mail:"}
                        >
                            <Input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}

                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            label={"Senha:"}
                        >
                            <Input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}

                            />
                        </Form.Item>

                        <Form.Item
                            name="confirmpassword"
                            label={"Confirmar senha:"}
                        >
                            <Input
                                type="password"
                                id="confirmpassword"
                                value={confirmpassword}
                                onChange={(e) => setConfirmpassword(e.target.value)}

                            />
                        </Form.Item>


                        <Row justify={'center'}>
                            <Button type="default" htmlType="submit" >CADASTRAR</Button>
                        </Row>
                    </Form>
                </div>
            </Col>
        </Row>
    );
};

export default AppRegister;   