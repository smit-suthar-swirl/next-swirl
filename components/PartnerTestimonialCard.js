import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper";

export default function Testimonials() {
    return (
        <div className="laptop:container container-fluid mx-auto">
            <Swiper slidesPerView={1} spaceBetween={50} className="">
                <SwiperSlide>
                    <div className="rounded-32 bg-card-5 text-warm-black">
                        <div className="desktop:pt-10 px-8">
                            <p className='desktop:text-3xl laptop:text-xl font-normal pt-4 pb-8 text-left'>
                                “As channel partner, I have seen the team handle the largest brands seamlessly. Recently Swirl managed live commerce for an enterprise client with 25k+ concurrent viewers and over 250k+ viewers. Great going, guys!”                            </p>
                        </div>
                        <div className="desktop:pt-40 pb-2 pl-8 text-left">
                            <p className='desktop:text-xl laptop:text-lg text-sm font-normal'>Aleksis Pillai </p>
                        </div>
                        <div className="text-left pl-8 pb-10">
                            <p className='desktop:text-xl laptop:text-lg text-sm font-normal'>Chief Executive Officer at Dust Tree</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );

}
