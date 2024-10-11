import { Link } from 'react-router-dom'; // If you're using React Router

import logo from '../assets/logo.svg'

import {
    BsFacebook,
    BsInstagram,
    BsLinkedin,
    BsWhatsapp,
    BsYoutube
} from 'react-icons/bs'

const Footer = () => {
    return (
        <footer className="relative flex flex-col items-center justify-center mt-16 overflow-x-hidden">

            <div className="w-full px-4 pt-8 mx-auto sm:px-28 bg-main">
                <div className="py-8">
                    <div className="flex flex-wrap items-center justify-around">
                        {/* About Section */}
                        <div className="w-full mb-8 lg:w-1/3 md:w-full xl:mb-0">
                            <div className="text-white">
                                <Link to="/">
                                    <img src={logo} alt="Logo" className="mb-4 w-[10rem] drop-shadow-[0px_0px_1px_#fff]" />
                                </Link>

                                <p>
                                    Award-winning and the best digital skills institute in India, offering advanced courses in Digital Marketing, Data Science, and UI/UX Designing with a 100% job guarantee.
                                </p>
                                <div className='flex gap-4 mt-8'>
                                    <a href={''} className='text-[18px] hover:text-primary'><BsLinkedin /></a>
                                    <Link to={''} target='_blank' className='text-[18px] hover:text-primary'><BsFacebook /></Link>
                                    <Link to={`https://wa.me/${''}?text=Hello`} target='_blank' className='text-[18px] hover:text-primary'><BsWhatsapp /></Link>
                                    <Link to={''} target='_blank' className='text-[18px] hover:text-primary'><BsInstagram /></Link>
                                    <Link to={''} target='_blank' className='text-[18px] hover:text-primary'><BsYoutube /></Link>
                                    {/* <a href="" className='text-[18px]'><BsTwitter /></a> */}
                                </div>
                            </div>
                        </div>

                        {/* Services Section */}
                        <div className="w-full mb-8 xl:w-1/4 md:w-1/3 md:mb-0">
                            <div className="text-white">
                                <h2 className="text-[1.1rem] font-semibold mb-4">Courses</h2>
                                <div className="flex gap-1 mb-4">
                                    <div className="w-[2.5rem] h-[3.5px] bg-white rounded-full"></div>
                                    <div className="w-[1rem] h-[3.5px] bg-white rounded-full"></div>
                                    <div className="w-[3.5px] h-[3.5px] bg-white rounded-full"></div>
                                </div>
                                <ul>
                                    <li className="text-[#e0e4ff] leading-8 text-[0.9rem] hover:text-white">
                                        <Link to="/course/1">Foundation Program</Link>
                                    </li>
                                    <li className="text-[#e0e4ff] leading-8 text-[0.9rem] hover:text-white">
                                        <Link to="/course/2">Skill Degree Program</Link>
                                    </li>
                                    <li className="text-[#e0e4ff] leading-8 text-[0.9rem] hover:text-white">
                                        <Link to="/course/3">Masters program</Link>
                                    </li>

                                    <li className="text-[#e0e4ff] leading-8 text-[0.9rem] hover:text-white">
                                        <Link to="/course/4">Diploma Program</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Quick Links Section */}
                        <div className="w-full xl:w-1/6 md:w-1/3">
                            <div className="text-white">
                                <h2 className="text-[1.1rem] font-semibold mb-4">Quick Links</h2>
                                <div className="flex gap-1 mb-4">
                                    <div className="w-[2.5rem] h-[3.5px] bg-white rounded-full"></div>
                                    <div className="w-[1rem] h-[3.5px] bg-white rounded-full"></div>
                                    <div className="w-[3.5px] h-[3.5px] bg-white rounded-full"></div>
                                </div>
                                <ul>
                                    <li className="text-[#e0e4ff] leading-8 text-[0.9rem] hover:text-white">
                                        <Link to="/about">About us</Link>
                                    </li>
                                    <li className="text-[#e0e4ff] leading-8 text-[0.9rem] hover:text-white">
                                        <Link to="/contact">Contact us</Link>
                                    </li>
                                    <li className="text-[#e0e4ff] leading-8 text-[0.9rem] hover:text-white">
                                        <Link to="/privacy-policy">Privacy Policy</Link>
                                    </li>
                                    <li className="text-[#e0e4ff] leading-8 text-[0.9rem] hover:text-white">
                                        <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
                                    </li>
                                    <li className="text-[#e0e4ff] leading-8 text-[0.9rem] hover:text-white">
                                        <Link to="/FAQ">FAQs</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='mt-10 sm:px-12'>
                        <h2 className="text-[1.1rem] font-semibold mb-4 text-white">Approved & Partner</h2>
                        <div className="flex gap-1 mb-4">
                            <div className="w-[2.5rem] h-[3.5px] bg-primary rounded-full"></div>
                            <div className="w-[1rem] h-[3.5px] bg-primary rounded-full"></div>
                            <div className="w-[3.5px] h-[3.5px] bg-primary rounded-full"></div>
                        </div>

                        <div >
                            <img className='bg-white w-[13rem] p-4 mt-6' src="https://skillcircle.in/wp-content/uploads/2024/03/Google-Partner-New-Logo.pngw3_.webp" alt="" />
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}

            </div>

            <div className="flex w-full bg-[#000a12] items-center justify-center gap-1 text-[1rem] py-4 text-[#fff]">

                <span className="text-center text-[0.9rem]">© 2024 UNIAC All rights reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;