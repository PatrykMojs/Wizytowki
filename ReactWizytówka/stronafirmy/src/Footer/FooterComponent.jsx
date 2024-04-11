import React from "react";
import './FooterComponent.css';

const FooterComponent = () => {

    return(
        <>
            <footer>
                <div className="containerFooter">
                    <div className="columnFooter">
                        <h4>NAZWA FIRMY</h4>
                        <hr />
                        <ul>
                            <li>ul. Polska 5,</li>
                            <li>00-000 Warszawa</li>
                        </ul>

                    </div>
                    <div className="columnFooter">
                        <h4>WYBURZENIA I ROZBIÓRKI</h4>
                        <hr />
                        <ul>
                            <li>Wyburzenia</li>
                            <li>Rozbiórki</li>
                            <li>Wyburzenia Śląsk</li>
                            <li>Wyburzenia Wrocław</li>
                            <li>Wyburzenia Warszawa</li>
                        </ul>
                    </div>
                    <div className="columnFooter">
                        <h4>USŁUGI DODATKOWE</h4>
                        <hr />
                        <ul>
                            <li>Roboty ziemne</li>
                            <li>Roboty drogowe</li>
                            <li>Skup złomu</li>
                            <li>Skup metali kolorowych</li>
                            <li>Sprzedaż kruszyw</li>
                        </ul>
                    </div>
                    <div className="columnFooter">
                        <h4>INFORMACJE</h4>
                        <hr />
                        <ul>
                            <li>Aktualności</li>
                            <li>Kontakt</li>
                            <li>Zapytania ofertowe</li>
                            <li>RODO</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )

}
export default FooterComponent;