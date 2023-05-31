import { Link } from "react-router-dom";
import React from "react";
import "./AppHeader.styles.scss";

const AppHeader = () => {
  return (
    <header>
      <h2>ORGANIZA</h2>
      <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Sobre</Link></li>
        <li><Link to="/contact">Contato</Link></li>
        <li><Link to="/services">Serviços</Link></li>
      </ul>
      <button className="cadastro-btn"><Link to="/register">Cadastre-se</Link></button>
    </header>
  );
};

export default AppHeader;