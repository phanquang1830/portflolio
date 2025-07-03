import { motion } from 'framer-motion';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <Header />

      <main>
        <section id="home">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true , amount: 0.3 }}
          >
            <Hero />
          </motion.div>
        </section>

        <section id="about">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true , amount: 0.3 }}
          >
            <About />
          </motion.div>
        </section>

        <section id="skills">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true , amount: 0.3 }}
          >
            <Skills />
          </motion.div>
        </section>

        <section id="projects">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true , amount: 0.3 }}
          >
            <Projects />
          </motion.div>
        </section>

        <section id="contact">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true , amount: 0.3 }}
          >
            <Contact />
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
