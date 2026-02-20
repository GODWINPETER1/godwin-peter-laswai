import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Header.css';


function Header() {
  const { i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <header className="header">
      <div className="logo">Godwin</div>


      <div className="header-right">
       
        <select onChange={changeLanguage} className="lang-select">
            <option value="en">🇺🇸 EN</option>
            <option value="sw">🇹🇿 SW</option>
            <option value="fr">🇫🇷 FR</option>
            <option value="sv">🇸🇪 SV</option>
            <option value="ar">🇸🇦 AR</option>
        </select>

      </div>
    </header>
  );
}

export default Header;
