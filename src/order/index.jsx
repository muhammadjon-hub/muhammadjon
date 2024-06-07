import React from "react";
import "./stayle.css"
import flower from "../image/discount.png"


const Order = ()=> {
    return (
        <section className="order">
            <div className="container">
                <h3 className="order__title">Заказать уникальный букет</h3>
                <div className="order__content">
                    <from className="order__box">
                        <input type="text" className="order__box-name" placeholder="Ваше имя*"/>
                        <input type="number" className="order__box-num" placeholder="Ваш телефон*"/>
                        <textarea name="" id="" className="order__box-text"placeholder="Ваша идея*"></textarea>
                        <div className="order__box-content">
                            <p className="order__box-content-search">+ Прикрепить файл</p>
                            <button className="order__box-content-btn">Отправить</button>
                        </div>
                    </from>
                    <img src={flower} alt="" className="order__box-img" />
                </div>
            </div>
        </section>
    )
}

export default Order