import React from "react";
import { Row, Col, Input, Form, Button } from "antd";
import "./AppContact.styles.scss";

function AppContact() {
  const onFinish = (values) => {
    console.log("Form values:", values);
    // enviar dados do formulário para o servidor
  };

  return (
    <>
      <div className="contact">
        <h1>CONTATO</h1>

        <p>Telefone: (11) 4002-8922</p>
        <p>
          Email:<a href="*"> contato@exemplo.com</a>
        </p>
        <p>Rua Exemplo, 123 - Bairro - Cidade</p>
        <Form onFinish={onFinish}>
          <Row justify={"center"}>
            <Col xs={5} sm={5} md={10}>
              <Form.Item name="name" rules={[{ required: true }]}>
                <Input placeholder="Nome" />
              </Form.Item>
              <Form.Item name="email" rules={[{ required: true }]}>
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item name="phone" rules={[{ required: true }]}>
                <Input placeholder="Telefone" />
              </Form.Item>
            </Col>
            <Col xs={3} sm={3} md={10}>
              <Form.Item name="message" rules={[{ required: true }]}>
                <Input.TextArea placeholder="Mensagem" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Enviar mensagem
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default AppContact;
