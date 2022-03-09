import style from "../styles/VideoPlayer.module.css";
import React from "react";
import { Modal, Button } from "react-bootstrap";
import SecondVideo from "../components/SecondVideo";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <SecondVideo />
      </Modal.Body>
    </Modal>
  );
}

export default function VideoPlayer() {
  const [modalShow, setModalShow] = React.useState(false);
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
      <div className={style.MainVideoPlayerContainer}>
        <div className={style.text}>
          <p
            className={style.liquid}
            data-aos="zoom-in-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1500"
          >
            Liquid
          </p>
          <p
            className={style.showreel}
            data-aos="slide-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            SHOWREEL
          </p>
        </div>
        <div className={style.infoContainer}>
          <div className={style.buttoncontainer}>
            <Button
              className={style.model}
              variant="primary"
              onClick={() => setModalShow(true)}
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="linear"
            >
              <div className={style.PlayButton}>
                <img src="play.png" className={style.playicon} />
              </div>
            </Button>
          </div>
          <div className={style.line}>
            <div className={style.CheckOut} data-aos="zoom-out-right">
              <p>
                CHECK OUT
                <br />
                OUR LIQUID THINKING
              </p>
            </div>
            <div
              className={style.BlueLine}
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="800"
            />
            <div className={style.CheckOut} data-aos="zoom-out-right">
              <p>
                WE WORK
                <br />
                WITH THE MOST ICONIC BRANDS
              </p>
            </div>
            <div
              className={style.BlueLine}
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="800"
            />
            <div className={style.CheckOut} data-aos="zoom-out-right">
              <p>
                MEET OUR EXPERT
                <br />
                AND DIVERSE TEAM
              </p>
            </div>
          </div>
          <div className={style.blankcontainer}>
            <Button
              variant="primary"
              onClick={() => setModalShow(true)}
              className={style.blank}
            >
              <div className={style.PlayButton}>
                <img src="play.png" className={style.playicon} />
              </div>
            </Button>
          </div>
        </div>
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
