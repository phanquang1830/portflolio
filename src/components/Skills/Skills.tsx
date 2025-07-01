import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaUsers, FaClock, FaBrain, FaComments } from 'react-icons/fa';

import styles from './Skills.module.scss';

const Skills = () => {
  return (
    <section className={styles.skills}>
      <h2>
        <span className={styles.white}>My</span> <span className={styles.blue}>Skills</span>
      </h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <FaReact className={styles.icon} />
          <h3>Frontend</h3>
          <p>React, SCSS, HTML, CSS</p>
        </div>

        <div className={styles.card}>
          <FaNodeJs className={styles.icon} />
          <h3>Backend</h3>
          <p>Node.js, Express, Sequelize</p>
        </div>

        <div className={styles.card}>
          <FaDatabase className={styles.icon} />
          <h3>Database</h3>
          <p>MySQL, MongoDB</p>
        </div>

        <div className={styles.card}>
          <FaGitAlt className={styles.icon} />
          <h3>Tools</h3>
          <p>Git, GitHub, Docker, Postman, VSCode, IntelliJ</p>
        </div>

        <div className={styles.card}>
          <FaBrain className={styles.icon} />
          <h3>Problem Solving</h3>
          <p>Logical Thinking, Critical Thinking</p>
        </div>

        <div className={styles.card}>
          <FaUsers className={styles.icon} />
          <h3>Teamwork</h3>
          <p>Effective Collaboration</p>
        </div>

        <div className={styles.card}>
          <FaClock className={styles.icon} />
          <h3>Time Management</h3>
          <p>Organized, Deadline-focused</p>
        </div>

        <div className={styles.card}>
          <FaComments className={styles.icon} />
          <h3>Communication</h3>
          <p>Clear and Effective</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
