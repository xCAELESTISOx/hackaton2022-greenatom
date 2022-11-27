import Label from "entities/Label";

import styles from "./styles.module.scss";

const LoremIpsum = () => {
   return (
      <div className={styles.loremIpsum}>
         <Label text="loremIpsum" />

         <div className={styles.loremIpsumContent}>
            <div className={styles.loremIpsumCard}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
               dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
               ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
               fugiat nulla pariatur.
            </div>
            <div className={styles.loremIpsumCard}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
               dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
               ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
               fugiat nulla pariatur.
            </div>
         </div>
      </div>
   );
};

export default LoremIpsum;
