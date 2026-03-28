import { useState, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative min-h-screen ${theme === 'light' ? 'light' : ''}`}>
      <Loader isLoading={isLoading} />

      {!isLoading && (
        <>
          <Navbar theme={theme} toggleTheme={toggleTheme} />

          <main>
            <Hero theme={theme} />
            <About theme={theme} />
            <Skills theme={theme} />
            <Experience theme={theme} />
            <Projects theme={theme} />
            <Achievements theme={theme} />
            <Contact theme={theme} />
          </main>

          <Footer theme={theme} />
        </>
      )}
    </div>
  );
}

export default App;
