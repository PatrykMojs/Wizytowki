import React from "react";
import './PopupComponent.css';

const PopupComponent = ({onClose}) =>{
    return(
        <>
            <div className="popup">
                <span className="closeButton" onClick={onClose}>x</span>
                <img src="https://img.freepik.com/darmowe-wektory/ilustracja-biznesmen_53876-5856.jpg?t=st=1712841771~exp=1712845371~hmac=39276f5c4672a4d792fd0bfc22edc69788bf6e54cd740d6b06e3a41b8f10923f&w=740" alt="profilePhoto" className="profilePhoto"/>
                <p>NUMER TELEFONU: 000 000 000</p>
                <p>ADRES EMAIL: example@example.com</p>
                <button onClick={onClose}>Zamknij</button>
            </div>
        </>
    )
}

export default PopupComponent;