import React from "react";
import { Row, Col, Input, Form, Button } from 'antd';
import './AppRegister.styles.scss';

const AppRegister = () => {
    return (
        <Row justify={"center"}>
            <Col xs={24} sm={24} md={6}>
                <div className="container">
                    <h2>CADASTRAR-SE</h2>

                    <Form layout={"vertical"}>
                        <Form.Item
                            name="name"
                            label={"Nome"}
                        >
                            <Input
                                type="text"
                                id="name"
                            //value={}

                            />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            label={"E-Mail"}
                        >
                            <Input
                                type="email"
                                id="email"
                            //value={}

                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            label={"Senha"}
                        >
                            <Input
                                type="password"
                                id="password"
                            //value={}

                            />
                        </Form.Item>
                        <Form.Item
                            name="confirmpassword"
                            label={"Confirmar senha"}
                        >
                            <Input
                                type="password"
                                id="confirmpassword"
                            //value={}

                            />
                        </Form.Item>
                        <Row justify={'center'}>
                            <Button type="default">Register</Button>
                        </Row>
                    </Form>
                </div>
            </Col>
        </Row>
    );
};

export default AppRegister;   