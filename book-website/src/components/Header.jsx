import React from "react";
import FaYoutube from "../icons/FaYoutube.png";
import FaTiktok from "../icons/FaTiktok.png";
import FaTelegram from "../icons/FaTelegram.png";
import FaInstagram from "../icons/FaInstagram.png";
import "../css/Header.css";

const Header = () => (
    <header className="header">
  <div className="top-row">
    <div className="left-section">
      <div className="social-icons">
        <a href="https://www.youtube.com/@harrypotter" aria-label="Youtube">
          <img src={FaYoutube} alt="Youtube" />
        </a>
        <a href="https://www.tiktok.com/discover/HarryPotter" aria-label="Tiktok">
          <img src={FaTiktok} alt="Tiktok" />
        </a>
        <a href="https://t.me/HarryPotterChanel934" aria-label="Telegram">
          <img src={FaTelegram} alt="Telegram" />
        </a>
        <a href="https://www.instagram.com/harrypotter/" aria-label="Instagram">
          <img src={FaInstagram} alt="Instagram" />
        </a>
      </div>
    </div>

    <div className="center-section">
      <h1 className="logo">Harry Potter</h1>
    </div>

    <div className="right-section">
      <input type="text" placeholder="Search" className="search-bar" />
      <button className="login">LOG IN</button>
      <button className="signup">SIGN UP</button>
    </div>
  </div>

  <div className="bottom-row">
    <nav className="nav">
      <a href="#">КНИГИ</a>
      <a href="#">ВІДЕО ПРО ГАРІ ПОТТЕРА</a>
      <a href="#">ЩОСЬ ТАМ</a>
      <a href="#">ПЕРСОНАЖІ</a>
      <a href="#">ЩОСЬ ТАМ</a>
      <a href="#">J.K. Rowling</a>
      <a href="#">АВТОР САЙТУ</a>
    </nav>
  </div>
</header>


);

export default Header;
