import { ReactNode } from "react";

import headerLogo from "shared/svg/header-home-logo.svg";

import styles from "./styles.module.scss";

const SurveyLayout = ({ children }: { children: ReactNode }) => {
   return (
      <div className={styles.surveyLayout}>
         <div className={styles.surveyLayoutHeader}>
            <img src={headerLogo} alt="" className={styles.surveyLayoutLogo} />
         </div>
         <div className={styles.surveyLayoutContent}>{children}</div>
      </div>
   );
};

export default SurveyLayout;
