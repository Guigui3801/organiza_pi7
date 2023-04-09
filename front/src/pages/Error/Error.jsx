import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div>
      <h2>Essa página não existe</h2>
      <span>Encontramos essas páginas aqui:</span>
      <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link>
      <Link to="/contact">Contato</Link>
    </div>
  );
}
