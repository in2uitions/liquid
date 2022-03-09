import style from "../styles/Partners.module.css";
import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "next";

export default function Partners() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      delay: 50,
      disable:"mobile"
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
    <>
      <div className={style.ContainerHeader}>
        <div className={style.titles}>
          <p
            data-aos="slide-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            we are trusted to many
          </p>
          <h2
            data-aos="slide-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            world class companies
          </h2>
        </div>
        <div className={style.ContainerHeader}>
          <div className="row">
            <div 
              className="column"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <img src="underwater.jpeg" className="img-fluid" />
              <img src="underwater.jpeg" className="img-fluid" />
              <img src="underwater.jpeg" className="img-fluid" />
              <img src="underwater.jpeg" className="img-fluid" />
              <img src="underwater.jpeg" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className={style.ContainerHeader}>
          <div className="row">
            <div 
              className="column"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <img src="underwater.jpeg" className="img-fluid" />
              <img src="underwater.jpeg" className="img-fluid" />
              <img src="underwater.jpeg" className="img-fluid" />
              <img src="underwater.jpeg" className="img-fluid" />
              <img src="underwater.jpeg" className="img-fluid" />
            </div>
          </div>
          <div className={style.titles}>
            <p
              data-aos="flip-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
        
              we work with some of the world s most
            </p>
            <p
              data-aos="flip-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              iconic brands
            </p>
          </div>
        </div>
        <div className="row" >
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="instagram.png" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="instagram.png" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="instagram.png" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="instagram.png" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="instagram.png" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="instagram.png" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="instagram.png" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="instagram.png" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="instagram.png" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="instagram.png" className={style.logo} data-aos="flip-left" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="incognito.png" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="incognito.png" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="incognito.png" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="incognito.png" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="incognito.png" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="incognito.png" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="incognito.png" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="incognito.png" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="incognito.png" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="incognito.png" className={style.logo} data-aos="flip-left" />
          </div>
        </div>{" "}
        <div className="row">
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="linkedin.svg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="linkedin.svg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="linkedin.svg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="linkedin.svg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="linkedin.svg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="linkedin.svg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="linkedin.svg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="linkedin.svg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="linkedin.svg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="linkedin.svg" className={style.logo} data-aos="flip-left" />
          </div>
        </div>{" "}
        <div className="row">
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="linkedin.svg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="linkedin.svg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="linkedin.svg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="linkedin.svg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="linkedin.svg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="linkedin.svg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="linkedin.svg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="linkedin.svg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="linkedin.svg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="linkedin.svg" className={style.logo} data-aos="flip-left" />
          </div>
        </div>{" "}
        <div className="row">
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="paris.jpeg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="paris.jpeg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="paris.jpeg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="paris.jpeg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="paris.jpeg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="paris.jpeg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="paris.jpeg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="paris.jpeg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="paris.jpeg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="paris.jpeg" className={style.logo} data-aos="flip-left" />
          </div>
        </div>{" "}
        <div className="row">
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="underwater.jpeg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="underwater.jpeg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="underwater.jpeg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="underwater.jpeg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="underwater.jpeg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="underwater.jpeg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="underwater.jpeg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="underwater.jpeg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="underwater.jpeg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="underwater.jpeg" className={style.logo} data-aos="flip-left" />
          </div>
        </div>{" "}
        <div className="row">
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="wedding.jpeg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="wedding.jpeg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="wedding.jpeg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="wedding.jpeg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="wedding.jpeg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="wedding.jpeg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="wedding.jpeg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="wedding.jpeg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="wedding.jpeg" className={style.logo} data-aos="flip-left" />
          </div>
          <div className="col-md-1 col-lg-1 col-sm-6 col-xm-6">
            <img src="wedding.jpeg" className={style.logo} data-aos="flip-left" />
          </div>
        </div>
      </div>
    </>
  );
}
