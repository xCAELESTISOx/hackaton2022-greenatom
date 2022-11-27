import Label from "entities/Label";
import styles from "./styles.module.scss";

const About = () => {
   return (
      <div className={styles.about}>
         <Label text="О компании" right />
         <p className={styles.aboutText}>
            Мы растим новые сильные ИТ-кадры для атомной отрасли России. Мы общаемся со стажёрами на «Ты». Это помогает
            нам сократить дистанцию и изменить представление о зашоенности гос. корпорации. Мы с ними на одной волне и
            на одном уровне, на расстоянии вытянутой руки.
         </p>
      </div>
   );
};

export default About;
