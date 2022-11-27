import styles from "./styles.module.scss";

const Info = () => {
   return (
      <div className={styles.info}>
         <p className={styles.infoText}>
            Если ты хочешь начать постижение профессии с нуля, записывайся на наши программы подготовки. Лучших
            студентов мы приглашаем на стажировки.
         </p>
         <p className={styles.infoText}>
            При отборе кандидатов мы обращаем внимание на анкеты и ваши достижения. Не стесняйтесь писать о своих
            успехах: победах на олимпиадах, высокой успеваемости и так далее.
         </p>
      </div>
   );
};

export default Info;
