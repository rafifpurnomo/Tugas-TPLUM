import React from "react";
import stylefooter from "./Footer.module.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className={stylefooter.container}>
        <div className={stylefooter.Footer}>
          <div className={stylefooter.kontak}>
            <h1 className={stylefooter.kontakH1}>Kontak</h1>
            <p className={stylefooter.email}>
              <Icon icon="mdi:gmail" className={stylefooter.icon} />
              <a
                href="mailto:someone@example.com"
                className={stylefooter.aHref}
              >
                Glukomet@gmail.com
              </a>
            </p>
            <a href="https://wa.me/6281355538777" className={stylefooter.aHref}>
              <p className={stylefooter.Wa}>
                <Icon icon="ic:outline-whatsapp" className={stylefooter.icon} />
                +6281355538777
              </p>
            </a>
          </div>
          <div className={stylefooter.followUs}>
            <h1 className={stylefooter.followUsH1}>follow us</h1>
            <p className={stylefooter.email}>
              <Icon icon="mdi:instagram" className={stylefooter.icon} />
              <a href="/" className={stylefooter.aHref}>
                @Glukomet
              </a>
            </p>
            <p className={stylefooter.Wa}>
              <Icon icon="mdi:linkedin" className={stylefooter.icon} />
              <a href="/" className={stylefooter.aHref}>
                @Glukomet
              </a>
            </p>
            <p className={stylefooter.Wa}>
              <Icon icon="mdi:github" className={stylefooter.icon} />
              <a href="/" className={stylefooter.aHref}>
                @Glukomet
              </a>
            </p>
          </div>
          <div className={stylefooter.GlukometLogo}>
            <img src="/assets/iconKotak.png" alt="icon kotak" />
            <h1 className={stylefooter.GlukometLogoUsH1}>Glukomet</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
