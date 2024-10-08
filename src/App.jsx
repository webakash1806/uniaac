import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import CourseDetail from './Components/Course/CourseDetail'
import About from './Pages/About'

const App = () => {
  return (
    <div className='font-poppins'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/course/:id' element={<CourseDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
