import React from "react";
import "./style.css";

import logo from "../image/Floristman.jpg";
import banner from "../image/header__banner.jpg"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="container">
            <header className="header">
                <div className="header__top">
                    <nav className="header__top-nav">
                        <Link to="/contact">
                        <a href="#" className="header__top-link">Контакты</a>
                        </Link>
                        <Link to="/aboutUs">
                        <a href="#" className="header__top-link">О нас</a>
                        </Link>
                        <a href="#" className="header__top-link">Доставка</a>
                        <a href="#" className="header__top-link">Политика безопасности</a>
                        <a href="#" className="header__top-link">Условия соглашения</a>
                    </nav>
                    <button className="header__top-btn">
                        Личный кабинет
                    </button>
                </div>
                <div className="header__flor">
                    <img src={logo} alt="logo" />
                    <div className="header__news">
                        <div className="header__news-add">
                            <p className="header__news-text">
                                Адрес магазина
                            </p>
                            <a href="" className="header__news-span">
                                г. Москва
                            </a>
                        </div>
                        <div className="header__news-ofis">
                            <p className="header__news-text">
                                Главный офис
                            </p>
                            <a href="tel: +998999999999" className="header__news-phone">+7 968 765-70-07</a>
                        </div>
                    </div>
                </div>
                <div className="header__info">
                    <nav className="header__info-nav">
                        <a href="#" className="header__info-link">Цветы</a>
                        <a href="#" className="header__info-link">Подарки</a>
                        <a href="#" className="header__info-link">Фруктовые корзины</a>
                        <a href="#" className="header__info-link">Воздушные шарики</a>
                        <a href="#" className="header__info-link">Комнатные растения</a>
                        <a href="#" className="header__info-link">Сладости</a>
                        <a href="#" className="header__info-link">Услуги</a>
                        <a href="#" className="header__info-link">Аксессуары</a>
                    </nav>
                </div>
               <div className="header__banner">
                <img src={banner} alt="banner" className="header__banner-img"/>
                </div> 
            </header>
        </div>
    )
}

export default Header;