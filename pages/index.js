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
import React, { Component } from "react";

export default class Home extends Component {
  state = {
    lastScroll: new Date(),
    isActive: false,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isActive: true });
    }, 1000);
  }
  containerData = () => {
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
  };
  render() {
    if (
      this.state.lastScroll.getTime() < new Date().getTime() - 300 &&
      this.state.isActive === true
    ) {
      return this.containerData();
    } else {
      return <></>;
    }
  }
}
