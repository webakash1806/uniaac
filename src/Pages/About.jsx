import React from 'react'
import { FaTrophy, FaMedal, FaGraduationCap, FaPlayCircle } from 'react-icons/fa';
import { BsBackpack } from 'react-icons/bs';

const About = () => {

    const iconBoxes = [
        {
            icon: <BsBackpack size={32} />,
            title: 'Hands on Research',
            description: 'Lorem ipsum dolor sit, consectet adipisi elit, sed do eiusmod tempor for enim adesg ens minim veniam.',
        },
        {
            icon: <FaTrophy size={32} />,
            title: 'Dedicated to Your Success',
            description: 'Lorem ipsum dolor sit, consectet adipisi elit, sed do eiusmod tempor for enim adesg ens minim veniam.',
        },
        {
            icon: <FaTrophy size={32} />,
            title: 'Graduate in Four Years',
            description: 'Lorem ipsum dolor sit, consectet adipisi elit, sed do eiusmod tempor for enim adesg ens minim veniam.',
        },
        {
            icon: <FaMedal size={32} />,
            title: 'Classic Experience',
            description: 'Lorem ipsum dolor sit, consectet adipisi elit, sed do eiusmod tempor for enim adesg ens minim veniam.',
        },
        {
            icon: <FaGraduationCap size={32} />,
            title: 'Personal Development',
            description: 'Lorem ipsum dolor sit, consectet adipisi elit, sed do eiusmod tempor for enim adesg ens minim veniam.',
        },
        {
            icon: <FaGraduationCap size={32} />,
            title: 'Flexible Learning Options',
            description: 'Lorem ipsum dolor sit, consectet adipisi elit, sed do eiusmod tempor for enim adesg ens minim veniam.',
        },

    ];

    return (
        <div>
            <section className="py-12 bg-gray-100 px-[5vw] md:px-[10vw]">
                <div className="container grid grid-cols-1 gap-8 mx-auto sm:grid-cols-2">
                    {/* Image Section */}
                    <div className="flex justify-center">
                        <img
                            src="https://talemy.themespirit.com/demo-1/wp-content/uploads/sites/14/2019/01/about.png"
                            alt="About Us"
                            className="w-full max-w-xs sm:max-w-sm"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="flex flex-col justify-center">
                        {/* Heading */}
                        <div className="text-left">
                            <span className="text-sm text-gray-500 uppercase">About Us</span>
                            <h2 className="mt-2 text-3xl font-bold">Who We Are</h2>
                            <div className="w-16 h-1 mt-2 bg-blue-600"></div>
                        </div>

                        {/* Text Content */}
                        <div className="mt-4">
                            <p className="mb-4 text-gray-700">
                                Apparently we had reached a great height in the atmosphere, for
                                the sky was a dead black, and the stars had ceased to twinkle. By
                                the same illusion which lifts the horizon of the sea to the level
                                of the spectator on a hillside.
                            </p>
                            <p className="text-gray-700">
                                Apparently we had reached a great height in the atmosphere, for
                                the sky was a dead black, and the stars had ceased to twinkle.
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex mt-6 space-x-4">
                            <a
                                href="#"
                                className="px-4 py-2 text-gray-700 transition duration-300 border border-gray-700 rounded hover:bg-gray-700 hover:text-white"
                            >
                                History
                            </a>
                            <a
                                href="#"
                                className="px-4 py-2 text-white transition duration-300 bg-blue-600 rounded hover:bg-blue-700"
                            >
                                Our Board
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12 px-[5vw] md:px-[10vw] bg-main">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-8 lg:gap-12 sm:grid-cols-2 md:grid-cols-3">
                        {iconBoxes.map((box, index) => (
                            <div key={index + 1} className="flex flex-col items-center p-4">
                                <div className="p-5 mb-4 rounded-full text-main bg-primary">
                                    {box?.icon}
                                </div>
                                <h3 className="mb-2 text-xl font-semibold text-primary">{box?.title}</h3>
                                <p className="text-center text-[0.9rem] text-white">{box?.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
