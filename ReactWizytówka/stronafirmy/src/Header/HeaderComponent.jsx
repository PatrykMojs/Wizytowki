import React from "react";
import './HeaderComponent.css';
import NavBarComponent from "../NavBar/NavBarComponent";

const HeaderComponent = () => {

    return(
        <>
            <header>
                <div className="containerHeader">
                    <img src="https://img.freepik.com/darmowe-wektory/plaska-konstrukcja-szablon-logo-firmy-budowlanej_23-2150005175.jpg?t=st=1712839507~exp=1712843107~hmac=9320a1e5025d37403a18491272d5c0329c7182e6413a81047bb66c79e3281a96&w=740" alt="logo"/>
                    <p className="intro">
                        WYBURZENIA, ROZBIÓRKI, DEMONTAŻE
                        NA TERENIE CAŁEGO KRAJU
                    </p>
                   
                    <p className="phoneNumber">TELEFON KONTAKTOWY: <a href="tel:+48000000000">000 000 000</a></p>
                </div>
                
            </header>
            <hr className="hrHeader"/>
            <NavBarComponent/>
        </>
    );

}
export default HeaderComponent;