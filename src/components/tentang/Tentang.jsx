import React, { useEffect } from 'react'
import styleTentang from './Tentang.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Tentang() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <div className={styleTentang.container}>
        <img src="/assets/MaskGroup.png" alt="mask group" className={styleTentang.foto}/>
          <div className={styleTentang.TentangText}>
            <h1 data-aos="fade-up" className={styleTentang.h1}>Tentang</h1>
            <p data-aos="fade-up" className={styleTentang.p}>Website Glukomet adalah website penghitung konsumsi gula harian, website ini membantu anda dalam mengelola konsumsi gula sehari- hari. Dengan mengurangi risiko penyakit terkait gula, seperti diabetes dan obesitas, website 
ini mendukung pencapaian SDG'S 3 yang bertujuan untuk menjaga kesehatan yang baik dan 
meningkatkan kualitas hidup.</p>
          </div>
      </div>
    </div>
  )
}

export default Tentang