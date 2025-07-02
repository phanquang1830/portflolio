import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "@/components/Header/Header.module.scss";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={styles.header}>
      <div className={styles.logo}>Portfolio</div>

      <div
        className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}
      >
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>

      <div className={styles.menuIcon} onClick={toggleMenu}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </div>
    </div>
  );
};

export default Header;
