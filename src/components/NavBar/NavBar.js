import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Gabriel Brune
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="#home"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="#about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Sobre mim
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="#services"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Tecnologias
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="#portfolio"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Projetos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="#contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contatos
              </NavLink>
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
