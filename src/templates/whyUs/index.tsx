import styles from "./styles.module.scss";

const WhyUs = () => {
   return (
      <div className={styles.whyUs}>
         <h2 className={styles.whyUsTitle}>Почему именно мы</h2>
         <div className={styles.whyUsContent}>
            // TODO: SLIDER
            <div className={styles.whyUsSlide}>
               <div className={styles.whyUsSlideLabel}>Люди</div>
            </div>
         </div>
      </div>
   );
};

export default WhyUs;
