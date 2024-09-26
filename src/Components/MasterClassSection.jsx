import React from 'react';

const MasterClassSection = () => {
    return (
        <div className=" w-full flex items-start justify-center sm:justify-between md:pl-[9vw] sm:px-[4vw] lg:pl-[10.8vw] bg-[#faf8f8]">
            <div className="sm:max-w-[30rem] md:pt-10 max-w-[25rem] text-center sm:text-left flex flex-col items-center sm:items-start justify-center px-4">
                <h2 className="text-gray-900 text-[24px] md:text-[30px] lg:text-[40px] medium:text-[32px] leading-8 medium:leading-10 font-interSans font-bold pb-6">
                    MasterClass Awaits You
                </h2>
                <p className="text-gray-900 text-[0.95rem] md:text-[1rem] medium:text-base leading-[21px] medium:leading-6  pb-6">
                    Stuck in your job? Learn and grow with our masterclasses led by top industry experts. Dive into tech with seasoned leaders!
                </p>
                <a href="/masterclass/?position=home_page&click_text=explore_masterclass&page_ref=home_page">
                    <button className="opacity-100 bg-main text-white hover:bg-primary text-sm px-3 py-[10px] medium:text-base medium:px-6 medium:py-3 font-semibold rounded-md flex gap-2 justify-center items-center font-nunitoSans cursor-pointer w-full medium:!w-fit">
                        Explore Masterclass
                    </button>
                </a>
            </div>
            <div className="md:max-w-[30rem] hidden sm:block w-full ">
                <img src="https://pwskills.com/images/masterClass/masterclass_landing.svg" alt="landing" className="w-full h-auto" />
            </div>
        </div>
    );
};

export default MasterClassSection;
