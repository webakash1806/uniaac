import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import CourseDetail from './Pages/CourseDetail'
import About from './Pages/About'
import Contact from './Pages/Contact'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import TermsAndConditions from './Pages/TermsAndConditions'
import FAQPage from './Pages/FAQPage'

const App = () => {
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
    </div>
  )
}

export default App
