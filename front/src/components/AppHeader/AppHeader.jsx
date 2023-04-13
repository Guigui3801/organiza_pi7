import { Link } from "react-router-dom";
import React from "react";
import "./AppHeader.styles.scss";

const AppHeader = () => {
  return (
    <header>
      <h2>ORGANIZA</h2>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/services">Serviços</Link>
        <Link to="/Register">Cadastre-se</Link>
      </div>
    </header>
  );
};

export default AppHeader;
