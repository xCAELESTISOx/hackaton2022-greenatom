import Label from "entities/Label";

import styles from "./styles.module.scss";

const Purpose = () => {
   return (
      <div className={styles.purpose}>
         <Label text="Наша цель" />
         <p className={styles.purposeText}>
            <b>Наша цель</b> - дать возможность студентам постороить карьеру ИТ-специалиста в Госкорпорации, раскрыть
            потенциал и получить необходимые знания
         </p>
      </div>
   );
};

export default Purpose;
