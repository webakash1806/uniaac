import React from 'react'
import service4 from '../assets/service4.webp'
import { FaCarSide } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const HeroSection = () => {
    return (
        <main className='text-white pt-20 relative min-h-[95vh] py-6  w-full bg-gradient-to-b  overflow-x-hidden from-[#0c0e11]  to-[#00023f] via-[#00032a]'>
            <div
                className="absolute inset-0 z-1"
                style={{
                    background: `radial-gradient(#fff 1.3px, transparent 1.3px)`,
                    backgroundSize: '40px 40px',
                    opacity: 0.15,
                }}
            ></div>
            <div className='relative mx-auto container  z-10 flex flex-col items-center justify-center md:justify-between'>
                <div className='flex flex-col items-center justify-center w-full md:pr-8 lg:pr-12 md:flex-row md:justify-around'>
                    <div className='p-3 container mb-10 px-5 text-center md:text-left md:w-[27rem] lg:w-[37rem]'>
                        <h1 className='text-[2.2rem] md:text-[2.4rem] lg:text-[2.6rem] font-semibold flex flex-col lg:gap-3 lg:flex-row'>
                            Find Out Best
                            <span className='text-main'>
                                Online Courses
                            </span>
                        </h1>
                        <p className='font-[400] text-[0.97rem] py-3 tracking-[0.4px] lg:pb-8'>
                            Explore diverse coding courses, master programming languages, and build real-world projects with expert-led online tutorials for comprehensive skill development.
                        </p>
                        <div>
                            <Link to='/course'>
                                <button className='bg-main p-2 px-8 font-[500] tracking-wide rounded-md text-[1.05rem] hover:bg-primary'>
                                    Explore Courses
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div>
                            <img src={service4} alt="" className='w-[10rem] sm:h-[15rem] h-[12rem] sm:w-[13rem]  object-cover rounded-lg shadow-md hover:shadow-royalYellow' />
                        </div>
                        <div className='flex flex-col items-start justify-center gap-2'>
                            <img src={service4} alt="" className='w-[10.5rem] h-[8rem] sm:h-[10rem] object-cover sm:w-[13rem] rounded-xl shadow-md hover:shadow-royalYellow' />
                            <img src={service4} alt="" className='w-[11.5rem] sm:w-[15rem] h-[11rem] object-cover rounded-xl shadow-md hover:shadow-royalYellow' />
                        </div>
                    </div>

                </div>
                <div className='flex flex-wrap mt-16 items-center justify-center w-full gap-6 my-8 text-secondary font-semibold'>
                    <div className=' flex w-fit gap-4 px-4 pr-6 rounded bg-gray-200 text-black shadow-[2px_2px_5px_#fff,-2px_-2px_1px_#000] p-2 flex-wrap items-center justify-center'>
                        <FaCarSide className='p-[5px] rounded-sm w-10 bg-[#ff770062] ' />
                        <div className='min-w-[9.5rem]'>
                            <h1 className='font-bold text-[1.1rem] text-secondary'>60%</h1>
                            <p className='text-[0.87rem]'>Average Salary Hike</p>
                        </div>
                    </div>
                    <div className=' flex w-fit gap-4 px-4 pr-6 rounded bg-gray-200 shadow-[2px_2px_5px_#fff,-2px_-2px_1px_#000] p-2 flex-wrap items-center justify-center'>
                        <FaCarSide className='p-[5px] rounded-sm w-10 bg-[#ff770062] ' />

                        <div className='min-w-[9.5rem]'>
                            <h1 className='font-bold text-[1.1rem] '>150+</h1>
                            <p className='text-[0.87rem]'>Different Courses</p>
                        </div>
                    </div>
                    <div className=' flex w-fit gap-4 px-4 pr-6 rounded bg-gray-200 shadow-[2px_2px_5px_#fff,-2px_-2px_1px_#000] p-2 flex-wrap items-center justify-center'>
                        <FaCarSide className='p-[5px] rounded-sm w-10 bg-[#ff770062] ' />

                        <div className='min-w-[9.5rem]'>
                            <h1 className='font-bold text-[1.1rem] '>50+</h1>
                            <p className='text-[0.87rem]'>Hiring Partners</p>
                        </div>
                    </div>
                    <div className=' flex w-fit gap-4 px-4 pr-6 rounded bg-gray-200 shadow-[2px_2px_5px_#fff,-2px_-2px_1px_#000] p-2 flex-wrap items-center justify-center'>
                        <FaCarSide className='p-[5px] rounded-sm w-10 bg-[#ff770062] ' />

                        <div className='min-w-[9.5rem]'>
                            <h1 className='font-bold text-[1.1rem] '>24&#xd7;7</h1>
                            <p className='text-[0.87rem]'>Customer Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default HeroSection
