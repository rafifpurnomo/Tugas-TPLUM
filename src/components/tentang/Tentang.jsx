import React from 'react'
import styleTentang from './Tentang.module.css'

function Tentang() {
  return (
    <div id='tentang-section'>
      <div className={styleTentang.container}>
        <img src="/assets/MaskGroup.png" alt="mask group" className={styleTentang.foto}/>
          <div className={styleTentang.TentangText}>
            <h1 className={styleTentang.h1}>Tentang</h1>
            <p className={styleTentang.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aperiam animi blanditiis corrupti veniam nulla, neque illum saepe obcaecati molestiae numquam iste explicabo reiciendis iusto, laborum tenetur eveniet doloremque? Quasi!</p>
          </div>
      </div>
    </div>
  )
}

export default Tentang