import React, { useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6';
import { MdContactPhone } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
const Contact = () => {

    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Contact Us' },
    ];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.phone || !formData.email) {
            return toast.error("All fields are required")
        }
        setLoading(true);
        loading && toast.loading('Sending message...');

        const serviceID = 'service_binar';
        const templateID = 'template_expvbs';
        const userID = 'o7E8VZREP08XRZNg';

        emailjs.send(serviceID, templateID, formData, userID)
            .then((response) => {
                toast.success('Email sent successfully!');
                setLoading(false);
                setFormData({ name: '', email: '', phone: '', message: '' });
            })
            .catch((error) => {
                setLoading(false);
                return toast.error('An error occurred while sending the email.');
            });
    };

    return (
        <div>
            {/* <BreadCrumbs headText={"Contact Us"} items={breadcrumbItems} /> */}
            <div className='flex bg-[#F5F6F7] flex-wrap  gap-8 items-center justify-around py-12 sm:py-20'>
                {/* Left Column */}
                <div className="max-w-[34rem] px-4 md:max-w-[35rem] flex items-center">
                    <div className="">
                        <h1 className='font-semibold font-poppins leading-[3rem] mb-4 text-[2.1rem] sm:text-[2.6rem] text-[#0A165D]'>
                            Partner with Us for Comprehensive IT Services
                        </h1>

                        <p className='sora-400 leading-[1.85rem] text-[#535760] mb-8'>
                            We provide comprehensive IT services, including web development, graphic design, and digital marketing, to help businesses grow and achieve their goals. Let's collaborate to elevate your business.
                        </p>
                        <div className="flex flex-col justify-between sm:flex-row">
                            {/* Address Info */}
                            <div className="flex flex-col items-start space-y-3">
                                <div className='bg-[#0A165D] p-3 rounded-md'>
                                    <FaLocationDot className='text-[1.4rem] text-white' />
                                </div>
                                <div>
                                    <h2 className="text-[#0A165D] text-[1.3rem] sora-600">Address</h2>
                                    <p className='sora-400 text-[1rem] text-[#535760] mt-2'>Clever Clerk<br />New Delhi, Delhi <br /> 221003</p>
                                </div>
                            </div>
                            {/* Contact Info */}
                            <div className="flex flex-col items-start space-y-3">
                                <div className='bg-[#0A165D] p-3 rounded-md'>
                                    <MdContactPhone className='text-[1.4rem] text-white' />
                                </div>
                                <div className='sora-400 text-[1rem] text-[#535760] space-y-1'>
                                    <h2 className="text-[#0A165D] text-[1.3rem] sora-600 mb-2">Contact</h2>
                                    <a href="mailto:info@domain.com" className="block">info@domain.com</a>
                                    <a href="tel:6207234759" className="block">+91 9876543210</a>
                                    <a href="tel:8115544102" className="block">+91 9876543210</a>
                                </div>
                            </div>
                        </div>
                        <p className="mt-8 text-[#0A165D] sora-500 text-[1.1rem]">Office Hours: 24/7</p>
                    </div>
                </div>

                {/* Right Column */}
                <div className="max-w-[34rem] sm:p-12 p-6 bg-white shadow-lg rounded-xl  md:max-w-[31rem] mt-10 lg:mt-0" data-aos="fade-up" data-aos-duration="600">
                    <h3 className="text-2xl text-[#0A165D] sora-600 font-semibold mb-4">Fill The Contact Form</h3>
                    <p className="mb-6 sora-400 text-[#535760]">Feel free to contact with us, guaranteed response within 24 hours</p>
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="mb-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-[#0f29bd]"
                                required
                            />
                        </div>
                        <div className="flex flex-wrap mb-4 -mx-2">
                            <div className="w-full px-2 mb-4 lg:w-[60%] lg:mb-0">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email address"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-[#0f29bd]"
                                    required
                                />
                            </div>
                            <div className="w-full px-2 lg:w-[40%]">
                                <input
                                    type="number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone number"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-[#0f29bd]"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Write your message"
                                className="w-full p-2 border rounded resize-none focus:outline-none focus:ring-1 focus:ring-[#0f29bd]"
                                rows="5"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="relative flex items-center w-full px-8 py-3 mt-6 overflow-hidden font-medium text-center transition-all rounded-md bg-main group"
                        >
                            <span
                                className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#3755ff] rounded group-hover:-mr-4 group-hover:-mt-4"
                            >
                                <span
                                    className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                ></span>
                            </span>
                            <span
                                className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#3755ff] rounded group-hover:-ml-4 group-hover:-mb-4"
                            >
                                <span
                                    className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                ></span>
                            </span>
                            <span
                                className="relative w-full text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </span>
                        </button>
                    </form>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7211.158118865743!2d82.9656194892169!3d25.351902510446408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2dcac102de6d%3A0x380acc80bc9a6f1f!2sBhojuveer%2C%20Varanasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1724419781258!5m2!1sen!2sin" height="400" allowfullscreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full'></iframe>
        </div>
    )
}

export default Contact