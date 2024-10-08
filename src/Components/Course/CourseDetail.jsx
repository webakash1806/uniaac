import React, { useState } from 'react'
import { FaHome, FaChevronRight, FaPlayCircle, FaStar, FaStarHalfAlt, FaUserFriends, FaUser, FaCalendarAlt, FaSignal, FaGlobe, FaTag, FaCheck, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CourseDetail = () => {

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


    return (
        <div className=''>
            <div className="text-white course-intro bg-main p-[5vw] lg:px-[8vw]">
                {/* Breadcrumbs */}
                <div className="container px-4 mx-auto">
                    <nav className="flex items-center text-sm text-gray-50 breadcrumbs" aria-label="breadcrumb">
                        <span className="item first-item">
                            <Link to={'/'} className="flex items-center">
                                <FaHome className="mr-1" />
                                Home
                            </Link>
                        </span>
                        <FaChevronRight className="mx-2" />
                        <span className="item">
                            <a href="https://talemy.themespirit.com/demo-1/courses/">Courses</a>
                        </span>
                        <FaChevronRight className="mx-2" />
                        <span className="item">
                            <a href="https://talemy.themespirit.com/demo-1/course-category/business/">Business</a>
                        </span>
                        <FaChevronRight className="mx-2" />
                        <span className="item last-item">The Complete Digital Marketing Bootcamp</span>
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
                                        src="https://talemy.themespirit.com/demo-1/wp-content/uploads/sites/14/2019/02/12-540x360.jpg"
                                        alt="Course Preview"
                                        className="object-cover w-full rounded-md"
                                    />
                                </a>
                            </div>
                        </div>

                        {/* Course Details */}
                        <div className="lg:w-2/3 lg:order-1 lg:pr-8">
                            <div className="course-intro__content">
                                <h1 className="text-4xl font-semibold tracking-wide font-roboto">The Complete Digital Marketing Bootcamp</h1>
                                <div className="mt-6 course-intro__meta">
                                    {/* Rating */}
                                    <div className="flex items-center mb-4 text-[0.92rem] tracking-wide">
                                        <div className="flex items-center ldcr-rating">
                                            <span className="flex text-yellow-400">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStarHalfAlt />
                                            </span>
                                            <span className="ml-2">4.5</span>
                                            <span className="ml-2 text-gray-200">(2 ratings)</span>
                                        </div>
                                    </div>

                                    {/* Enrolled Students */}
                                    <div className="mb-2 text-[0.92rem] tracking-wide">
                                        <FaUserFriends className="inline text-primary" /> 202 students enrolled
                                    </div>

                                    {/* Author */}
                                    <div className="mb-2 text-[0.92rem] tracking-wide">
                                        <FaUser className="inline text-primary" /> Created by{" "}
                                        <a className="text-purple-200">
                                            Robert Moreno
                                        </a>
                                    </div>

                                    {/* Last Updated */}
                                    <div className="mb-2 text-[0.92rem] tracking-wide">
                                        <FaCalendarAlt className="inline text-primary" /> Last updated June 21, 2019
                                    </div>

                                    <div className='flex gap-3 text-[0.92rem] tracking-wide'>
                                        {/* Course Level */}
                                        <div className="mb-2">
                                            <FaSignal className="inline text-primary" /> Beginner
                                        </div>

                                        {/* Language */}
                                        <div className="mb-2">
                                            <FaGlobe className="inline text-primary" /> English
                                        </div>
                                    </div>

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
            <div className=" sm:px-[5vw] lg:px-[8vw] bg-gray-100">
                <ul className="grid grid-cols-4 text-[0.9rem] sm:text-[1rem] sm:gap-3 font-semibold border-b course-tabs">
                    {/* Overview Tab */}
                    <li
                        className={`cursor-pointer text-center p-3 px-2 sm:px-6 ${activeTab === "overview" ? "text-primary bg-main border-b-2 border-primary" : "text-gray-600"
                            }`}
                        onClick={() => handleTabClick("overview")}
                    >
                        <a
                            href="#course-section__overview"
                            className="course-tab"
                        >
                            Overview
                        </a>
                    </li>

                    {/* Curriculum Tab */}
                    <li
                        className={`cursor-pointer text-center  p-3 px-2 sm:px-6 ${activeTab === "curriculum" ? "text-primary bg-main border-b-2 border-primary" : "text-gray-600"

                            }`}
                        onClick={() => handleTabClick("curriculum")}
                    >
                        <a
                            href="#course-section__curriculum"
                            className="course-tab"
                        >
                            Curriculum
                        </a>
                    </li>

                    {/* Instructors Tab */}
                    <li
                        className={`cursor-pointer text-center  p-3 px-2 sm:px-6 ${activeTab === "instructors" ? "text-primary bg-main border-b-2 border-primary" : "text-gray-600"

                            }`}
                        onClick={() => handleTabClick("instructors")}
                    >
                        <a
                            href="#course-section__instructors"
                            className="course-tab"
                        >
                            Instructors
                        </a>
                    </li>

                    {/* Reviews Tab */}
                    <li
                        className={`cursor-pointer text-center  p-3 px-2 sm:px-6 ${activeTab === "reviews" ? "text-primary bg-main border-b-2 border-primary" : "text-gray-600"

                            }`}
                        onClick={() => handleTabClick("reviews")}

                    >
                        <a
                            href="#course-section__reviews"
                            className="course-tab"
                        >
                            Reviews
                        </a>
                    </li>
                </ul>
            </div>
            {
                activeTab === "overview" &&
                <div role="tabpanel" className='px-[5vw] md:px-[6vw] lg:px-[8vw]' tabIndex="0" aria-labelledby="content" id="ld-tab-content-53">
                    {/* Section 1 */}
                    <section className="py-8 bg-white">
                        <div className="container mx-auto">
                            <div className="w-full">
                                <div className="p-4">
                                    <p className="text-gray-700">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in finibus neque.
                                        Vivamus in ipsum quis elit vehicula tempus vitae quis lacus. Vestibulum interdum diam
                                        non mi cursus venenatis. Morbi lacinia libero et elementum vulputate. Vivamus et
                                        facilisis mauris. Maecenas nec massa auctor, ultricies massa eu, tristique erat.
                                        Vivamus in ipsum quis elit vehicula tempus vitae quis lacus. Eu pellentesque,
                                        accumsan tellus leo, ultrices mi dui lectus sem nulla eu. Eu pellentesque, accumsan
                                        tellus leo, ultrices mi dui lectus sem nulla eu. Maecenas arcu, nec ridiculus
                                        quisque orci, vulputate mattis risus erat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section className="py-8 bg-gray-100">
                        <div className="container mx-auto">
                            <div className="w-full">
                                <div className="p-4">
                                    <h2 className="text-2xl font-bold text-gray-800">What will you learn?</h2>
                                    <p className="mt-4 text-gray-700">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in finibus neque.
                                        Vivamus in ipsum quis elit vehicula tempus vitae quis lacus. Vestibulum interdum diam
                                        non mi cursus venenatis. Morbi lacinia libero et elementum vulputate.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="py-8 bg-white">
                        <div className="container flex flex-wrap mx-auto">
                            {/* Left Column */}
                            <div className="w-full p-4 md:w-1/2">
                                <h2 className="text-2xl font-bold text-gray-800">What you will learn?</h2>
                                <ul className="mt-4 space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-green-500">
                                            <FaCheck />
                                        </span>
                                        <span className="ml-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500">
                                            <FaCheck />
                                        </span>
                                        <span className="ml-2 text-gray-700">
                                            Maecenas in finibus neque. Vivamus in ipsum quis elit vitae quis.
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500">
                                            <FaCheck />
                                        </span>
                                        <span className="ml-2 text-gray-700">Vestibulum interdum diam non mi cursus venenatis.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500">
                                            <FaCheck />
                                        </span>
                                        <span className="ml-2 text-gray-700">Morbi lacinia libero et elementum vulputate.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Right Column */}
                            <div className="w-full p-4 md:w-1/2">
                                <h2 className="text-2xl font-bold text-gray-800">Key features</h2>
                                <ul className="mt-4 space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-green-500">
                                            <FaCheck />
                                        </span>
                                        <span className="ml-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500">
                                            <FaCheck />
                                        </span>
                                        <span className="ml-2 text-gray-700">
                                            Maecenas in finibus neque. Vivamus in ipsum quis elit vitae quis.
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500">
                                            <FaCheck />
                                        </span>
                                        <span className="ml-2 text-gray-700">Vestibulum interdum diam non mi cursus venenatis.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500">
                                            <FaCheck />
                                        </span>
                                        <span className="ml-2 text-gray-700">Morbi lacinia libero et elementum vulputate.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            }
            {
                activeTab === "curriculum" &&
                <div className="container py-10 px-[5vw] lg:px-[8vw] mx-auto">
                    {accordionData.map((data, index) => (
                        <div key={index + 1} className="mb-6 overflow-hidden border border-gray-300 rounded shadow-sm">
                            <div
                                className="flex items-center justify-between p-4 py-[0.7rem] bg-gray-100 cursor-pointer"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className="text-lg font-semibold">{data.title}</span>
                                <span className="text-gray-500">
                                    {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                                </span>
                            </div>
                            <div className={`transition-max-height text-[0.9rem] duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-64' : 'max-h-0'}`}>
                                {openIndex === index && (
                                    <div className="p-4 bg-white">
                                        <ul className="ml-5 list-disc">
                                            {data.content.map((item, i) => (
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
        </div>
    )
}

export default CourseDetail
