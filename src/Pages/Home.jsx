import React from 'react'
import HeroSection from '../Components/HeroSection'
import OnlineCourseSection from '../Components/OnlineCourseSection'
import CourseCard from '../Components/Course/CourseCard'
import Client from '../Components/Client'
import ShortCourse from '../Components/Course/ShortCourse'
import CTAsection from '../Components/CTAsection'
import CounterSection from '../Components/CounterSection'
import AlumniSection from '../Components/AlumniSection'

const Home = () => {
    return (
        <div>
            <HeroSection />
            <Client />
            <OnlineCourseSection />
            <ShortCourse />
            <CTAsection />
            <CourseCard />
            <CounterSection />
            <AlumniSection />
        </div>
    )
}

export default Home
