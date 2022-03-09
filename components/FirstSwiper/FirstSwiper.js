import React, { } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import arrow from "../../styles/FirstSwiper/Arrow.module.css";
import "swiper/css";
import "swiper/css/pagination";
import styles from "../../styles/FirstSwiper/Slides.module.css";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Autoplay, Pagination } from "swiper";
import FirstSlide from "./FirstSlide";

export default function FirstSwiper() {
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
    <div className={styles.MainContainer}>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        // loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <FirstSlide />
        </SwiperSlide>
        <SwiperSlide>
          <FirstSlide />
        </SwiperSlide>
        <SwiperSlide>
          <FirstSlide />
        </SwiperSlide>
      </Swiper>
      <div className={arrow.arrow}>
        <span></span>
      </div>
    </div>
  );
}
