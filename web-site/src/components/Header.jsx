import React from "react";
import "../css/header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>konya ereğli mayalı</h1>
      </div>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/">Ana Sayfa</Link>
          </li>
          <li>
            <Link to="/about">Hakkımızda</Link>
          </li>
          <li>
            <Link to="/contact">İletişim</Link>
          </li>
          <li>
            <Link to="/sikayet">İstek ve Şikayet</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
