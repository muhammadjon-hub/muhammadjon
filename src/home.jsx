import React from "react";
import Category from "./cotigori";
import Discount from "./discount";
import Order from "./order";
import Info from "./information";
import Header from "./header";


const Home = () => {
 return (
    <>
    <Header/>
    <Category/>
    <Discount/>
    <Order/>
    <Info/>
    </>
 )
}

export default Home;

