import React from "react";
import Artikel from "../components/Artikel/Artikel";
import Navbar from "../components/Navbar/Navbar";
import Tentang from "../components/tentang/Tentang";
import ZeroSection from "../components/ZeroSection/ZeroSection";
import styleHome from "./Home.module.css";
import DevTeam from "../components/devTeam/DevTeam";
import Footer from "../components/footer/Footer";
import Kalkulator from "../components/Kalkulator/Kalkulator";

function Home() {
  return (
    <div>
      <Navbar />
      <div className={styleHome.conatinerhome} id="/">
        <div className={styleHome.zeroSection}>
          <ZeroSection />
        </div>
        <div id='tentang-section' className={styleHome.padding}></div>
        <Tentang />
      </div>
      <div>
        <img
          src="/assets/anggur.png"
          alt="anggur"
          className={styleHome.anggur}
        />
        <img
          src="/assets/jeruk2.png"
          alt="jeruk"
          className={styleHome.jeruk2}
        />
        <img
          src="/assets/stroberi.png"
          alt="stroberi"
          className={styleHome.stroberi}
        />
        <img
          src="/assets/stroberi2.png"
          alt="stroberi2"
          className={styleHome.stroberi2}
        />
        <img
          src="/assets/jeruk3.png"
          alt="jeruk3 "
          className={styleHome.jeruk3}
        />
        <img
          src="/assets/anggur2.png"
          alt="anggur2 "
          className={styleHome.anggur2}
        />
      </div>
      <div id='kalkulator-section' className={styleHome.padding}></div>
      <Kalkulator />
      <div id='artikel-section' className={styleHome.padding}></div>
      <div className={styleHome.Artikel}>
        <Artikel />
      </div>
      <div className={styleHome.DevTeam}>
        <DevTeam />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
