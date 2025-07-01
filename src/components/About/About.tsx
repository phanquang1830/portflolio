import React from "react";
import styles from "@/components/About/About.module.scss";

const About: React.FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.avatar}>
        <img src="/images/avatar.jpg" alt="Avatar" />
      </div>
      <div className={styles.content}>
        <h2>
          <span className={styles.white}>About </span>
          <span className={styles.blue}>Me</span>
        </h2>
        <p>
          Hello, I'm <span className={styles.blue}>Phan Minh Quang</span> — a backend developer with a passion for
          building stable, secure, and high-performance systems. I have
          completed my internship as a Backend Developer, where I had the
          opportunity to work on developing APIs and implementing real-world
          business logic. During this time, I worked with technologies such as
          Node.js, Express, and Sequelize, while gradually applying Clean Code
          principles and Design Patterns to the projects. This hands-on
          experience has helped me gain a deeper understanding of the software
          development process, teamwork, source code management with Git, and
          deploying systems to production environments. I am continuously
          learning to improve my backend skills, expand my knowledge of system
          architecture, security, and performance optimization — with the goal
          of becoming a professional backend developer.
        </p>
      </div>
    </section>
  );
};

export default About;
