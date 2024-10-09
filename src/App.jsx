import React, { useEffect, useState } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import CourseDetail from './Pages/CourseDetail'
import About from './Pages/About'
import Contact from './Pages/Contact'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import TermsAndConditions from './Pages/TermsAndConditions'
import FAQPage from './Pages/FAQPage'
import { FaWhatsapp } from 'react-icons/fa'
import { MdKeyboardDoubleArrowUp } from 'react-icons/md'

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  // Handle scroll to show/hide button
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const handleScroll = debounce(() => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }, 100); // Adjust the delay time as needed

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <div className='font-poppins'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
        <Route path='/FAQ' element={<FAQPage />} />
        <Route path='/course/:id' element={<CourseDetail />} />
      </Routes>
      <Footer />
      <div className='fixed z-20 bottom-4 right-4'>
        <Link
          target='_blank'
          to={"https://api.whatsapp.com/send/?phone=919520801801"}
          className=" flex items-center justify-center mb-2 p-[0.6rem] rounded-full bg-[#0BC144] text-white shadow-lg"
          aria-label="Scroll to top"
        >
          <FaWhatsapp className='text-[1.7rem]' />
        </Link>
        {isVisible && (
          <button
            onClick={scrollToTop}
            className=" flex items-center border-primary border-2 justify-center  p-[0.6rem] rounded-full bg-main text-white shadow-lg"
            aria-label="Scroll to top"
          >
            <MdKeyboardDoubleArrowUp className='text-[1.7rem]  ' />
          </button>
        )}
      </div>
    </div>
  )
}

export default App
