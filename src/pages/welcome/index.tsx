import Button from "entities/Button";
import { useNavigate } from "react-router-dom";
import logoHeader from "shared/svg/header-logo.svg";

import styles from "./styles.module.scss";

const WelcomePage = () => {
   const navigate = useNavigate();

   const onButtonClick = (link: string) => {
      console.log(link);

      navigate(link);
   };
   return (
      <div className={styles.welcome}>
         <div className={styles.header}>
            <h1 className={styles.headerTitle}>Добро пожаловать!</h1>
            <img className={styles.headerLogo} src={logoHeader} alt="" />
         </div>
         <div className={styles.body}>
            <Button className={styles.button} text="О компании" onClick={() => onButtonClick("/home")} />
            <Button className={styles.button} text="Стажировка" onClick={() => onButtonClick("/quiz/" + 1)} />
         </div>
      </div>
   );
};

export default WelcomePage;
