import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { notification } from "antd";
import "./AppHeader.styles.scss";

function Navbar() {
  const navRef = useRef();
  const navigate = useNavigate();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const isLogged = localStorage.getItem("token");

  function logout() {
    notification.success({
      message: 'Até mais!',
      description: 'Você saiu de nosso sistema!'
    })
    localStorage.clear()
    navigate('/')
  }

  return (
    <header>
      <h3>ORGANIZA</h3>
      <nav ref={navRef}>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>Sobre</Link>
        <Link to={"/contact"}>Contato</Link>
        <Link to={"services"}>Serviços</Link>
        {isLogged ? (
          <>
            <Link to={"/pomodoro"}>Pomodoro</Link>
            <Link to={"/kanban/1"}>TO DO's</Link>
          </>
        ) : null}
        <Link className="login-nav-hidden">Fazer Login</Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      {!isLogged ? (
        <>
          <Link to={"/login"} className="link">
            <h3 className="login-btn">Fazer Login</h3>
          </Link>
        </>
      ) : (
        <>
          <h3 onClick={() => logout()} className="login-btn">
            Sair
          </h3>
        </>
      )}
    </header>
  );
}

export default Navbar;
