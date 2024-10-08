import React from 'react'
import { useShortCourseList } from '../../Hooks/useCourseList'
import { FaCircleCheck } from 'react-icons/fa6'

const ShortCourse = () => {
    return (
        <div className='px-[5vw] py-10  max-w-[85rem] mx-auto '>
            <div className='flex flex-col items-center mb-6'>
                <h1 className='text-[1.8rem] font-semibold pb-2 p-2 pl-3 md:text-[1.9rem]'>Short Courses!</h1>
                <p className='text-[1.1rem]'>Time To Skill Up</p>
            </div>

            <div className='flex flex-wrap items-center justify-center gap-6'>
                {useShortCourseList?.map((slide) => {
                    return (
                        <div key={slide?.id} className="p-3 mx-auto border max-w-[20rem] lg:max-w-[23rem] w-full bg-white rounded-lg shadow-[0px_0px_7px_#808080]">
                            <img className='max-w-[25rem] rounded-md w-full h-[13rem] object-cover' src={slide?.image} alt="" />
                            <div className='p-1'>
                                <h2 className='font-semibold mt-2 text-[1.3rem]'>{slide.title}</h2>
                                <div className='p-2 py-4 space-y-3'>
                                    {slide?.card?.featuresMain?.map((feat, ind) => {
                                        return <div className='flex font-medium text-[0.95rem] items-center gap-2' key={ind + 1}><FaCircleCheck className='text-primary' /> <h3>{feat}</h3></div>
                                    })}
                                </div>
                                <button className='w-full transition-all duration-500 p-2 mt-2 hover:font-[500] text-white rounded hover:text-main hover:bg-primary bg-main'>View Details</button>

                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ShortCourse
