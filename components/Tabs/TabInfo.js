import styles from '../../styles/Tabs//TabInfo.module.css'
import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function TabInfo({ title, info, addinfo }) {
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
        <div className={styles.TabContainer}>
          <div data-aos="zoom-in-left" data-aos-easing="ease-in-sine" data-aos-duration="1500">
            <p dangerouslySetInnerHTML={{ __html: title }}className={styles.title}  />
          </div>
    
          <div data-aos="zoom-in-right" data-aos-easing="ease-in-sine"> 
          <p dangerouslySetInnerHTML={{ __html: info }} className={styles.info} />
          </div>
    
    
         <div data-aos="zoom-in-left" data-aos-easing="ease-in-sine">
         <p dangerouslySetInnerHTML={{ __html: addinfo }} className={styles.addinfo}  />
         </div>
    
        </div>
      );
    }