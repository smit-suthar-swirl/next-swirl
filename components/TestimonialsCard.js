import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper";

import 'swiper/swiper-bundle.css';

export default function Testimonials() {
    return (
        <div className="laptop:container container-fluid mx-auto desktop:px-36 laptop:px-2 relative">
            <Swiper
                slidesPerView={1}
                spaceBetween={50}
                modules={[Pagination, Autoplay, Navigation]}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false, }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{
                    clickable: true,
                }}

                className="mySwiper"
            >

                <SwiperSlide>
                    <div className="rounded-32 bg-card-1 text-warm-black">
                        <div className="desktop:pt-10 px-8">
                            <p className='desktop:text-3xl laptop:text-3xl laptop-max:text-2xl tablet:text-lg text-lg font-normal pt-4 pb-8'>We used Swirl’s Shoppable Videos feature, and got an average of 2,50,000 views with 5,00,000 mins spent by viewers, and more than 7000 Buy Now clicks. Thrilled with the results!</p>
                        </div>
                        <div className="desktop:pt-40 pb-2 pl-8 text-left">
                            <p className='desktop:text-xl laptop:text-xl laptop-max:text-lg text-base font-normal'>Sandip Agarwal</p>
                        </div>
                        <div className="text-left pl-8 pb-10">
                            <p className='desktop:text-xl laptop:text-xl laptop-max:text-lg text-base font-normal'>VP, Tech at Traya Health India</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="rounded-32 bg-card-2 text-warm-black">
                        <div className="desktop:pt-10 px-8">
                            <p className='desktop:text-3xl laptop:text-3xl laptop-max:text-2xl tablet:text-lg text-lg font-normal pt-4 pb-8'>We used Swirl’s livestream shopping to boost our festive season campaigns, and revamped our website with carousels of Shoppable Videos made from social reels. People spend more time on our website now and even first-time customers are more confident to make a purchase.</p>
                        </div>
                        <div className="desktop:pt-40 pb-2 pl-8 text-left">
                            <p className='desktop:text-xl laptop:text-xl laptop-max:text-lg text-base font-normal'>Aniha Modi</p>
                        </div>
                        <div className="text-left pl-8 pb-10">
                            <p className='desktop:text-xl laptop:text-xl laptop-max:text-lg text-base font-normal'>Creative Director at Shop Mulmul</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="rounded-32 bg-card-3 text-warm-black">
                        <div className="desktop:pt-10 px-8">
                            <p className='desktop:text-3xl laptop:text-3xl laptop-max:text-2xl tablet:text-lg text-lg font-normal pt-4 pb-8'>As a home+lifestyle brand, we used Swirl’s strategy of turning our social videos into revenue earners by converting them to Shoppable Videos. We’ve seen a tremendous rise in website visitors converting to customers. Really happy with this!</p>
                        </div>
                        <div className="desktop:pt-40 pb-2 pl-8 text-left">
                            <p className='desktop:text-xl laptop:text-xl laptop-max:text-lg text-base font-normal'>Manya Modi</p>
                        </div>
                        <div className="text-left pl-8 pb-10">
                            <p className='desktop:text-xl laptop:text-xl laptop-max:text-lg text-base font-normal'>Brand and Marcomm Lead at Spread Home</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="rounded-32 bg-card-4 text-warm-black">
                        <div className="desktop:pt-10 px-8">
                            <p className='desktop:text-3xl laptop:text-3xl laptop-max:text-2xl tablet:text-lg text-lg font-normal pt-4 pb-8'>We partnered with L&#39;Oréal where O+O was integrated with OOH, to telecast our live show on a billboard. This could not have been possible without Swirl and their entire team for seamless LIVE integration between all platforms.</p>
                        </div>
                        <div className="desktop:pt-40 pb-2 pl-8 text-left">
                            <p className='desktop:text-xl laptop:text-xl laptop-max:text-lg text-base font-normal'>Maira Rehan Khan</p>
                        </div>
                        <div className="text-left pl-8 pb-10">
                            <p className='desktop:text-xl laptop:text-xl laptop-max:text-lg text-base font-normal'>Live Streaming and Campaign Manager at BaGallery, Pakistan</p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
            <div className="swiper-button-next" style={{ color: 'white' }}></div>
            <div className="swiper-button-prev" style={{ color: 'white' }}></div>
        </div>
    );
}
