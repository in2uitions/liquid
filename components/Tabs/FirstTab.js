import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FirstSlide from "./SecondSlide";
import SecondSlide from "./FirstSlide";
import styles from "../../styles/Tabs/Tabs.module.scss";
import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function FirstTab() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      delay: 50,
      disable:'mobile'
    });
    window.addEventListener(
      "touchmove",
      () => {
        AOS.refresh();
      },
      false
    );
  });

  const [info, setInfo] = useState(TabOne);
  function TabOne() {
    return (
      <Tabs className={styles.Tab1}>
        <TabList>
          <Tab className="TabArrow ReverseArrow">{"➤"}</Tab>
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
      <Tabs
        className={styles.Tab1}
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <TabList
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="1500"
          data-aos-easing="ease-in-sine"
        >
          <Tab className="TabArrow ReverseArrow">{"➤"}</Tab>
          <span className="TabTitle" data-aos="zoom-out-down">2</span>
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
          <Tab className="TabArrow ReverseArrow">{"➤"}</Tab>
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

  return (
    <div>
      <info />
    </div>
  );
}
