import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import faqData from '../Hooks/faqData'


const FAQPage = () => {
    const [activeIndex, setActiveIndex] = useState('0-0'); // Default to first FAQ of the first category
    const [selectedCategory, setSelectedCategory] = useState(faqData[0].category); // Default to the first category

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setActiveIndex(`${faqData.findIndex(cat => cat.category === category)}-0`); // Set default open FAQ to the first one in the new category
    };

    const filteredFaqs = faqData.find(cat => cat.category === selectedCategory);

    return (
        <div className="max-w-4xl p-6 mx-auto mt-8 bg-[#F5F6F7] rounded-lg  shadow-xl">
            <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">Frequently Asked Questions</h2>

            {/* Top Menu for Service Categories */}
            <div className="grid justify-center grid-cols-2 gap-2 mb-8 md:grid-cols-4">
                {faqData.map((category, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 font-semibold duration-300  rounded ${selectedCategory === category.category ? 'bg-primary text-main' : 'bg-main hover:bg-primary hover:text-main text-white'}`}
                        onClick={() => handleCategoryChange(category.category)}
                    >
                        {category.category}
                    </button>
                ))}
            </div>

            {/* Display FAQs based on selected category */}
            <div>
                {filteredFaqs.faqs.map((faq, faqIndex) => {
                    const index = `${faqData.findIndex(cat => cat.category === selectedCategory)}-${faqIndex}`;
                    const isOpen = activeIndex === index;
                    return (
                        <div key={faqIndex} className="mb-4 duration-300 border border-gray-200 rounded-lg">
                            <button
                                className={`flex items-center justify-between w-full px-4 py-3 text-left focus:outline-none  duration-100 ${isOpen ? 'bg-main text-white' : 'bg-blue-100'} sora-400`}
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="font-medium ">{faq.question}</span>
                                {isOpen ? <FaChevronUp className="text-primary" /> : <FaChevronDown className="text-gray-600" />}
                            </button>
                            {isOpen && (
                                <div className="px-4 py-2 text-gray-700 duration-300 bg-white rounded-b-lg">
                                    <p>{faq.answer}</p>

                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FAQPage;