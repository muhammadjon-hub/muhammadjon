import React from "react";
import { datainfo } from "./data";
import "./stayle.css";
import { infoData2 } from "./data";



const Info = () => {
    return (
        <section className="info">
            <div className="container">
                <h3 className="info__title">4 веские причины выбрать нас!</h3>
                <div className="info__cadrs">
                    {
                        datainfo.map((el) => (    
                            <div className="info__card"  key={el.id}>
                                <img src={el.Image} alt='' className="info__card-img" />
                                 <h3 className="info__card-title"></h3>
                            <p className="info__card-text"></p>
                            </div> 
                        )) 
                    }
                    </div>
                    <h3 className="info__title">Как оформить заказ?</h3>
                    <div className="info__cadrs">
                        {
                            infoData2.map((el)=>(
                                <div className="info__cards-card"key={el.id}>
                                    <img src={el.Image} alt={el.text} className="info__card-img" />
                                    <div className="info__card-content">
                                        <h3 className="info__card-content-title" key={el.title}></h3>
                                        <p className="info__card-content-text" key={el.text}></p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
            </div>
        </section>
    )

}

export default Info