import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';


const AlumniSection = () => {
    const [slidesPerView, setSlidesPerView] = useState(1);

    useEffect(() => {
        const updateSlidesPerView = () => {
            const viewportWidth = window.innerWidth;
            const cardWidth = 18 * 16; // 20rem in pixels (1rem = 16px, adjust as needed)
            const numSlides = Math.floor(viewportWidth / cardWidth);
            setSlidesPerView(numSlides || 1); // Ensure at least 1 slide is visible
        };

        updateSlidesPerView();
        window.addEventListener('resize', updateSlidesPerView);

        return () => {
            window.removeEventListener('resize', updateSlidesPerView);
        };
    }, []);

    const services = [
        {
            id: 1,
            img: "https://skillcircle.in/wp-content/uploads/2024/08/skillcircle-student-placed-image-19.webp"
        },
        {
            id: 2,
            img: "https://skillcircle.in/wp-content/uploads/2024/08/skillcircle-student-placed-image-21.webp"
        },
        {
            id: 3,
            img: "https://skillcircle.in/wp-content/uploads/2024/08/skillcircle-student-placed-image-20.webp"
        },
        {
            id: 4,
            img: "https://skillcircle.in/wp-content/uploads/2024/08/skillcircle-student-placed-image-18.webp"
        },
        {
            id: 5,
            img: "https://skillcircle.in/wp-content/uploads/2024/08/skillcircle-student-placed-image-13.webp"
        }
    ];

    return (
        <div className="sm:px-6 px-4 py-20 bg-[#F5F6F7] flex flex-col items-center">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-semibold text-gray-800 md:text-4xl">
                    UNIAC Alumni Work At
                </h1>

            </div>

            {/* Slider Section */}
            <div className="relative w-full max-w-[84rem] mx-auto flex items-center justify-center">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    loop={true}
                    speed={1500}
                    className="flex items-center justify-center w-full gap-6 mx-auto"
                    slidesPerView={slidesPerView > 4 ? 4 : slidesPerView}
                    spaceBetween={1} // Reduce the gap between slides

                >
                    {services.concat(services).map((service, ind) => (
                        <SwiperSlide key={ind + 1} className="flex justify-center px-2">
                            <>
                                <img className='w-[370px] rounded-lg' src={service.img} alt="" />
                            </>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default AlumniSection;