import React from "react";
import './GalleryPageComponent.css';
import HeaderComponent from '../Header/HeaderComponent'
import BoxGalleryComponent from "./BoxGalleryOne/BoxGalleryOneComponent";
import BoxGalleryTwoComponent from "./BoxGalleryTwo/BoxGalleryTwoComponent";
import FooterComponent from "../Footer/FooterComponent";


const GalleryPageComponent = () => {

    return(
        <>
            <HeaderComponent/>
            <h1 className="h1Gallery">GALERIA ZDJĘĆ</h1>
            <div className="containerGalleryBackground">
                <BoxGalleryComponent/>
                <BoxGalleryTwoComponent/>
            </div>
            <FooterComponent/>
        </>
    )

};
export default GalleryPageComponent;