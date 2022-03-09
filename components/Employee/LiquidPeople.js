import style from "../../styles/Employee.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LiquidPeople() {
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
      <div className={style.Container}>
        <h2
          className={style.TitleGradient}
          data-aos="zoom-in-left"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1500"
        >
          liquid people
        </h2>
        <h2
          className={style.head}
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          your team of dedicated retail experts
        </h2>
        <p className={style.Text} data-aos="zoom-out">
          Our expert and diverse of Consultants, Analysts, Creatives, Producers
          and Peoject Managers are made up of 18+ Nationalities.
          <br />
          Liquid s Leadership team have collectively over 70 Years experience in
          helping brands win at retail.
        </p>
      </div>

      <div className={style.ContainerImages}>
        <div className="row">
          <div className="col-lg-2 col-md-4 col-sm-4 col-xm-6">
            <div
              className={style.BigAvatar}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className={style.AvatarContainer}>
                <a href="">
                  <img src="incognito.png" className={style.BigCircle} />
                </a>
              </div>
              <h5 className={style.CircleAvatarH}>
                Sachinn J Laala <image src="linkedin.svg" />
              </h5>
              <p className={style.CircleAvatarP}>CHIEF EXECUTIVE OFFICER</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-xm-6">
            <div
              className={style.BigAvatar}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className={style.AvatarContainer}>
                <a href="">
                  <img src="incognito.png" className={style.BigCircle} />
                </a>
              </div>
              <h5 className={style.CircleAvatarH}>
                Kristine Varma <image src="linkedin.svg" />
              </h5>
              <p className={style.CircleAvatarP}> CHIEF EXECUTIVE OFFICER</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-xm-6">
            <div
              className={style.BigAvatar}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className={style.AvatarContainer}>
                <a href="">
                  <img src="incognito.png" className={style.BigCircle} />
                </a>
              </div>
              <h5 className={style.CircleAvatarH}>
                Colman Sheil <image src="linkedin.svg" />
              </h5>
              <p className={style.CircleAvatarP}>CHIEF EXECUTIVE OFFICER</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-xm-6">
            <div
              className={style.BigAvatar}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className={style.AvatarContainer}>
                <a href="">
                  <img src="incognito.png" className={style.BigCircle} />
                </a>
              </div>
              <h5 className={style.CircleAvatarH}>
                Sachinn J Laala <image src="linkedin.svg" />
              </h5>
              <p className={style.CircleAvatarP}>CHIEF EXECUTIVE OFFICER</p>
            </div>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-4 col-xm-6">
            <div
              className={style.BigAvatar}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className={style.AvatarContainer}>
                <a href="">
                  <img src="incognito.png" className={style.BigCircle} />
                </a>
              </div>

              <h5 className={style.CircleAvatarH}>
                Sachinn J Laala <image src="linkedin.svg" />
              </h5>
              <p className={style.CircleAvatarP}>CHIEF EXECUTIVE OFFICER</p>
            </div>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-4 col-xm-6">
            <div
              className={style.BigAvatar}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className={style.AvatarContainer}>
                <a href="">
                  <img src="incognito.png" className={style.BigCircle} />
                </a>
              </div>
              <h5 className={style.CircleAvatarH}>
                Sachinn J Laala <image src="linkedin.svg" />
              </h5>
              <p className={style.CircleAvatarP}>CHIEF EXECUTIVE OFFICER</p>
            </div>
          </div>
        </div>

        <div className="row" data-aos="flip-up">
          <div className="col-lg-2 col-md-3 col-sm-6 ">
            <div className={style.SmallAvatar}>
              <a href="">
                <img src="incognito.png" className={style.image} />
              </a>
              <a href="">
                <img src="incognito.png" className={style.image} />
              </a>
              <a href="">
                <img src="incognito.png" className={style.image} />
              </a>
            </div>

            <div className={style.SmallAvatar}>
              <a href="">
                <img src="incognito.png" className={style.image} />
              </a>
              <a href="">
                <img src="incognito.png" className={style.image} />
              </a>
              <a href="">
                <img src="incognito.png" className={style.image} />
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 ">
            <div className={style.SmallAvatar}>
              <a href="">
                <img src="incognito.png" className={style.image} />
              </a>
              <a href="">
                <img src="incognito.png" className={style.image} />
              </a>
              <a href="">
                <img src="incognito.png" className={style.image} />
              </a>
            </div>

            <div className={style.SmallAvatar}>
              <a href="">
                <img src="incognito.png" className={style.image} />
              </a>
              <a href="">
                <img src="incognito.png" className={style.image} />
              </a>
              <a href="">
                <img src="incognito.png" className={style.image} />
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 ">
            <div className={style.SmallAvatar}>
              <a href="">
                <img src="incognito.png" className={style.image} />
              </a>
              <a href="">
                <img src="incognito.png" className={style.image} />
              </a>
              <a href="">
                <img src="incognito.png" className={style.image} />
              </a>
            </div>

            <div className={style.SmallAvatar}>
              <a href="">
                <img src="incognito.png" className={style.image} />
              </a>
              <a href="">
                <img src="incognito.png" className={style.image} />
              </a>
              <a href="">
                <img src="incognito.png" className={style.image} />
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 ">
            <div className={style.SmallAvatar}>
              <a href="">
                <img src="incognito.png" className={style.image} />
              </a>
              <a href="">
                <img src="incognito.png" className={style.image} />
              </a>
              <a href="">
                <img src="incognito.png" className={style.image} />
              </a>
            </div>

            <div className={style.SmallAvatar}>
              <a href="">
                <img src="incognito.png" className={style.image} />
              </a>
              <a href="">
                <img src="incognito.png" className={style.image} />
              </a>
              <a href="">
                <img src="incognito.png" className={style.image} />
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 ">
            <div className={style.SmallAvatar}>
              <a href="">
                <img src="incognito.png" className={style.image} />
              </a>
              <a href="">
                <img src="incognito.png" className={style.image} />
              </a>
              <a href="">
                <img src="incognito.png" className={style.image} />
              </a>
            </div>

            <div className={style.SmallAvatar}>
              <p className={style.title}>
                LIQUID is <br />
                TALENTS
              </p>
              <h2 className={style.title}>100+</h2>
            </div>
          </div>
        </div>
        <div className={style.SecondContainer}>
          <div className="row">
            <div className="col-md-6">
              <img
                src="building.png"
                className={style.OnImage}
                data-aos="zoom-in"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1500"
              />
            </div>

            <div className="col-md-6">
              <div className={style.Paragraph}>
                <p
                  className={style.FirstParag}
                  data-aos="zoom-in"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="1500"
                >
                  Our Headquarters are in Dubai UAE,
                  <br />
                  With offices in UK, Poland, Saudi Arabia,
                  <br />
                  Egypt, Lebanon and The Philippines.
                </p>
                <p
                  className={style.SecondParag}
                  data-aos="zoom-in"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="1500"
                >
                  Our work and experiance knows no borders,
                  <br />
                  and our multi national team are currently working
                  <br />
                  on assignments stretching from South Asia,
                  <br />
                  Southern Africa to the United Kingdom and across Europe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
