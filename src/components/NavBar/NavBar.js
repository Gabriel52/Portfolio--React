import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./styles.css";

function NavBar() {
  const [click, setClick] = useState(false);
  const { t:translate } = useTranslation() 
  const [items] = useState(translate('header.items'));
  const { i18next } = useTranslation()

  const handleClick = () => setClick(!click);

  const handleChangeLanguages = (event) =>{
    let selectLanguage = event.target.value
    console.log(selectLanguage)
    i18next.changeLanguage('ptBR')
    
  }

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a href="/" className="nav-logo">
            Gabriel Brune
            <i className="fas fa-code"></i>
          </a>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {items?.map((item)=>(
              <li className="nav-item">
                <a
                  href={item.link}
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  {item.name}
                </a>
              </li>  
            ))}
            <select 
              className="select_language" 
              name="select" 
              onClick={handleChangeLanguages}
            >
              <option value="ptBR"selected >Português</option>
              <option value="en" >English</option>
            </select>
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
