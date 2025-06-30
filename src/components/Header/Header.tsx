import React from "react";
import styles from "@/components/Header/Header.module.scss";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
  );
};

export default Header;
