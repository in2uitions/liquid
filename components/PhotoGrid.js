import style from "../styles/PhotoGrid.module.css";
import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "next";

export default function PhotoGrid() {
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
    <>
      <div className={style.ContainerPage}>
        <div className={style.Title}>
          <h2
            className={style.titleheader}
            data-aos="zoom-in-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1500"
          >
            Check out our{" "}
          </h2>
          <h1
            className={style.TitleGradient}
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            Liquid Thinking
          </h1>
        </div>
      </div>

      <div className={style.ContainerPage}>
        <div className={style.ContainerImage}>
          <div className={style.row}>
            <div className={style.column}>
              <img
                src="underwater.jpeg"
                className={style.image}
                data-aos="flip-up"
              />
              <img
                src="paris.jpeg"
                className={style.image}
                data-aos="flip-left"
              />
              <img
                src="wedding.jpeg"
                className={style.image}
                data-aos="flip-up"
              />
            </div>
            <div className={style.column}>
              <img
                src="wedding.jpeg"
                className={style.image}
                data-aos="flip-left"
              />
              <img
                src="rocks.jpeg"
                className={style.image}
                data-aos="flip-right"
              />
            </div>
          </div>

          <div
            className={style.Navlinks}
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <Link href="/" className={style.links}>
              Home
            </Link>
            <Link className={style.DotLight}>/</Link>
            <Link href="/" className={style.links}>
              Our Work
            </Link>
            <Link className={style.DotDark}>/</Link>
          </div>
        </div>
      </div>
    </>
  );
}
