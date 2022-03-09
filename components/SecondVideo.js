import ReactPlayer from "react-player";
import style from "../styles/SecondVideo.module.css";
import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "next";

export default function SecondVideo() {
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
      <div className={style.ContainerHeader}>
        <div className={style.Navlinks} data-aos="zoom-out-down">
          <Link href="/" className={style.links}>
            Home
          </Link>
          <Link className={style.DotLight}>/</Link>

          <Link href="/" className={style.links}>
            Our Work
          </Link>
          <Link className={style.DotDark}>/</Link>

          <Link href="/" className={style.links}>
            H&M Supreme{" "}
          </Link>
          <h2 className={style.head2} data-aos="zoom-out-up">
            {" "}
            Brand zone
          </h2>
          <h1 className={style.TitleGradient} data-aos="slide-left">
            H&S SUPREME
          </h1>
        </div>
        <div className={style.Title} data-aos="fade-left">
          <p className={style.SubTitle}>#retail</p>
          <p className={style.SubTitle}>#design</p>
          <p className={style.SubTitle}>#creative</p>
        </div>

        <div className={style.text}>
          <p data-aos="fade-down-right">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum <br />
            has been the industry s standard dummy test ever since the 1500S,
            when an unknown print- <br />
            er took a galley of type and scrambled it to make a type specimen
            book.
          </p>
        </div>

        <div className={style.video}>
          <ReactPlayer
            data-aos="zoom-in"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1500"
            controls
            url={"http://www.w3schools.com/html/mov_bbb.mp4"}
            height={"100%"}
            width={"100%"}
          />
        </div>
      </div>
    </>
  );
}
