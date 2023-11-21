import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styleNavbar from "./Navbar.module.css"

function Navbar() {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const stickyClass = isSticky ? styleNavbar.sticky : styleNavbar.Navbar;
  return (
    <div>
         <nav className={`${styleNavbar.navbar} ${stickyClass}`}>
            <ul className={styleNavbar.ul}>
                <NavLink to={'/'} className={styleNavbar.navLink}><li className={styleNavbar.li}>home</li></NavLink>
                <NavLink to={'/'} className={styleNavbar.navLink}><li className={styleNavbar.li}>kalkulator</li></NavLink>
                <NavLink to={'/'} className={styleNavbar.navLink}><li className={styleNavbar.li}>artikel</li></NavLink>
                <NavLink to={'/Tentang'} className={styleNavbar.navLink}><li className={styleNavbar.li}>tentang</li></NavLink>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar