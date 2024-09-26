import React, { useEffect, useRef, useState } from 'react';
import { FaBars, FaFacebookSquare, FaInstagramSquare, FaTimes, FaWhatsappSquare } from 'react-icons/fa';
import { FaSquarePhone, FaSquareXTwitter, FaXmark } from 'react-icons/fa6';
import { HiMiniXMark } from 'react-icons/hi2';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link, useLocation } from 'react-router-dom'; // Importing useLocation to track the current path

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // Getting the current URL
    const menuRef = useRef();
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

            <header className="bg-white py-[0.2rem]  text-gray-800 sticky top-0 w-full shadow-lg z-[1000]">
                <div className="container relative z-[1000] mx-auto flex justify-between items-center md:px-12 lg:px-16 py-4">
                    <div className="text-2xl font-bold text-main">Digital Marketing LMS</div>

                    {/* Desktop Menu */}
                    <nav className="hidden relative z-[1000] md:flex space-x-8 font-semibold text-[1.1rem]">
                        <Link
                            to="/"
                            className={`relative transition-all duration-300 hover:text-main ${location.pathname === '/' ? 'text-main' : ''}`}
                        >
                            Home
                            {location.pathname === '/' && <span className="absolute left-0 right-0 bottom-[-3px] h-[2px] bg-main"></span>}
                        </Link>
                        <Link
                            to="/courses"
                            className={`relative transition-all duration-300 hover:text-main ${location.pathname === '/courses' ? 'text-main' : ''}`}
                        >
                            Courses
                            {location.pathname === '/courses' && <span className="absolute left-0 right-0 bottom-[-3px] h-[2px] bg-main"></span>}
                        </Link>
                        <Link
                            to="/about"
                            className={`relative transition-all duration-300 hover:text-main ${location.pathname === '/about' ? 'text-main' : ''}`}
                        >
                            About
                            {location.pathname === '/about' && <span className="absolute left-0 right-0 bottom-[-3px] h-[2px] bg-main"></span>}
                        </Link>
                        <Link
                            to="/contact"
                            className={`relative transition-all duration-300 hover:text-main ${location.pathname === '/contact' ? 'text-main' : ''}`}
                        >
                            Contact
                            {location.pathname === '/contact' && <span className="absolute left-0 right-0 bottom-[-3px] h-[2px] bg-main"></span>}
                        </Link>
                    </nav>


                    {/* Mobile Menu Button */}
                    <div className="md:hidden" >
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
                    className={`fixed z-[1000] flex flex-col items-start justify-between top-[5rem] right-[0.7rem] shadow-lg rounded-lg h-[27rem] border-gray-300 border w-[14rem] bg-white duration-700 text-gray-600 p-6 pb-0 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-[25rem]'} md:hidden`}
                >
                    <nav className="flex flex-col space-y-4 font-semibold">
                        <Link
                            to="/"
                            className={`relative transition-all duration-300 w-fit hover:text-main ${location.pathname === '/' ? 'text-main' : ''}`}
                            onClick={toggleMenu}
                        >
                            Home
                            {location.pathname === '/' && <span className="absolute left-0 right-0 bottom-[-3px] h-[2px] bg-main"></span>}
                        </Link>
                        <Link
                            to="/courses"
                            className={`relative transition-all duration-300 w-fit hover:text-main ${location.pathname === '/courses' ? 'text-main' : ''}`}
                            onClick={toggleMenu}
                        >
                            Courses
                            {location.pathname === '/courses' && <span className="absolute left-0 right-0 bottom-[-3px] h-[2px] bg-main"></span>}
                        </Link>
                        <Link
                            to="/about"
                            className={`relative transition-all duration-300 w-fit hover:text-main ${location.pathname === '/about' ? 'text-main' : ''}`}
                            onClick={toggleMenu}
                        >
                            About
                            {location.pathname === '/about' && <span className="absolute left-0 right-0 bottom-[-3px] h-[2px] bg-main"></span>}
                        </Link>
                        <Link
                            to="/contact"
                            className={`relative transition-all duration-300 w-fit hover:text-main ${location.pathname === '/contact' ? 'text-main' : ''}`}
                            onClick={toggleMenu}
                        >
                            Contact
                            {location.pathname === '/contact' && <span className="absolute left-0 right-0 bottom-[-3px] h-[2px] bg-main"></span>}
                        </Link>
                    </nav>
                    <div className='text-[1.68rem] w-fit mx-auto mb-6 flex items-center gap-3'>
                        <Link to={"https://www.instagram.com/binarywisetech/?hl=en"} target='_blank' className='hover:text-main'>
                            <FaInstagramSquare />
                        </Link>
                        <Link to={""} className='hover:text-main'>
                            <FaFacebookSquare />
                        </Link>
                        <Link to={""} className='hover:text-main'>
                            <FaSquareXTwitter />
                        </Link>
                        <Link to={"https://wa.me/916207234759"} target='_blank' className='hover:text-main'>
                            <FaWhatsappSquare />
                        </Link>
                        <Link to={"tel:+916207234759"} className='hover:text-main'>
                            <FaSquarePhone />
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
