import FirstSwiper from "../components/FirstSwiper/FirstSwiper";
import FirstTab from "../components/Tabs/FirstTab";
import Tabs from "../components/Tabs/Tabs";
import VideoPlayer from "../components/VideoPlayer";
import Info from "../components/Info";
import Partners from "../components/Partners";
import LiquidPeople from "../components/Employee/LiquidPeople";
import Footer from "../components/footer/Footer";
import PhotoGrid from "../components/PhotoGrid";
import NavBar from "../components/NavBar";
import React from "react";

export default function Home() {
  return (
      <>
        <NavBar />
        <div className="FirstSwiperContainer">
          <FirstSwiper />
        </div>
        <VideoPlayer />
        <Tabs />
        <div className="TabContainer">
          <FirstTab />
        </div>
        <Info />
        <PhotoGrid />
        <Partners />
        <LiquidPeople />
        <Footer />
      </>
    );
  
 
}
