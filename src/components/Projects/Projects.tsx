import styles from "./Projects.module.scss";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section className={styles.projects}>
      <h2>
        <span className={styles.white}>My </span>
        <span className={styles.blue}>Projects</span>
      </h2>

      <div className={styles.grid}>
        {/* Project 1 */}
        <div className={styles.card}>
          <img src="/images/Portfolio_Website.png" alt="Portfolio" />
          <h3>Portfolio Website</h3>
          <p>A personal website to showcase my skills and projects.</p>
          <div className={styles.tech}>
            <span>React</span>
            <span>HTML</span>
            <span>SCSS</span>
          </div>
          <div className={styles.links}>
            <a href="https://portflolio.pages.dev/" target="_blank">
              <FaExternalLinkAlt /> Live
            </a>
            <a href="https://github.com/phanquang1830/portflolio.git" target="_blank">
              <FaGithub /> Code
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className={styles.card}>
          <img src="/images/Member_Hub_Website.png" alt="Member Hub Website" />
          <h3>Member Hub Website</h3>
          <p>
           As the team leader and backend developer, I was responsible for building the API system, including core endpoints like GetAllListEvent and GetEventById, ensuring smooth data delivery for the frontend.
          </p>
          <div className={styles.tech}>
            <span>Node.js</span>
            <span>Vue.js</span>
            <span>MySQL</span>
          </div>
          <div className={styles.links}>
            <a href="https://via-member-hub-frontend.pages.dev/" target="_blank">
              <FaExternalLinkAlt /> Live
            </a>
            <a href="https://github.com/apilothub/via-member-hub-backend.git" target="_blank">
              <FaGithub /> Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
