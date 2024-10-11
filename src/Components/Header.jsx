import React, { useEffect, useRef, useState } from 'react';
import { FaArrowDown, FaBars, FaFacebookSquare, FaInstagramSquare, FaTimes, FaWhatsappSquare } from 'react-icons/fa';
import { FaSquarePhone, FaSquareXTwitter } from 'react-icons/fa6';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Importing useLocation to track the current path
import logo from '../assets/logo.svg'
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // Getting the current URL
    const menuRef = useRef();
    const navigate = useNavigate()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false); // New state for About dropdown

    const toggleMenu = () => {
        setIsOpen(!isOpen);

    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            window.addEventListener('click', handleOutsideClick);
        } else {
            window.removeEventListener('click', handleOutsideClick);
        }

        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, [isOpen]);

    return (
        <>
            {isOpen && <div className="fixed inset-0 bg-[#00072c] opacity-70 z-[100]" onClick={() => setIsOpen(false)}></div>}

            <header className="bg-white text-gray-900 px-4 sticky top-0 w-full font-[500] shadow-lg z-[1000]">
                <div className="container relative z-[1000] mx-auto flex justify-between items-center md:px-12 lg:px-16 py-2">
                    <img src={logo} alt="UNIAC logo" className='w-[11rem]' />
                    {/* Desktop Menu */}
                    <nav className="hidden relative z-[1000] lg:flex space-x-8  text-[1.1rem]">
                        <Link
                            to="/"
                            className={`relative transition-all duration-300 hover:text-primary ${location.pathname === '/' ? 'text-primary' : ''}`}
                        >
                            Home
                            {location.pathname === '/' && <span className="absolute left-0 right-0 bottom-[-3px] h-[2px] bg-primary"></span>}
                        </Link>

                        {/* Digital Marketing Dropdown */}
                        <div className="relative group">
                            <button
                                className={`relative flex items-center gap-1 transition-all duration-300 hover:text-primary ${location.pathname.startsWith('/courses') ? 'text-primary' : ''}`}
                            >
                                Digital Marketing <IoMdArrowDropdown className='text-[1.4rem] mt-1' />
                            </button>
                            <div className="absolute left-0 hidden group-hover:block bg-white shadow-md text-[0.9rem] rounded w-[11rem] py-2 z-[1000]">
                                <Link
                                    to="/course/1"
                                    className="block px-4 py-2 hover:bg-gray-200 hover:text-primary"
                                >
                                    Foundation Program
                                </Link>
                                <Link
                                    to="/course/2"
                                    className="block px-4 py-2 hover:bg-gray-200 hover:text-primary"
                                >
                                    Skill Degree Program
                                </Link>
                                <Link
                                    to="/course/3"
                                    className="block px-4 py-2 hover:bg-gray-200 hover:text-primary"
                                >
                                    Masters Program
                                </Link>
                                <Link
                                    to="/course/4"
                                    className="block px-4 py-2 hover:bg-gray-200 hover:text-primary"
                                >
                                    Diploma Program
                                </Link>
                            </div>
                        </div>

                        {/* About Dropdown */}
                        <div className="relative group">
                            <button
                                onClick={() => navigate('/about')}
                                className={`relative flex items-center gap-1 transition-all duration-300 hover:text-primary ${location.pathname.startsWith('/about') ? 'text-primary' : ''}`}
                            >
                                About
                                {/* <IoMdArrowDropdown className='text-[1.4rem] mt-1' /> */}
                            </button>
                            {/* <div className="absolute left-0 hidden group-hover:block bg-white shadow-md text-[0.9rem] rounded w-[11rem] py-2 z-[1000]">
                                <Link
                                    to="/about/company"
                                    className="block px-4 py-2 hover:bg-gray-200 hover:text-primary"
                                >
                                    Our Company
                                </Link>
                                <Link
                                    to="/about/team"
                                    className="block px-4 py-2 hover:bg-gray-200 hover:text-primary"
                                >
                                    Our Team
                                </Link>
                            </div> */}
                        </div>

                        <Link
                            to="/contact"
                            className={`relative transition-all duration-300 hover:text-primary ${location.pathname === '/contact' ? 'text-primary' : ''}`}
                        >
                            Contact
                            {location.pathname === '/contact' && <span className="absolute left-0 right-0 bottom-[-3px] h-[2px] bg-primary"></span>}
                        </Link>
                    </nav>

                    <button className='hidden p-2 px-4 rounded lg:block bg-main text-primary'>
                        Book Demo class
                    </button>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button onClick={toggleMenu}>
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 21 21"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu with Slide-in Effect */}
                <div
                    className={`fixed z-[1000] flex flex-col items-start justify-between top-[5rem] right-[0.7rem] shadow-lg rounded-lg h-[29rem] border-gray-300 border w-[14rem] bg-white duration-700 text-gray-900 p-6 pb-4 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-[25rem]'} md:hidden`}
                >
                    <nav className="flex flex-col space-y-4 ">
                        <Link
                            to="/"
                            className={`relative transition-all duration-300 w-fit hover:text-primary ${location.pathname === '/' ? 'text-primary' : ''}`}
                            onClick={toggleMenu}
                        >
                            Home
                            {location.pathname === '/' && <span className="absolute left-0 right-0 bottom-[-3px] h-[2px] bg-primary"></span>}
                        </Link>

                        {/* Mobile Digital Marketing Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className={`relative transition-all flex duration-300 hover:text-primary w-fit ${location.pathname.startsWith('/courses') ? 'text-primary' : ''}`}
                            >
                                Digital Marketing <IoMdArrowDropdown className='text-[1.4rem] mt-1' />
                            </button>
                            {isDropdownOpen && (
                                <div className="mt-2 ml-3 space-y-2 text-[0.9rem]">
                                    <Link

                                        to="/course/1"
                                        className="block transition-all duration-300 w-fit hover:text-primary"
                                        onClick={toggleMenu}
                                    >
                                        Foundation Program
                                    </Link>
                                    <Link
                                        to="/course/2"
                                        className="block transition-all duration-300 w-fit hover:text-primary"
                                        onClick={toggleMenu}
                                    >
                                        Skill Degree Program
                                    </Link>
                                    <Link
                                        to="/course/3"
                                        className="block transition-all duration-300 w-fit hover:text-primary"
                                        onClick={toggleMenu}
                                    >
                                        Masters Program
                                    </Link>
                                    <Link
                                        to="/course/4"
                                        className="block transition-all duration-300 w-fit hover:text-primary"
                                        onClick={toggleMenu}
                                    >
                                        Diploma Program
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Mobile About Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => navigate('/about')}

                                // onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                                className={`relative transition-all flex duration-300 hover:text-primary w-fit ${location.pathname.startsWith('/about') ? 'text-primary' : ''}`}
                            >
                                About
                                {/* <IoMdArrowDropdown className='text-[1.4rem] mt-1' /> */}
                            </button>
                            {/* {isAboutDropdownOpen && (
                                <div className="mt-2 ml-3 space-y-2 text-[0.9rem]">
                                    <Link
                                        to="/about/company"
                                        className="block transition-all duration-300 w-fit hover:text-primary"
                                        onClick={toggleMenu}
                                    >
                                        Our Company
                                    </Link>
                                    <Link
                                        to="/about/team"
                                        className="block transition-all duration-300 w-fit hover:text-primary"
                                        onClick={toggleMenu}
                                    >
                                        Our Team
                                    </Link>
                                </div>
                            )} */}
                        </div>

                        <Link
                            to="/contact"
                            className={`relative transition-all duration-300 w-fit hover:text-primary ${location.pathname === '/contact' ? 'text-primary' : ''}`}
                            onClick={toggleMenu}
                        >
                            Contact
                            {location.pathname === '/contact' && <span className="absolute left-0 right-0 bottom-[-3px] h-[2px] bg-primary"></span>}
                        </Link>

                        <button className='p-2 text-[0.9rem] w-[11rem] mt-2 rounded bg-main text-primary'>
                            Book Demo class
                        </button>
                    </nav>

                    {/* Social Media Icons */}
                    <div className="flex items-center justify-between w-full mt-6">
                        <FaFacebookSquare className="text-[1.7rem] cursor-pointer transition-all duration-300 hover:scale-[1.2] hover:text-primary" />
                        <FaInstagramSquare className="text-[1.7rem] cursor-pointer transition-all duration-300 hover:scale-[1.2] hover:text-primary" />
                        <FaSquareXTwitter className="text-[1.7rem] cursor-pointer transition-all duration-300 hover:scale-[1.2] hover:text-primary" />
                        <FaWhatsappSquare className="text-[1.7rem] cursor-pointer transition-all duration-300 hover:scale-[1.2] hover:text-primary" />
                        <FaSquarePhone className="text-[1.7rem] cursor-pointer transition-all duration-300 hover:scale-[1.2] hover:text-primary" />
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
