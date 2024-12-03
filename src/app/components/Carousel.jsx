'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import img from '../../assets/img/1.jpg'

function Carousel() {
    return (
        <>
            <div className="flex justify-between items-center absolute inset-0 w-full h-full object-cover">
                {/* Swiper Navigation Buttons */}
                <div className='!block swiper-prev left-0'>
                    <button>Prev</button>
                </div>

                {/* Swiper Component */}
                <Swiper
                    slidesPerView={1}  // Show only one card at a time
                    centeredSlides={true}  // Center the slide
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: '.swiper-next',
                        prevEl: '.swiper-prev',
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="w-full border border-red-600"
                >
                    <SwiperSlide>
                        <Image src={img} alt="Slide 1" width={4000} height={300} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={img} alt="Slide 2" width={4000} height={300} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={img} alt="Slide 3" width={4000} height={300} />
                    </SwiperSlide>
                </Swiper>

                {/* Swiper Navigation Buttons */}
                <div className='!block swiper-next right-0'>
                    <button> next </button>
                </div>
            </div>
        </>
    );
}

export default Carousel;
