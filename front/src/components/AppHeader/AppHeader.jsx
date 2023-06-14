import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./AppHeader.styles.scss";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>ORGANIZA</h3>
      <nav ref={navRef}>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>Sobre</Link>
        <Link to={'/contact'}>Contato</Link>
        <Link to={'services'}>Serviços</Link>
        <Link className="login-nav-hidden">Fazer Login</Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      <Link to={'/login'} className="link">
        <h3 className="login-btn">Fazer Login</h3>
      </Link>
    </header>
  );
}

export default Navbar;
