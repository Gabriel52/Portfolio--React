import React, { useState } from "react";
import "./styles.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a href="/" className="nav-logo">
            Gabriel Brune
            <i className="fas fa-code"></i>
          </a>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                href="#home"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Sobre mim
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/#services"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Tecnologias
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#portfolio"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Projetos
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contatos
              </a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
