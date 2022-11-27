import styles from "./styles.module.scss";

type Props = {};

const Greenlab = (props: Props) => {
   return (
      <div className={styles.greenlab}>
         <div className={styles.container}>
            <h1 className={styles.greenlabTitle}>Greenlab</h1>
            <p className={styles.greenlabText}>
               платформа для быстрого старта карьеры IT-эксперта в глобальной корпорации
            </p>
         </div>
      </div>
   );
};

export default Greenlab;
