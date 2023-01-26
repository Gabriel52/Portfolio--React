import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./styles.css";

const languageKey = {
  ptBr: 'Português',
  enUs: 'English'
}

function NavBar() {
  const [click, setClick] = useState(false);
  const { t:translate } = useTranslation() 
  const [items, setItems] = useState();
  const { i18n } = useTranslation()
  const handleClick = () => setClick(!click);
  const [languageSelected, setLanguageSelected] = useState('ptBr')
  const handleChangeLanguages = () =>{
    let selectedItem = languageSelected === 'ptBr'? 'enUs' : 'ptBr' 
    setLanguageSelected(selectedItem)
    i18n.changeLanguage(selectedItem);
    
  }
  useEffect(()=>{
    setItems(translate('header.items'))
  },[translate])
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
