import React, { useState } from "react";
import { Row, Col, Input, Form, Button, notification } from 'antd';
import { registerUser } from "./AppRegister.services";
import './AppRegister.styles.scss';
import { useNavigate } from 'react-router-dom';

const AppRegister = () => {
    const navigate = useNavigate()    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    

    const handleSubmit = async () => {
        //alert(name+" ,"+email+" ,"+password+" ,"+confirmpassword)
        if (name === '') {
            notification.error({
                message: 'Erro de validação',
                description: 'Por favor, preencha o campo nome.',
            });
            return;
        }
        if (email === '') {
            notification.error({
                message: 'Erro de validação',
                description: 'Por favor, preencha o campo e-mail.',
            });
            return;
        }
        if (password === '') {
            notification.error({
                message: 'Erro de validação',
                description: 'Por favor, preencha o campo senha.',
            });
            return;
        }
        if (confirmpassword === '') {
            notification.error({
                message: 'Erro de validação',
                description: 'Por favor, preencha o campo confirmar senha.',
            });
            return;
        }
        if (password !== confirmpassword) {
            notification.error({
                message: 'Erro de validação',
                description: 'As senhas não são iguais.',
            });
            return;
        }
        //criar objeto  com os dados 
        await registerUser(name, email, password)
    
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
                        layout={"vertical"} onSubmitCapture={handleSubmit}>



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
                            <Button type="default" className="bnt" htmlType="submit" >CADASTRAR</Button>
                            <span onClick={() => navigate('/login')}>
                                Se ja tiver uma conta, clique aqui
                            </span>
                        </Row>
                    </Form>
                </div>
            </Col>
        </Row>
    );
};

export default AppRegister;   