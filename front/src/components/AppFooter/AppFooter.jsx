import { Layout, Row, Col } from 'antd';
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';
import './AppFooter.styles.scss';
const { Footer } = Layout;

export default function AppFooter  ()  {
  return (
    <Footer className="footer-container fixed-footer">
      <Row>
        <Col xs={24} sm={24} md={6}>
          <div className="logo-container" />

        </Col>
        <Col xs={24} sm={24} md={18}>
          <Row>
            <Col xs={24} sm={8} md={6}>
              <h4 className="footer-title">Sobre a ORGANIZA</h4>
              <ul className="footer-links">
                <li><a href="#">Sobre a ORGANIZA</a></li>
                <li><a href="#">Investidores</a></li>
                <li><a href="#">Sustentabilidade</a></li>
              </ul>
            </Col>
            <Col xs={24} sm={8} md={6}>
              <h4 className="footer-title">Ajuda</h4>
              <ul className="footer-links">
                <li><a href="#">Central de ajuda</a></li>
                <li><a href="#">Fale conosco</a></li>
                <li><a href="#">Perguntas frequentes</a></li>
              </ul>
            </Col>
            <Col xs={24} sm={8} md={6}>
              <h4 className="footer-title">Política de privacidade</h4>
              <ul className="footer-links">
                <li><a href="#">Termos de uso</a></li>
                <li><a href="#">Política de privacidade</a></li>
                <li><a href="#">Aviso de privacidade</a></li>
              </ul>
            </Col>
            <Col xs={24} sm={8} md={6}>
              <h4 className="footer-title">Siga a ORGANIZA</h4>
              <div className="social-links">
                <a href="#"><FacebookOutlined className="social-icon" /></a>
                <a href="#"><InstagramOutlined className="social-icon" /></a>
                <a href="#"><TwitterOutlined className="social-icon" /></a>
                <a href="#"><YoutubeOutlined className="social-icon" /></a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="footer-divider" />
      <p className="footer-text">© 2023 ORGANIZA, Inc. Todos os direitos reservados.</p>
    </Footer>
  );
};
