import React, { useState } from 'react'
import { FaHome, FaChevronRight, FaPlayCircle, FaStar, FaStarHalfAlt, FaUserFriends, FaUser, FaCalendarAlt, FaSignal, FaGlobe, FaTag, FaCheck, FaChevronDown, FaChevronUp, FaClock } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import { useCourseList } from '../Hooks/useCourseList';
import { IoIosArrowDropright, IoIosArrowDroprightCircle } from 'react-icons/io';
import Marquee from "react-fast-marquee"; // Install this package using 'npm i react-fast-marquee'
import cn from 'classnames';
import { IoCheckmarkCircle } from 'react-icons/io5';
const CourseDetail = () => {

    const paramsId = useParams()
    console.log(paramsId)

    const [activeTab, setActiveTab] = useState("overview");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const [openIndex, setOpenIndex] = useState(null);
    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const accordionData = [
        {
            title: 'Linear Regression',
            content: [
                'Simple linear regression',
                'Multiple linear regression',
                'Assumptions of linear regression',
                'Model interpretation and coefficients',
                'Model evaluation metrics (A-squared, MSE, MAE)',
            ],
        },
        {
            title: 'Logistic Regression',
            content: [
                'Introduction to logistic regression',
                'Binary classification',
                'Model interpretation and coefficients',
                'Model evaluation metrics (Accuracy, Precision, Recall)',
            ],
        },
        {
            title: 'Decision Trees',
            content: [
                'Introduction to decision trees',
                'Tree construction algorithms',
                'Pruning techniques',
                'Evaluation of decision trees',
            ],
        },
        {
            title: 'Support Vector Machines (SVM)',
            content: [
                'Introduction to SVM',
                'Kernels and classification',
                'Hyperplanes and margins',
                'Evaluation of SVM',
            ],
        },
    ];

    const data = useCourseList?.filter((data) => {
        return data?.id === Number(paramsId?.id)
    })

    console.log(data)

    return (
        <div className=''>
            <div className="text-white course-intro bg-main p-[5vw] px-[4px] sm:px-[5vw] lg:px-[8vw]">
                {/* Breadcrumbs */}
                <div className="container px-4 mx-auto">
                    <nav className="flex items-center sm:text-sm text-[0.62rem]  tracking-wide text-gray-50 breadcrumbs" aria-label="breadcrumb">
                        <span className="item first-item">
                            <Link to={'/'} className="flex items-center">
                                <FaHome className="mr-1" />
                                Home
                            </Link>
                        </span>
                        <FaChevronRight className="mx-1" />
                        <span className="item">
                            Courses
                        </span>

                        <FaChevronRight className="mx-1" />
                        <span className="item last-item">{data[0]?.title}</span>
                    </nav>
                </div>

                {/* Course Preview and Content */}
                <div className="container px-4 mx-auto mt-6">
                    <div className="lg:flex lg:items-end">
                        {/* Video Preview */}
                        <div className="mb-4 lg:w-1/3 lg:order-2 lg:mb-0">
                            <div className="relative course-intro__preview">
                                <a
                                    href="https://youtu.be/hcSTaMhZi64?list=PLMIlFhwbCGsLxz1aw2IUEJqjzt7HP2jJl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative block"
                                >
                                    <span className="absolute inset-0 z-10 flex items-center justify-center video-play-button">
                                        <FaPlayCircle className="text-5xl text-white" />
                                    </span>
                                    <img
                                        src={data[0]?.image}
                                        alt="Course Preview"
                                        className="object-cover w-full rounded-md"
                                    />
                                </a>
                            </div>
                        </div>

                        {/* Course Details */}
                        <div className="lg:w-2/3 lg:order-1 lg:pr-8">
                            <div className="course-intro__content">
                                <h1 className="text-4xl font-semibold tracking-wide font-roboto">{data[0]?.title}</h1>
                                <div className="mt-6 course-intro__meta">
                                    {/* Rating */}
                                    <div className="flex items-center mb-2">
                                        <div className="flex text-yellow-400">
                                            {Array.from({ length: 5 }, (_, index) => {
                                                // Calculate the number of full stars and the fractional part
                                                const fullStars = Math.floor(data[0]?.rating); // Integer part
                                                const hasHalfStar = data[0]?.rating - fullStars >= 0.3; // Check if there's a half star (consider .3 and above)

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
                                        <span className="ml-2 text-[0.95rem]">{data[0]?.rating}</span>
                                        <span className="ml-1 text-sm text-gray-200">({data[0]?.totalReviews} reviews)</span>
                                    </div>

                                    {/* Enrolled Students */}
                                    <div className="mb-2 text-[0.92rem] tracking-wide">
                                        <FaUserFriends className="inline text-primary" /> 202 students enrolled
                                    </div>

                                    {/* Author */}
                                    <div className="mb-2 text-[0.92rem] tracking-wide">
                                        <FaUser className="inline text-primary" /> Created by{" "}
                                        <a className="text-purple-200">
                                            Shivam Singh
                                        </a>
                                    </div>

                                    {/* Last Updated */}
                                    <div className="mb-2 text-[0.92rem] tracking-wide">
                                        <FaCalendarAlt className="inline text-primary" /> Last updated June 21, 2024
                                    </div>

                                    <ul className="flex items-center justify-between gap-6 pb-2 text-sm text-gray-100 w-fit">
                                        <li className='flex items-center gap-1'><FaClock className='text-primary' /> {data[0]?.duration}</li>
                                        <li className='flex items-center gap-1'><FaSignal className='text-primary' /> {data[0]?.level}</li>
                                        <li className='flex items-center gap-1'><FaGlobe className='text-primary' /> {data[0]?.language}</li>
                                    </ul>

                                    {/* Categories */}
                                    <div className="mb-2  text-[0.92rem] tracking-wide">
                                        <FaTag className="inline text-primary" /> Categories:{" "}
                                        <a className="text-purple-200">
                                            Business
                                        </a>
                                        ,{" "}
                                        <a className="text-purple-200">
                                            Marketing
                                        </a>
                                    </div>
                                    <button className='p-2 my-2 font-semibold rounded bg-primary text-main '>
                                        Download Brochure
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" sm:px-[5vw] lg:px-[8vw] bg-gray-100 border-t">
                <ul className="grid grid-cols-4 text-[0.9rem] sm:text-[1rem] sm:gap-3 font-semibold border-b course-tabs">
                    {/* Overview Tab */}
                    <li
                        className={`cursor-pointer text-center p-3 px-2 sm:px-6 ${activeTab === "overview" ? "text-primary bg-main border-b-2 border-primary" : "text-gray-600"
                            }`}
                        onClick={() => handleTabClick("overview")}
                    >

                        Overview
                    </li>

                    {/* Curriculum Tab */}
                    <li
                        className={`cursor-pointer text-center  p-3 px-2 sm:px-6 ${activeTab === "curriculum" ? "text-primary bg-main border-b-2 border-primary" : "text-gray-600"

                            }`}
                        onClick={() => handleTabClick("curriculum")}
                    >

                        Curriculum
                    </li>

                    <li
                        className={`cursor-pointer text-center  p-3 px-2 sm:px-6 ${activeTab === "outcomes" ? "text-primary bg-main border-b-2 border-primary" : "text-gray-600"

                            }`}
                        onClick={() => handleTabClick("outcomes")}

                    >

                        Outcomes
                    </li>

                    {/* Instructors Tab */}
                    <li
                        className={`cursor-pointer text-center  p-3 px-2 sm:px-6 ${activeTab === "instructors" ? "text-primary bg-main border-b-2 border-primary" : "text-gray-600"

                            }`}
                        onClick={() => handleTabClick("instructors")}
                    >

                        Instructors
                    </li>

                    {/* Reviews Tab */}

                </ul>
            </div>
            {
                activeTab === "overview" &&
                <div role="tabpanel" className='px-[4px] sm:px-[5vw] md:px-[6vw] lg:px-[8vw]' tabIndex="0" aria-labelledby="content" id="ld-tab-content-53">
                    {/* Section 1 */}
                    <section className="py-8 bg-white">
                        <div className="container mx-auto">
                            <div className="w-full">
                                <div className="p-4 space-y-3">
                                    <p className="text-gray-700">
                                        {data[0]?.des?.para1}
                                    </p>
                                    <p className="text-gray-700">
                                        {data[0]?.des?.para2}
                                    </p>
                                    <p className="text-gray-700">
                                        {data[0]?.des?.para3}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Section 2 */}
                    <section className="py-4 bg-[#EEEEEE] shadow-md rounded-lg">
                        <div className="container mx-auto">
                            <div className="w-full">
                                <div className="p-4">
                                    <h2 className="mb-4 text-2xl font-bold text-gray-800">What you will learn?</h2>
                                    {data[0]?.learnFromCourse?.map((data, ind) => {
                                        return <div key={ind} className="flex items-start justify-start mt-1 text-gray-700">
                                            <IoIosArrowDroprightCircle className=' mt-[0.23rem] min-w-[2rem]  text-start min-text-[1.1rem]' />
                                            <p>
                                                {data}
                                            </p>
                                        </div>
                                    })}

                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="py-10 bg-white">
                        <div className="container p-4 mx-auto">

                            <h2 className="text-2xl font-bold text-gray-800">{data[0]?.whyYouLearnThis?.title}</h2>
                            <div className="py-4 space-y-3 ">
                                <p className="text-gray-700">
                                    {data[0]?.des?.para1}
                                </p>
                                <p className="text-gray-700">
                                    {data[0]?.des?.para2}
                                </p>
                                <p className="text-gray-700">
                                    {data[0]?.des?.para3}
                                </p>
                            </div>
                        </div>
                    </section>


                    {/* Section 2 */}
                    <section className="py-4 bg-[#FAF3E3] shadow-md rounded-lg">
                        <div className="container mx-auto">
                            <div className="w-full">
                                <div className="p-4">
                                    <h2 className="mb-4 text-2xl font-bold text-gray-800">Key features</h2>
                                    {data[0]?.keyFeatures?.map((data, ind) => {
                                        return <div key={ind} className="flex items-start justify-start mt-1 ">
                                            <IoCheckmarkCircle className=' mt-[0.15rem] text-green-500 min-w-[2rem]  text-start text-[1.2rem]' />
                                            <p className='text-gray-700'>
                                                {data}
                                            </p>
                                        </div>
                                    })}

                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='p-4 pt-8 pb-0 my-10 rounded-lg shadow-md bg-[#F1EAFF] '>
                        <h2 className="mx-2 text-2xl font-bold text-gray-800">Tools you will learn</h2>
                        <Marquee pauseOnHover speed={30} gradient={false} className="">
                            {data[0]?.toolsLearn?.map((review) => {
                                return <figure key={review}
                                    className={cn(
                                        "relative w-[12rem] sm:w-[15rem] mx-2 cursor-pointer overflow-hidden",
                                        // light styles


                                    )}
                                >
                                    <img src={review} alt="" />
                                </figure>
                            })}
                        </Marquee>
                    </section>
                    <section className='p-4 pt-8 my-10 rounded-lg shadow-md bg-[#FCECDD] '>
                        <h2 className="mx-2 mb-2 text-2xl font-bold text-gray-800">Hiring Partners</h2>
                        <Marquee pauseOnHover direction="right" speed={30} gradient={false} className="">
                            {data[0]?.hiring?.map((review) => {
                                return <figure key={review}
                                    className={cn(
                                        "relative w-[12rem] my-16 sm:w-[15rem] mx-2 cursor-pointer overflow-hidden",
                                        // light styles


                                    )}
                                >
                                    <img src={review} alt="" />
                                </figure>
                            })}
                        </Marquee>
                    </section>

                </div>
            }
            {
                activeTab === "curriculum" &&
                <div className="container py-10 px-[4px] sm:px-[5vw] lg:px-[8vw] mx-auto">
                    {data[0]?.curriculum?.map((data, index) => (
                        <div key={index + 1} className="mb-6 overflow-hidden border border-gray-300 rounded shadow-sm">
                            <div
                                className="flex items-center justify-between p-4 py-[0.7rem] bg-gray-100 cursor-pointer"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className="text-lg font-semibold">{data.topic}</span>
                                <span className="text-gray-500">
                                    {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                                </span>
                            </div>
                            <div className={`transition-max-height text-[0.9rem] duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-64' : 'max-h-0'}`}>
                                {openIndex === index && (
                                    <div className="p-4 bg-white">
                                        <ul className="ml-5 list-disc">
                                            {data.topicDetail.map((item, i) => (
                                                <li key={i} className="mb-2">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            }
            {
                activeTab === "outcomes" &&
                <div className="container py-10 px-[4px] sm:px-[5vw] lg:px-[8vw] mx-auto">

                    <div className="grid grid-cols-1 gap-8 p-4 sm:grid-cols-2 lg:grid-cols-4">
                        {data[0]?.learningOutcomes?.map((box, index) => {
                            return <div key={index + 1} className="flex flex-col items-center mb-6">
                                <img
                                    loading="lazy"
                                    decoding="async"

                                    src={box?.image}
                                    alt={`outcome ${index + 1}`}
                                    className="w-[9.5rem] h-auto mb-4"
                                />
                                <h3 className="text-lg font-semibold text-center">{box?.title}</h3>
                            </div>
                        }
                        )}
                    </div>
                </div>
            }
            {
                activeTab === "instructors" &&
                <div className="container py-10 px-[4px] sm:px-[5vw] lg:px-[8vw] mx-auto">
                    <h2 className="mb-8 text-2xl font-bold text-center">Our Instructors</h2>
                    <div className="grid grid-cols-1 gap-8 mx-auto lg:gap-12 sm:grid-cols-2 md:grid-cols-3 w-fit">
                        {data[0]?.instructors?.map((instructor, ind) => {
                            return <div key={ind + 1} className="overflow-hidden lg:max-w-[20rem] max-w-[19rem] bg-white rounded-lg shadow-md">
                                <img src={instructor?.image} alt={instructor?.title} className="object-cover w-full h-64" />
                                <div className="p-4 text-center">
                                    <h2 className="text-lg font-semibold">{instructor?.name}</h2>
                                    <h3 className="text-md">{instructor?.title}</h3>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            }
        </div >
    )
}

export default CourseDetail
