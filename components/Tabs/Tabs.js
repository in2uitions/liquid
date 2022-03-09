import { useState } from "react";
import styles from "../../styles/Tabs/Tabs.module.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FirstSlide from "./SecondSlide";
import SecondSlide from "./FirstSlide";
import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Tabss() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      delay: 50,
      disable: "mobile",
    });
    window.addEventListener(
      "touchmove",
      () => {
        AOS.refresh();
      },
      false
    );
  });
  function ChangeOpacityOne() {
    document.getElementById("line1").style.visibility = "visible";
    document.getElementById("line2").style.visibility = "hidden";
    document.getElementById("line3").style.visibility = "hidden";
    document.getElementById("title1").style.opacity = 1;
    document.getElementById("title1").style.color = "white";
    document.getElementById("info1").style.opacity = 1;
    document.getElementById("info1").style.color = "white";
    document.getElementById("title2").style.opacity = 1;
    document.getElementById("title2").style.color = "grey";
    document.getElementById("info2").style.opacity = 0.7;
    document.getElementById("info2").style.color = "grey";
    document.getElementById("title3").style.opacity = 1;
    document.getElementById("title3").style.color = "grey";
    document.getElementById("info3").style.opacity = 0.7;
    document.getElementById("info3").style.color = "grey";
  }

  function ChangeOpacityTwo() {
    document.getElementById("line1").style.visibility = "hidden";
    document.getElementById("line2").style.visibility = "visible";
    document.getElementById("line3").style.visibility = "hidden";
    document.getElementById("title1").style.opacity = 1;
    document.getElementById("title1").style.color = "grey";
    document.getElementById("info1").style.opacity = 1;
    document.getElementById("info1").style.color = "grey";
    document.getElementById("title2").style.opacity = 1;
    document.getElementById("title2").style.color = "white";
    document.getElementById("info2").style.opacity = 1;
    document.getElementById("info2").style.color = "white";
    document.getElementById("title3").style.opacity = 1;
    document.getElementById("title3").style.color = "grey";
    document.getElementById("info3").style.opacity = 0.7;
    document.getElementById("info3").style.color = "grey";
  }

  function ChangeOpacityThree() {
    document.getElementById("line1").style.visibility = "hidden";
    document.getElementById("line2").style.visibility = "hidden";
    document.getElementById("line3").style.visibility = "visible";
    document.getElementById("title1").style.opacity = 1;
    document.getElementById("title1").style.color = "grey";
    document.getElementById("info1").style.opacity = 0.7;
    document.getElementById("info1").style.color = "grey";
    document.getElementById("title2").style.opacity = 1;
    document.getElementById("title2").style.color = "grey";
    document.getElementById("info2").style.opacity = 0.7;
    document.getElementById("info2").style.color = "grey";
    document.getElementById("title3").style.opacity = 1;
    document.getElementById("title3").style.color = "white";
    document.getElementById("info3").style.opacity = 1;
    document.getElementById("info3").style.color = "white";
  }

  const [index, setIndex] = useState(0);

  const Layout = () => {
    if (index == 0) {
      return <TabOne />;
    }
    if (index == 1) {
      return <TabTwo />;
    }
    if (index == 2) {
      return <TabThree />;
    }
  };
  function TabOne() {
    return (
      <Tabs className={styles.Tab1}>
        <TabList>
          <Tab className="TabArrow TabArrowInvert">{"➤"}</Tab>
          <span className="TabTitle" data-aos="zoom-out-down">BESPOKE INSIGHT & PRACTICE TOOLS</span>
          <Tab className="TabArrow">{"➤"}</Tab>
        </TabList>
        <TabPanel>
          <SecondSlide />
        </TabPanel>
        <TabPanel>
          <FirstSlide />
        </TabPanel>
      </Tabs>
    );
  }

  function TabThree() {
    return (
      <Tabs className={styles.Tab1} >
        <TabList >
          <Tab className="TabArrow TabArrowInvert">{"➤"}</Tab>
          <span className="TabTitle" data-aos="zoom-out-down">3</span>
          <Tab className="TabArrow">{"➤"}</Tab>
        </TabList>
        <TabPanel>
          <SecondSlide />
        </TabPanel>
        <TabPanel>
          <FirstSlide />
        </TabPanel>
      </Tabs>
    );
  }

  function TabTwo() {
    return (
      <Tabs className={styles.Tab1}>
        <TabList>
          <Tab className="TabArrow TabArrowInvert">{"➤"}</Tab>
          <span className="TabTitle" >2</span>
          <Tab className="TabArrow">{"➤"}</Tab>
        </TabList>
        <TabPanel>
          <SecondSlide />
        </TabPanel>
        <TabPanel>
          <FirstSlide />
        </TabPanel>
      </Tabs>
    );
  }

  return (
    <div className={styles.MainTabsContainer}>
      <div className="row" data-aos="fade-down-right">
        <div className="col-md-4">
          <div className={styles.rainbow}>
            <div className={styles.tab} onClick={ChangeOpacityOne}>
              <div className={styles.tabcontainer1} onClick={() => setIndex(0)}>
                <p
                  id="title1"
                  className={styles.title}
                  data-aos="zoom-out-down"
                >
                  STRATEGY
                </p>
                <p id="info1" className={styles.info}  data-aos="zoom-out-down">
                  for the shopper <br />& for the channel
                </p>
              </div>
              <div className={styles.line1} id="line1"   />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className={styles.rainbow}>
            <div className={styles.tab} onClick={ChangeOpacityTwo}>
              <div
                className={styles.tabcontainer2}
                id="tabcontainer2"
                onClick={() => setIndex(1)}
              >
                <p
                  id="title2"
                  className={styles.title}
                  data-aos="zoom-out-down"
                >
                  CREATIVE
                </p>
                <p id="info2" className={styles.info} data-aos="zoom-out-down">
                  concepts & content <br />
                  for commerce
                </p>
              </div>
              <div className={styles.line2} id="line2" />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className={styles.rainbow}>
            <div className={styles.tab} onClick={ChangeOpacityThree}>
              <div
                className={styles.tabcontainer3}
                id="tabcontainer3"
                onClick={() => setIndex(2)}
              >
                <p
                  id="title3"
                  className={styles.title}
                  data-aos="zoom-out-down"
                >
                  EXECUTION
                </p>
                <p id="info3" className={styles.info} data-aos="zoom-out-down">
                  emerchandising &<br />
                  operational exellence
                </p>
              </div>
              <div className={styles.line3} id="line3" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tabscontainer} data-aos="fade-right"
          data-aos-easing="ease-in-sine">
        <Layout />
      </div>
    </div>
  );
}
