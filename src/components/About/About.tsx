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
          Hello, I'm <span className={styles.blue}>Phan Minh Quang</span> — a
          backend developer with a passion for building stable, secure, and
          high-performance systems. I have hands-on experience in developing
          APIs and implementing real-world business logic. During this time, I
          have worked with technologies such as Node.js, Express, and Sequelize,
          while progressively applying Clean Code principles and design patterns
          to my projects. This practical experience helped me gain a deeper
          understanding of the software development process, teamwork, source
          code management using Git, and deploying systems to production
          environments. I am continuously improving my backend development
          skills and expanding my knowledge in system architecture, security,
          and performance optimization — with the goal of becoming a
          professional backend developer.
        </p>
      </div>
    </section>
  );
};

export default About;
