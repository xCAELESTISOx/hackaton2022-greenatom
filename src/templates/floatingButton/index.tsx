import Button from "entities/Button";

import styles from "./styles.module.scss";

const FloatingButton = () => {
   return (
      <div className={styles.floatingButtonWrapper}>
         Хотел бы пройти стажировку в нашей компании?
         <Button className={styles.floatingButton} text="Стажировка" color="#b2c541" />
      </div>
   );
};

export default FloatingButton;
