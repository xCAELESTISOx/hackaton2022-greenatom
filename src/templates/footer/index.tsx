import rosatomLogo from "shared/img/rosatom-logo.png";

import styles from "./styles.module.scss";

const Footer = () => {
   return (
      <div className={styles.footer}>
         <div className={styles.footerContent}>
            <img className={styles.footerLogo} src={rosatomLogo} alt="" />
         </div>
      </div>
   );
};

export default Footer;
