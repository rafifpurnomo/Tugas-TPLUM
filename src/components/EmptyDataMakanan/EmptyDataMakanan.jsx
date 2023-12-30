import React from "react";
import styleEmptyMakanan from './EmptyDataMakanan.module.css'

function EmptyDataMakanan() {
  return (
    <div>
      <div className={styleEmptyMakanan.container}>
        <img
          src="/assets/emptyInbox.png"
          alt=""
          className={styleEmptyMakanan.illustration}
        />
        <h1 className={styleEmptyMakanan.h1}>Makanan Tidak Ditemukan</h1>
      </div>
    </div>
  );
}

export default EmptyDataMakanan;
