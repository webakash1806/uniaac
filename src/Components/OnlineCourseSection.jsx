import React from 'react';

const OnlineCourseSection = () => {
    return (
        <section className="py-16  lg:py-[154px] bg-[#fff7f9]">
            <div className="px-4 lg:px-32  container mx-auto ">
                <div className="flex flex-col lg:flex-row gap-6 md:gap-14 lg:gap-6">
                    <div className="w-full lg:w-[737px]">
                        <div>
                            <p className="md:text-base md:leading-6 font-inter font-bold text-gray-850 text-[16px] md:text-[20px]">
                                Online Course
                            </p>
                        </div>
                        <div className="flex flex-col gap-6 lg:gap-8 mt-1 md:mt-2 lg:mt-6">
                            <h1 className="text-[1.9rem] leading-9  font-inter font-bold lg:font-medium text-gray-850 md:text-[2.5rem] lg:text-[3.5rem] md:leading-[40px] lg:leading-[80px]">
                                Where{' '}
                                <span className="bg-gradient-to-r from-main from-18% to-[#F38A77] to-100% text-transparent bg-clip-text font-bold">
                                    Learning
                                </span>{' '}
                                Meets The Expectation
                            </h1>
                            <p className="md:text-base md:leading-6 font-inter font-normal md:font-medium text-gray-650 text-[17px] md:text-[20px] leading-[32px] w-full lg:w-[70%] text-left">
                                We're transforming your journey into the world of digital marketing. Our comprehensive college programs, in partnership with leading institutions, equip you with the essential skills and knowledge to kickstart your career in this dynamic field.
                            </p>
                            <div className="flex gap-[10px] md:gap-6 justify-center lg:justify-normal">
                                <div>
                                    <a
                                        className="self-start w-full"
                                        href="/online-degree/?position=online_degree_section&buttonText=explore_courses"
                                    >
                                        <button className="opacity-100 bg-main text-white hover:bg-primary text-sm py-[10px] md:text-base md:px-6 md:py-3 rounded-md flex gap-2 justify-center items-center font-nunitoSans cursor-pointer mx-auto lg:mx-0 w-full md:w-fit font-bold px-4 ">
                                            Explore Courses
                                        </button>
                                    </a>
                                </div>
                                <div>
                                    <button className="opacity-100 border border-main text-main hover:text-primary hover:border-primary text-sm py-[10px] md:text-base  md:py-3 rounded-md flex gap-2 justify-center items-center font-nunitoSans cursor-pointer mx-auto lg:mx-0 w-full md:w-fit font-bold px-4 md:px-5 ">
                                        Talk to counsellor
                                        <img
                                            alt="callIcon"
                                            loading="lazy"
                                            width="20"
                                            height="20"
                                            src="https://img.icons8.com/ios-filled/50/FFA500/phone.png"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        src="https://pwskills.com/images/homePage/homepage-degree.webp"
                        alt="online-degree-homepage-img"
                        className="w-full h-full md:w-[512px] lg:w-[520px] m-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default OnlineCourseSection;
