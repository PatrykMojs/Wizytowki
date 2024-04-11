import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPageComponent from "./MainPage/MainPageComponent";
import GalleryPageComponent from "./GalleryPage/GalleryPageComponent";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPageComponent/>}/>
          <Route path="/Gallery" element={<GalleryPageComponent />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
