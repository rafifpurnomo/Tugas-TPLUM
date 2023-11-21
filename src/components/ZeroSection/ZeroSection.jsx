import React from 'react'
import styleZeroSection from './ZeroSection.module.css'

function ZeroSection() {
  return (
    <div>
        <div className={styleZeroSection.container}>
            <div className={styleZeroSection.containerText}>
            <img src="/assets/iconKotak.png" alt="icon kotak" className={styleZeroSection.foto}/>
              <p className={styleZeroSection.glukobiText}>Glukobi</p>
              <p className={styleZeroSection.descText}>Atur gula anda demi masa depan yang lebih cerah</p>
            </div>
          <img src="/assets/gambarBuah.png" alt="mangkok buah" className={styleZeroSection.gambarBuah}/>
          <img src="/assets/Jeruk.png" alt="Jeruk" className={styleZeroSection.jeruk}/>
          <img src="/assets/brocoliBurem.png" alt="brocoli burem" className={styleZeroSection.brocoliBurem}/>
          <img src="/assets/Brocoli.png" alt="brocoli" className={styleZeroSection.brocoli} />
        </div>
    </div>
  )
}

export default ZeroSection
