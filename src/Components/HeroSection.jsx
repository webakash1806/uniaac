import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <main className='text-white  relative min-h-[85vh] py-2 w-full bg-gradient-to-b overflow-x-hidden from-[#0d0f25] to-main'>
            <div
                className="absolute inset-0 z-1"
                style={{
                    background: `radial-gradient(#fff 1.3px, transparent 1.3px)`,
                    backgroundSize: '40px 40px',
                    opacity: 0.15,
                }}
            ></div>
            <section className="relative px-4 py-10 text-center z-1 ">
                {/* Heading Section */}
                <div className="flex flex-col items-center justify-center max-w-3xl mx-auto text-white">
                    <div className='w-fit'>
                        <h1 className="sm:text-6xl text-5xl md:text-7xl  tracking-wide font-[600] lg:text-[4.8rem]">
                            Why <span className="text-primary">UNIAC?</span>
                        </h1>
                        <div className="flex gap-1 mt-8 mb-6">
                            <span className="inline-block w-[50%] h-1 bg-white rounded-full"></span>
                            <span className="inline-block w-1 h-1 bg-white rounded-full"></span>
                            <span className="inline-block w-1 h-1 bg-white rounded-full"></span>
                            <span className="inline-block w-1 h-1 bg-white rounded-full"></span>
                        </div>
                    </div>

                    {/* Static "Learn" text and typewriter effect for dynamic text */}
                    <h2 className="flex items-center justify-center gap-3 py-4 text-[1.9rem] font-semibold text-primary">
                        Learn{' '}
                        <h3 className='text-white'>
                            <TypeAnimation
                                sequence={[
                                    'Digital Marketing',
                                    1500,
                                    'UI/UX Design',
                                    1500,

                                ]}
                                speed={30} // Typing speed
                                wrapper="span"
                                deletionSpeed={30}
                                repeat={Infinity} // Loop the animation
                            />
                        </h3>
                    </h2>

                    <p className="mt-4 text-xl font-[400] font-roboto">
                        Gateway To A <span className="font-semibold text-primary">High Paying Skill</span> Starts Here 🚀
                    </p>

                    {/* CTA Button */}
                    <button className="px-6 py-2 mt-6 text-black transition duration-300 bg-white border rounded-md shadow-md border-primary hover:bg-primary">
                        ➔ Explore Our Courses
                    </button>
                </div>

                {/* Featured Logos */}
                <div className="relative mt-12 z-1">
                    <h3 className="text-xl text-white">Featured in:</h3>
                    <div className="flex justify-center gap-4 mt-4 md:gap-8">
                        {/* Logos */}
                        <img
                            src="https://shorturl.at/7wGUd"
                            alt="Josh Talks"
                            className="w-1/6 rounded-md md:w-28"
                        />
                        <img
                            src="https://shorturl.at/DRsMK"
                            alt="Silicon India"
                            className="w-1/6 rounded-md md:w-28"
                        />
                        <img
                            src="https://shorturl.at/Idwni"
                            alt="TOI"
                            className="w-1/6 rounded-md md:w-28"
                        />
                        <img
                            src="https://shorturl.at/SMKjM"
                            alt="TEDx"
                            className="w-1/6 rounded-md md:w-28"
                        />
                        <img
                            src="https://tinyurl.com/5efkzanx"
                            alt="Forbes"
                            className="w-1/6 rounded-md md:w-28"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HeroSection;
