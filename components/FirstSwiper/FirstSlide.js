import styles from "../../styles/FirstSwiper/Slides.module.css";

export default function FirstSlide() {
  return (
    <>
      <div className={styles.FirstSlideContainer}>
        <span className={styles.Title}>
          <span className={styles.first}>
            <p>RETAIL</p>
            <p className={styles.blue}>LIQUID</p>
          </span>
          <span className={styles.is}>
            <p>IS</p>
            <p className={styles.blue}>IS</p>
          </span>
          <span className={styles.last}>
            <p>LIQUID</p>
            <p className={styles.blue}>RETAIL</p>
          </span>
        </span>

        <div className={styles.InfoContainer}>
          <p className={styles.Info}>
            Retail is what we do,
            <br />
            We help brands sell, <br />
            by helping shoppers buy,
          </p>
          <p className={styles.AddInfo}>Wherever, however, whenever.</p>
        </div>
      </div>
    </>
  );
}
