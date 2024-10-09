import React from 'react'
import { useCourseList } from '../../Hooks/useCourseList'

import { FaCircleCheck } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import { FaClock, FaEye, FaGlobe, FaSignal, FaStar, FaStarHalfAlt } from 'react-icons/fa';
const CourseCard = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-sky-50 bg-opacity-70'>
      <div className='px-[5vw] py-10  max-w-[85rem]  mx-auto '>
        <div className='flex flex-col items-center mb-6'>
          <h1 className='text-[1.8rem] text-center font-semibold pb-2 p-2 pl-3 md:text-[1.9rem]'>Explore Our Job Oriented Courses!</h1>
          <p className='text-[1.1rem]'>Time To Skill Up</p>
        </div>

        <div className='flex flex-wrap items-center justify-center gap-6 mt-10'>
          {useCourseList?.map((slide) => {
            return (
              <div key={slide?.id} className=" my-2 overflow-hidden mx-auto border max-w-[20rem] lg:max-w-[23rem] w-full bg-white rounded-lg shadow-[0px_0px_7px_#808080]">
                <div className="relative">
                  <img className='max-w-[25rem] w-full h-[13rem] object-cover' src={slide?.image} alt={slide?.title} />
                  {/* Overlay button on image */}
                  <a
                    href={`/course/${slide?.id}`}
                    className="absolute inset-0 z-10 flex items-center justify-center text-white transition-opacity duration-300 opacity-0 hover:opacity-100 bg-black/40"
                  >
                    <span className="px-3 py-2 text-sm font-semibold rounded bg-primary">
                      <FaEye className="inline-block mr-1" /> Watch Now
                    </span>
                  </a>
                </div>

                <div className='p-1 px-4'>
                  {/* Course Title */}
                  <h3 className='font-semibold mt-2 text-[1.3rem] '>
                    <a href={`/course/${slide?.id}`}>{slide.title}</a>
                  </h3>

                  <div className='flex items-center justify-between py-1'>
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {Array.from({ length: 5 }, (_, index) => {
                          // Calculate the number of full stars and the fractional part
                          const fullStars = Math.floor(slide?.rating); // Integer part
                          const hasHalfStar = slide?.rating - fullStars >= 0.3; // Check if there's a half star (consider .3 and above)

                          // Determine the star display
                          if (index < fullStars) {
                            return <FaStar key={index} className="text-yellow-400" />; // Full star
                          } else if (index === fullStars && hasHalfStar) {
                            return <FaStarHalfAlt key={index} className="text-yellow-400" />; // Half star
                          } else {
                            return <FaStar key={index} className="text-gray-300" />; // Empty star
                          }
                        })}
                      </div>
                      <span className="ml-2 text-[0.95rem]">{slide?.rating}</span>
                      <span className="ml-1 text-sm text-gray-500">({slide?.totalReviews})</span>
                    </div>
                    <div className='mb-2 text-lg font-semibold text-main text-[0.9rem]'>
                      {slide?.price === 0 ? "Free" : slide?.price}
                    </div>
                  </div>


                  {/* Features */}
                  <div className='py-1'>
                    <div className='text-[0.9rem] text-gray-600 line-clamp-2'>
                      {slide?.des?.para1}
                    </div>
                  </div>



                  {/* View Details Button */}
                  <button
                    onClick={() => navigate(`/course/${slide?.id}`)}
                    className='w-full transition-all duration-500 p-[0.4rem] mt-2 text-white rounded bg-main hover:font-[500] hover:text-main hover:bg-primary'
                  >
                    View Details
                  </button>

                  {/* Course Metadata */}
                  <ul className="flex items-center justify-between p-1 py-2 pt-4 text-sm text-gray-600">
                    <li className='flex items-center gap-1'><FaClock /> {slide?.duration}</li>
                    <li className='flex items-center gap-1'><FaSignal /> {slide?.level}</li>
                    <li className='flex items-center gap-1'><FaGlobe /> {slide?.language}</li>
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div >
  )
}

export default CourseCard
