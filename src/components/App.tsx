import React, { VFC, useRef, useEffect, useState } from 'react';
import { css } from '@emotion/css';
import { LinkIconButton } from './LinkIconButton';
import { TCanvas } from './three/TCanvas';
import ScrollToTop from './ScrollToTop';

export const App: VFC = () => {
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // State to track the scroll position for parallax effect
  const [scrollY, setScrollY] = useState(0);

  // Function to handle smooth scroll to sections
  const scrollToSection = (elementRef: React.RefObject<HTMLElement>) => {
    elementRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Listen to scroll event to update scroll position for parallax
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <button onClick={() => scrollToSection(homeRef)}>Home</button>
        <button onClick={() => scrollToSection(aboutRef)}>About</button>
        <button onClick={() => scrollToSection(contactRef)}>Contact</button>
      </nav>

      <section ref={homeRef} className={styles.section} style={{ backgroundColor: `rgba(0, 0, 0, ${1 - scrollY * 0.001})` }}>
        <h1>Home Section</h1>
        <TCanvas />
        <LinkIconButton imagePath="/assets/icons/github.svg" linkPath="https://github.com/Frankblation" />
      </section>

      <section ref={aboutRef} className={styles.section} style={{ backgroundColor: `rgba(255, 0, 0, ${1 - scrollY * 0.002})` }}>
        <h1>About Section</h1>
        <p>This is the About section content...</p>
      </section>

      <section ref={contactRef} className={styles.section} style={{ backgroundColor: `rgba(0, 0, 0, ${1 - scrollY * 0.002})` }}>
        <h1>Contact Section</h1>
        <p>This is the Contact section content...</p>
      </section>
    </div>
  );
};

const styles = {
  container: css`
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
  `,
  navbar: css`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #000;
    display: flex;
    justify-content: space-around;
    padding: 10px;
    z-index: 1000;

    button {
      color: white;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 18px;

      &:hover {
        color: #f0a500;
      }
    }
  `,
  section: css`
    height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;

    &:nth-of-type(odd) {
      background-color: #f5f5f5;
    }
    &:nth-of-type(even) {
      background-color: #e0e0e0;
    }
  `,
};
