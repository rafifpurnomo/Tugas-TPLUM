import React from "react";
import styleEmptyMakananTerpilih from "./EmptyMakananTerpilih.module.css";

function EmptyMakananTerpilih() {
  return (
    <div>
      <div className={styleEmptyMakananTerpilih.container}>
        <img
          src="/assets/emptyInbox.png"
          alt=""
          className={styleEmptyMakananTerpilih.illustration}
        />
        <h1 className={styleEmptyMakananTerpilih.h1}>Anda Belum Makan Hari Ini</h1>
      </div>
    </div>
  );
}

export default EmptyMakananTerpilih;
