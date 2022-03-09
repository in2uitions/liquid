import TabInfo from "./TabInfo";
import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SecondSlide() {
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

  return (
    <div
      className="row"
      data-aos="fade-right"
      data-aos-duration="1500"
      data-aos-easing="ease-in-sine"
    >
      <div className="col-lg-3">
        <TabInfo
          title={"GO TO MARKET"}
          info={
            "We help clients get product to market. Liquid's Strategic and Creative approach to planning, creating and executing Go to Market plans make us an expert partner."
          }
          addinfo={
            "We help sell in to retailers and marketplaces, facilitate listings and set up distribuition solutions."
          }
          data-aos="zoom-out-down"
        />
      </div>
      <div className="col-lg-3">
        <TabInfo
          title={"SHOPPER WHO"}
          info={
            "We understand our target shoppers - their motivations behaviours and barriers."
          }
          addinfo={
            "We establish exactly why they buy and what is likely to move them to purchase in the channel category."
          }
          data-aos="zoom-out-down"
        />
      </div>
      <div className="col-lg-3">
        <TabInfo
          title={"SHOPPER JOURNEY"}
          info={"We understand their shipping journey from beginning to end."}
          addinfo={
            "We understand what they search for and how they search.We uncover all their needs at every stage along their shopping journey."
          }
          data-aos="zoom-out-down"
        />
      </div>
      <div className="col-lg-3">
        <TabInfo
          title={"CHANNEL PLANNING"}
          info={"We audit the category across all relevant platforms."}
          addinfo={
            "We define touchpoints, tactics and content type to capture shoppers and drive sustainable conversions."
          }
          data-aos="zoom-out-down"
        />
      </div>
    </div>
  );
}
