import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styleNavbar from "./Navbar.module.css";

function Navbar() {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stickyClass = isSticky ? styleNavbar.sticky : styleNavbar.Navbar;
  return (
    <div>
      <nav className={`${styleNavbar.navbar} ${stickyClass}`}>
        <ul className={styleNavbar.ul}>
          <li
            className={styleNavbar.li}
            onClick={() => handleClickScroll("zero-section")}
          >
            home
          </li>

          <li
            className={styleNavbar.li}
            onClick={() => handleClickScroll("tentang-section")}
          >
            tentang
          </li>

          <li
            className={styleNavbar.li}
            onClick={() => handleClickScroll("kalkulator-section")}
          >
            kalkulator
          </li>

          <li
            className={styleNavbar.li}
            onClick={() => handleClickScroll("artikel-section")}
          >
            artikel
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
