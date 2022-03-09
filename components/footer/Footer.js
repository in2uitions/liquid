import style from "../../styles/footer.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <>
      <div className={style.ContainerFooter}>
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-12">
            <h4 className={style.Underline}>
              <a href="">Our Work</a>
              <a href="">What we do</a>
              <a href="">Who we are</a>
              <a href="">Our culture</a>
            </h4>
          </div>

          <div className="col-lg-2 col-md-2 col-sm-6 ">
            <div className={style.text}>
              <p className={style.country}>DUBAI </p>
              <p>Boutique Office,</p>
              <p>Villa 13 knowledge Village,</p>
              <p>Dubai Media City</p>
              <p>P.O.Box 283962, Dubai, UAE</p>
              <p>+971 (0)4 450 9118</p>
              <p className={style.Under}> hello@liquidretail.com</p>
            </div>
          </div>

          <div className="col-lg-2 col-md-2 col-sm-6">
            <div className={style.text}>
              <p className={style.country}>JEDDAH</p>
              <p>Boutique Office,</p>
              <p>Villa 13 knowledge Village,</p>
              <p>Dubai Media City</p>
              <p>P.O.Box 283962, Dubai, UAE</p>
              <p>+971 (0)4 450 9118</p>
              <p className={style.Under}> hello@liquidretail.com</p>
            </div>
          </div>

          <div className="col-lg-2 col-md-2 col-sm-6">
            <div className={style.text}>
              <p className={style.country}>CAIRO</p>
              <p>Boutique Office,</p>
              <p>Villa 13 knowledge Village,</p>
              <p>Dubai Media City</p>
              <p>P.O.Box 283962, Dubai, UAE</p>
              <p>+971 (0)4 450 9118</p>
              <p className={style.Under}> hello@liquidretail.com</p>
            </div>
          </div>

          <div className="col-lg-2 col-md-2 col-sm-6">
            <div className={style.text}>
              <p className={style.country}>BEIRUT</p>
              <p>Boutique Office,</p>
              <p>Villa 13 knowledge Village,</p>
              <p>Dubai Media City</p>
              <p>P.O.Box 283962, Dubai, UAE</p>
              <p>+971 (0)4 450 9118</p>
              <p className={style.Under}> hello@liquidretail.com</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-lg-2 col-md-2 col-sm-6">
            <h4 className={style.Underline}>
              <a href="">Careers</a>
              <a href="">Locations</a>
              <a href="">Contact us</a>
            </h4>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className={style.LogoContainer}>
              <a   href="https://www.facebook.com/">
                <img src="facebook.png" className={style.Logo} />
              </a>
              <a  href="https://www.twitter.com/company/">
                <img src="twitter.png" className={style.Logo} />
              </a>
              <a  href="https://www.instagram.com/">
                <img src="instagram.png" className={style.Logo} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
