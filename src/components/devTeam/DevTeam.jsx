import React, { useEffect, useState } from "react";
import styleDevteam from "./devTeam.module.css";
import { Icon } from "@iconify/react";
import dataDevTeam from "../../utility/dataDeveloper";
import AOS from 'aos';
import 'aos/dist/aos.css';

function DevTeam() {
  const [hoveredProfile, setHoveredProfile] = useState(null);

  const handleProfileHover = (id) => {
    setHoveredProfile(id);
  };

  const handleProfileLeave = () => {
    setHoveredProfile(null);
  };

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <h1 className={styleDevteam.h1}>Developer Team</h1>
      <div className={styleDevteam.container}>
        {dataDevTeam.length > 0 ? (
          dataDevTeam.map((data, id) => (
            <a href={data.linkIG} key={id} className={styleDevteam.ahref} data-aos="fade-up">
              <div
                className={styleDevteam.profile}
                onMouseEnter={() => handleProfileHover(id)}
                onMouseLeave={handleProfileLeave}
              >
                <div className={styleDevteam.circle}>
                  <img
                    src={data.image}
                    alt={`Gambar ${data.nama}`}
                    className={styleDevteam.fotoAnggota}
                  />
                </div>
                <div className={styleDevteam.containerText}>
                  <p className={styleDevteam.nama}>{data.nama}</p>
                  {hoveredProfile !== id ? (
                    <p className={styleDevteam.role}>{data.jabatan}</p>
                  ) : (
                    <p
                      className={styleDevteam.quotes}
                    >
                      {data.quotes}
                    </p>
                  )}
                  {hoveredProfile !== id && (
                    <div className={styleDevteam.iconNamaIg}>
                      <Icon
                        icon="mdi:instagram"
                        className={styleDevteam.icon}
                      />
                      <p className={styleDevteam.ig}>{data.instagram}</p>
                    </div>
                  )}
                </div>
              </div>
            </a>
          ))
        ) : (
          <EmptyInbox />
        )}
      </div>
    </div>
  );
}

export default DevTeam;
