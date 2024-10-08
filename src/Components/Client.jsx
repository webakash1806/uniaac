import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Optional: Add effect CSS
import { clientImages1, clientImages2 } from '../Hooks/clientsLogo';

const Client = () => {
    SwiperCore.use([Autoplay, Pagination]);
    const width = window.innerWidth;

    return (
        <div className="relative shadow-md  w-full mx-auto pt-6 z-[10] bg-[#F4F6F8]">
            <h1 className='font-semibold mb-4 text-[1.2rem] text-center'>700+ Placement Partner&apos;s</h1>
            <Swiper
                slidesPerView={width / 260}
                spaceBetween={0}
                loop={true}
                autoplay={{ delay: 600, disableOnInteraction: false }}  // Continuous autoplay without delay
                speed={3500}  // Adjust speed for smooth continuous scrolling
                className="mySwiper"
            >
                {clientImages1.map((img, index) => (
                    <SwiperSlide key={index} className="flex justify-center py-6">
                        <LazyLoadImage
                            src={img}
                            alt={`Client ${index + 1}`}
                            className="w-[230px] cursor-pointer"
                            effect="blur" // Optional: Use "blur" effect on lazy load
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                slidesPerView={width / 260}
                spaceBetween={0}
                loop={true}
                autoplay={{
                    delay: 600,
                    disableOnInteraction: false,
                    reverseDirection: true // Reverse the scroll direction to left to right
                }}
                speed={3500}  // Adjust speed for smooth continuous scrolling
                className="mySwiper"
            >
                {clientImages2.map((img, index) => (
                    <SwiperSlide key={index} className="flex justify-center py-6">
                        <LazyLoadImage
                            src={img}
                            alt={`Client ${index + 1}`}
                            className="w-[230px] cursor-pointer"
                            effect="blur"  // Optional: Use "blur" effect on lazy load
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
}

export default Client;