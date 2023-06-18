import React, { useState } from "react";
import { Row, Col, Input, Form, Button,notification } from 'antd';
import { loginUser } from "./AppLogin.services";
import './AppLogin.styles.scss';
import { useNavigate } from 'react-router-dom';

const AppLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async () => {
    await loginUser(email, password).then((redirectUrl) => {
      if (redirectUrl) {
        navigate('/pomodoro'); 
      }else{
        notification.error({
          message: 'Erro de autenticação',
          description: 'E-mail ou senha incorretos. Por favor, tente novamente.',
        });
      }
    });
};


  return (
    <Row justify={"center"}>
      <Col xs={24} sm={24} md={6}>
        <div className="container">
          <h2>Login</h2>

          <Form layout={"vertical"} onSubmitCapture={handleSubmit}>
            <Form.Item name="email" label={"E-Mail"}>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>
            <Form.Item name="password" label={"Senha"}>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>
            <Row justify={'center'}>
              <Button type="default" htmlType="submit">Login</Button>
            </Row>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default AppLogin;
