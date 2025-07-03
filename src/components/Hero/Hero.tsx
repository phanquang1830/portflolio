import React from "react";
import styles from "./Hero.module.scss";
import TypingText from "../TypingText/TypingText";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      {/* Bên trái: nội dung */}
      <div className={styles.content}>
        <p className={styles.intro}>Hello, It's Me </p>
        <h1>Phan Minh Quang </h1>
        <p className={styles.role}>
          <TypingText textToType="I am a Backend Developer" />
        </p>
        <p className={styles.description}>
          A Backend Developer who loves coding, building efficient systems, and
          creating innovative solutions.
        </p>
        
        <div className={styles.buttonWrapper}>
          <a href="#about" className={styles.button}>
            More About Me
          </a>
        </div>
      </div>

      {/* Bên phải: avatar */}
      <div className={styles.avatar}>
        <img src="/images/avatar.jpg" alt="Avatar" />
      </div>
    </section>
  );
};

export default Hero;
