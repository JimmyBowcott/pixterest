import { useState, useEffect, useRef } from 'react'
import './css/App.css'
import Nav from './components/Nav'
import Homepage from './pages/Homepage'
import SearchPage from './pages/SearchPage'
import SavePage from './pages/SavePage'
import ShopPage from './pages/ShopPage'
import BottomPage from './pages/BottomPage'

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const sections = ['top', 'search', 'save', 'shop', 'bottom'];
  const timeoutRef = useRef(null);

  // Scroll to a given section
  const scrollToSection = (element, duration) => {
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
  
    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };
  
    const animation = currentTime => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
  
    requestAnimationFrame(animation);
  };

  // Event listeners for scrolling, a bit messy but heh
  useEffect(() => {
    const handleScroll = (event) => {
      if (!isScrolling) {
        if (event.deltaY > 0) {
          // Scrolling down
          setCurrentSection((prevSection) =>
            prevSection < sections.length - 1 ? prevSection + 1 : prevSection
          );

        } else {
          // Scrolling up
          setCurrentSection((prevSection) =>
            prevSection > 0 ? prevSection - 1 : prevSection
          );
        }

        // Set isScrolling to true
        setIsScrolling(true);

        // Clear the previous timeout if it exists
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
          setIsScrolling(false);
        }, 750);
      }
    };

    window.addEventListener('wheel', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [isScrolling]);

  useEffect(() => {
    // Scroll to the current section
    const section = document.getElementById(sections[currentSection])
    if (section) {
      scrollToSection(section, 750);
    }
  }, [currentSection]);


  // Note to self: sections should ideally be class-based, but they're not. Because I'm not changing this.
  return (
    <div className="app">
      <Nav />
      <section id="top" className="h-screen">
        <Homepage />
      </section>
      <section id="search" className="h-screen">
        <SearchPage />
      </section>
      <section id="save" className="h-screen">
        <SavePage />
      </section>
      <section id="shop" className="h-screen">
        <ShopPage />
      </section>
      <section id="bottom" className="h-screen">
        <BottomPage />
      </section>
    </div>
  )
}

export default App;
