import React from "react";
import './BlocksComponent.css';

const BlocksComponent = () => {

    return(
        <>
            <h1 className="h1Blocks">WYBURZENIA, ROZBIÓRKI, DEMONTAŻE NA TERENIE CAŁEGO KRAJU</h1>

            <div className="containerBlocksBackground">
                <div className="containerBlocks">
                    <div className="Block1" id="Block">
                        <p>Wyburzenia rozbiórki demontaże</p>
                    </div>
                    <div className="Block2" id="Block">
                        <p>Roboty ziemne</p>
                    </div>
                    <div className="Block3" id="Block">
                        <p>Handel złomem</p>
                    </div>
                    <div className="Block4" id="Block">
                        <p>Sprzedaz kruszywa</p>
                    </div>

                    <div className="Block5" id="Block">
                        <h2>DANE KONTAKTOWE</h2>
                        <p>Nazwa firmy</p>
                        <p>ul. Polska 5,</p>
                        <p>00-000 Warszawa</p>

                        <p>Właściciel:</p>
                        <p>Jan Kowalski</p>
                        <p>tel.: <a href="tel:+48000000000">000 000 000</a></p>

                        <p>NIP: 000-000-000-00</p>
                        <p>REGON: 000000000</p>
                    </div>
                    <div className="Block6" id="Block">
                        <p>lokalizacje</p>
                    </div>
                    <div className="Block7" id="Block">
                        
                    </div>
                    <div className="Block8" id="Block">
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default BlocksComponent;