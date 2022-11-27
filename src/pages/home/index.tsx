import About from "templates/about";
import Greenlab from "templates/greenlab";
import Hero from "templates/hero";
import Purpose from "templates/purpose";
import WhyUs from "templates/whyUs";
import Info from "templates/info";
import LoremIpsum from "templates/loremIpsum";
import Footer from "templates/footer";

import logoHeader from "shared/svg/header-home-logo.svg";

import styles from "./styles.module.scss";
import FloatingButton from "templates/floatingButton";

const HomePage = () => {
   return (
      <div>
         <FloatingButton />
         <div className={styles.header}>
            <img src={logoHeader} className={styles.headerLogo} alt="" />
         </div>
         <Hero />
         <Greenlab />
         <Purpose />
         <About />
         <WhyUs />
         <LoremIpsum />
         {/* <Cards /> */}
         <Info />
         <Footer />
      </div>
   );
};

export default HomePage;
