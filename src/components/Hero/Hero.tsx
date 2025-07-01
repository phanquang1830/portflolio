import React from "react";
import styles from "./Hero.module.scss";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      {/* Bên trái: nội dung */}
      <div className={styles.content}>
        <p className={styles.intro}>Hello, It's Me </p>
        <h1>Phan Minh Quang </h1>
        <p className={styles.role}>And I am a Backend Developer</p>
        <p className={styles.description}>
          A Backend Developer who loves coding, building efficient systems, and creating innovative solutions.
        </p>
        <a href="#about">
          <div className={styles.buttonWrapper}>
          <button>More About Me</button>
          </div>
        </a>
      </div>

      {/* Bên phải: avatar */}
      <div className={styles.avatar}>
        <img src="/images/avatar.jpg" alt="Avatar" />
      </div>
    </section>
  );  
};

export default Hero;
