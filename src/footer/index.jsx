import React from "react";
import apple from "../image/apple.png"
import play from "../image/play.png"
import humo from "../image/humo.png"
import mir from "../image/mir.png"
import paypal from "../image/pay pal.png"
import kivi from "../image/qivi.png"
import pay from "../image/pay.png"
import sber from "../image/sber.png"
import visa from "../image/visa.png"
import veb from "../image/veb.png"
import youtube from "../image/youtube.png"
import whatsapp from "../image/whatsapp.png"
import telegram from "../image/telegram.png"
import instagram from "../image/instagram.png"
import tik from "../image/tik-tok.png"
const footer = () => {
    return (
      <footer className="footer">
        <div className="conainer">
            <div className="footer__cards">
                <div className="footer__cards-card">
                    <h3 className="card__title">Информация</h3>
                    <p className="card__text">О нас</p>
                    <p className="card__text">Доставка</p>
                    <p className="card__text">Политика безопасности</p>
                    <p className="card__text">Условия соглашения</p>
                </div>
                <div className="footer__cards-card">
                    <h3 className="card__title">Каталог</h3>
                    <p className="card__text">Цветы</p>
                    <p className="card__text">Фруктовые корзины</p>
                    <p className="card__text">Воздушные шарики</p>
                    <p className="card__text">Комнатные растения</p>
                    <p className="card__text">Сладости</p>
                    <p className="card__text">Услуги</p>
                    <p className="card__text">Аксессуары</p>
                    <p className="card__text">Подарки</p>
                </div>
                <div className="footer__cards-card">
                    <h3 className="card__title">Личный кабинет</h3>
                    <p className="card__text">Личный кабинет</p>
                    <p className="card__text">Корзина</p>
                </div>
                <div className="footer__cards-card">
                    <h3 className="card__title">Адрес</h3>
                    <p className="card__text">г. Москва</p>
                    <p className="card__text">Доставка</p>
                </div>
                <div className="footer__cards-card">
                    <h3 className="card__title">Телефоны</h3>
                    <p className="card__text">+7 968 765-70-07</p>
                    <p className="card__text">+7 925 965-70-07</p>
                    <h3 className="card__title">По любым вопросам</h3>
                    <p className="card__title">info@floristman.ru</p>
                </div>
                    <div className="footer__logo">
                        <div className="footer__first-logo">
                            <img src={apple} alt="" className="footer__img" />
                            <img src={play} alt="" className="footer__img" />
                            <img src={humo} alt="" className="footer__img" />
                            <img src={mir} alt="" className="footer__img" />
                            <img src={paypal} alt="" className="footer__img" />
                            <img src={kivi} alt="" className="footer__img" />
                            <img src={pay} alt="" className="footer__img" />
                            <img src={sber} alt="" className="footer__img" />
                            <img src={visa} alt="" className="footer__img" />
                            <img src={veb} alt="" className="footer__img" />
                        </div>
                    </div>
            </div>
        </div>
      </footer>
    )
}

export default footer