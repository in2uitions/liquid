import styles from "../styles/Info.module.css";
import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Info() {
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
  return (
    <>
      <div className={styles.container}>
        <div className={styles.Navlinks}>
          <h2
            className={styles.title}
            data-aos="zoom-in-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1500"
          >
            Liquid Thinking
          </h2>

          <div className={styles.TitleContainer}>
            <h2
              className={styles.TitleGradient}
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="800"
            >
              Science
            </h2>

            <h2
              className={styles.TitleGradient}
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1200"
            >
              +
            </h2>

            <h2
              className={styles.TitleGradient1}
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="800"
            >
              Art
            </h2>
            <h2
              className={styles.TitleGradient1}
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1800"
            >
              +
            </h2>

            <h2
              className={styles.TitleGradient2}
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="800"
            >
              Instinct
            </h2>
          </div>
        </div>
      </div>
      <div className={styles.text}>
        <p data data-aos="zoom-in-right" data-aos-easing="ease-in-sine">
          Our unique approach
          <br />
          We seek out and use all availble sources pf date, from retailer and
          platforms,
          <br />
          from the market, from our own unsatiable curiosity.
        </p>

        <p data-aos="zoom-in-right" data-aos-easing="ease-in-sine">
          We use our own suite of bespoke tools to identify new opportunities
          and guide
          <br />
          the development of the right strategic, creative and technological
          solutions.
        </p>

        <h2 data-aos="zoom-in-right" data-aos-easing="ease-in-sine">
          Out team are highly experienced in marketing to shoppers across the
          globe
          <br />
          and so we trust our nose when need be!
        </h2>
      </div>
    </>
  );
}
