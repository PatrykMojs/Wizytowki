import React, {useState} from "react";
import './NavBarComponent.css';
import Popup from '../Popup/PopupComponent';
import { Link } from "react-router-dom";

const NavBarComponent = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
    }

    return(
        <>
            <ul className="NavBar">
                <li><Link to="/">STRONA GŁÓWNA</Link></li>
                <li><Link to="/Gallery">GALERIA</Link></li>
                <li onClick={togglePopup}>KONTAKT</li>
                <li>RODO</li>
                <li>ISO</li>
            </ul>
            {isPopupVisible && <Popup onClose={togglePopup}/>}
        </>
    );

}
export default NavBarComponent;