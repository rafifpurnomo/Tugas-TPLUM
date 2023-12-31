import React from 'react'
import styleTentang from './Tentang.module.css'

function Tentang() {
  return (
    <div id='tentang-section'>
      <div className={styleTentang.container}>
        <img src="/assets/MaskGroup.png" alt="mask group" className={styleTentang.foto}/>
          <div className={styleTentang.TentangText}>
            <h1 className={styleTentang.h1}>Tentang</h1>
            <p className={styleTentang.p}>Website Glukomet adalah website penghitung konsumsi gula harian, website ini membantu anda dalam mengelola konsumsi gula sehari- hari. Dengan mengurangi risiko penyakit terkait gula, seperti diabetes dan obesitas, website 
ini mendukung pencapaian SDG'S 3 yang bertujuan untuk menjaga kesehatan yang baik dan 
meningkatkan kualitas hidup.</p>
          </div>
      </div>
    </div>
  )
}

export default Tentang