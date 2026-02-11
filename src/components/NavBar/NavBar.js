import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoCodeSlash } from "react-icons/io5";

import "./styles.css";

const languageKey = {
  ptBr: 'English',
  enUs: 'Português'
}

function NavBar() {
  const [click, setClick] = useState(false);
  const { t: translate, i18n } = useTranslation();
  const items = translate('header.items') ?? [];
  const handleClick = () => setClick(!click);

  const handleNavClick = (e, link) => {
    if (link.startsWith("/#") && link.length > 2) {
      const id = link.slice(2);
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setClick(false);
  };
  const [languageSelected, setLanguageSelected] = useState('ptBr')
  const handleChangeLanguages = () =>{
    let selectedItem = languageSelected === 'ptBr'? 'enUs' : 'ptBr' 
    setLanguageSelected(selectedItem)
    i18n.changeLanguage(selectedItem);
    
  }
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a href="/" className="nav-logo">
            Gabriel Brune
            <IoCodeSlash color="#6B4798" />
          </a>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {items.map((item) => (
              <li className="nav-item" key={item.link}>
                <a
                  href={item.link}
                  activeClassName="active"
                  className="nav-links"
                  onClick={(e) => handleNavClick(e, item.link)}
                >
                  {item.name}
                </a>
              </li>  
            ))}
            <input 
              className="toggle" 
              type="checkbox" 
              role="switch" 
              name="toggle" 
              value="on" 
              onClick={handleChangeLanguages}
            />
            <div className="curtain">
              <p className="selected-language">
                {languageKey[languageSelected]}
                {languageSelected !== 'ptBr' ? (
                    <img  src='/images/brazil.png' alt="Brazil's Flag" />
                  ): (
                    <img  src='/images/united-states.png' alt="United States Flag" />
                )}
              </p>
            </div>
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
