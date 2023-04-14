import { Link } from "react-router-dom";
import React from "react";
import "./AppHeader.styles.scss";

const AppHeader = () => {
  return (
    <header>
      <h2>ORGANIZA</h2>
      <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/contact">Contato</Link></li>
        <li><Link to="/services">Serviços</Link></li>
      </ul>
      <button className="cadastro-btn">Cadastre-se</button>
    </header>
  );
};

export default AppHeader;