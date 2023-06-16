import React, { useState } from "react";
import { Row, Col, Input, Form, Button } from 'antd';
import { loginUser } from "./AppLogin.services";
import './AppLogin.styles.scss';
import { useNavigate } from 'react-router-dom';

const AppLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = () => {
      loginUser(email, password)
        .then((redirectUrl) => {
          if (redirectUrl) {
            navigate('/pomodoro'); // Realizar o redirecionamento
          }
        });
    };
  
  return (
    <Row justify={"center"}>
            <Col>
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
              <Button type="default" className="bnt" htmlType="submit">Login</Button>
              <span onClick={() => navigate('/register')}>
                Se não tiver uma conta, clique aqui
              </span>
            </Row>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default AppLogin;
