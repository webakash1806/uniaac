import React from 'react';

const OnlineCourseSection = () => {
    return (
        <section className="py-16  lg:py-[154px] bg-[#f7f8ff]">
            <div className="container px-4 mx-auto lg:px-32 ">
                <div className="flex flex-col gap-6 lg:flex-row md:gap-14 lg:gap-6">
                    <div className="w-full lg:w-[737px]">

                        <div className="flex flex-col gap-6 mt-1 lg:gap-8 md:mt-2 lg:mt-6">
                            <h1 className="text-[1.9rem] capitalize leading-9  font-inter font-bold lg:font-medium text-gray-850 md:text-[2.5rem] lg:text-[3.5rem] md:leading-[40px] lg:leading-[80px]">
                                Best{' '}
                                <span className="bg-gradient-to-r from-main from-18% to-primary to-100% text-transparent bg-clip-text font-bold">
                                    digital
                                </span>{' '}
                                skills institute in india
                            </h1>
                            <p className="md:text-base md:leading-6 font-inter font-normal md:font-medium text-gray-650 text-[17px] md:text-[20px] leading-[32px] w-full text-left">
                                We at UNIAC Digital Marketing Institute in Delhi, uplift every student to excel and advance their skills in this growing and evolving digital era. With the exclusive courses we commit to make sure that each and every student is well mindful of the latest industry-related skills and confident enough to deal with the projects. SkillCircle provides courses like Digital Marketing, Data Science, UI/UX Designing.
                            </p>
                            <div className="flex gap-[10px] md:gap-6 justify-center lg:justify-normal">
                                <div>
                                    <a
                                        className="self-start w-full"
                                        href="/online-degree/?position=online_degree_section&buttonText=explore_courses"
                                    >
                                        <button className="opacity-100 bg-primary text-main hover:text-white hover:bg-main text-sm py-[10px] md:text-base md:px-6 md:py-3 rounded-md flex gap-2 justify-center items-center font-nunitoSans cursor-pointer mx-auto lg:mx-0 w-full md:w-fit font-semibold px-4 ">
                                            Download Courses Brochures
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
                        className="w-full h-full m-auto md:w-1/3"
                    />
                </div>
            </div>
        </section>
    );
};

export default OnlineCourseSection;
