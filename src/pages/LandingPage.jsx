import { useState, useEffect, useRef } from 'react'
import Nav from '../components/Nav'
import Homepage from './homepage/Homepage'
import SearchSection from './homepage/SearchSection'
import SaveSection from './homepage/SaveSection'
import ShopSection from './homepage/ShopSection'
import BottomSection from './homepage/BottomSection'

function LandingPage() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const sections = ['top', 'search', 'save', 'shop', 'bottom'];
  const timeoutRef = useRef(null);
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  // Hide scrollbar
  useEffect(() => { 
    document.body.style.overflow = "hidden";
  },[]);

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

  const handlePageDown = (event) => {
    event.preventDefault();
    setCurrentSection((prevSection) =>
      prevSection < sections.length - 1 ? prevSection + 1 : prevSection
    );
    scrollToSection(document.getElementById(sections[currentSection + 1]), 750);
  };

  const handleTouchStart = (event) => {
    touchStartY.current = event.touches[0].clientY;
  };

  const handleTouchMove = (event) => {
    touchEndY.current = event.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    if (!isScrolling) {
      if (touchStartY.current - touchEndY.current > 50) {
        // Scrolling down
        setCurrentSection((prevSection) =>
          prevSection < sections.length - 1 ? prevSection + 1 : prevSection
        );
      } else if (touchEndY.current - touchStartY.current > 50) {
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
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    // Clean up the event listener
    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isScrolling]);

  useEffect(() => {
    // Scroll to the current section
    const section = document.getElementById(sections[currentSection])
    if (section) {
      scrollToSection(section, 750);
    }
  }, [currentSection]);

  return (
    <div className="app">
      <Nav />
      <section id="top" className="h-screen">
        <Homepage scrollDown={handlePageDown} />
      </section>
      <section id="search" className="h-screen z-10">
        <SearchSection />
      </section>
      <section id="save" className="h-screen z-10">
        <SaveSection />
      </section>
      <section id="shop" className="h-screen z-10">
        <ShopSection />
      </section>
      <section id="bottom" className="h-screen">
        <BottomSection />
      </section>
    </div>
  )
}

export default LandingPage;
