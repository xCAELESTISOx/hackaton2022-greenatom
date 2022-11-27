import heroImage from "shared/img/hero.png";

import styles from "./styles.module.scss";

type Props = {};

const Hero = (props: Props) => {
   return (
      <div className={styles.hero}>
         <h1 className={styles.heroTitle}>Создавай цифровое будущее</h1>
         <img className={styles.heroImage} src={heroImage} alt="" />
      </div>
   );
};

export default Hero;
