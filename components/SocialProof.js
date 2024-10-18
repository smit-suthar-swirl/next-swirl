import { useEffect, useState } from 'react'
import React from 'react'
import Alehdet from "../public/assets/images/icons/social-proofs/A_lehdet.svg"
import DNA from "../public/assets/images/icons/social-proofs/DNA.svg"
import HealthGlow from "../public/assets/images/icons/social-proofs/Health_Glow.svg"
import Pantaloons from "../public/assets/images/icons/social-proofs/Pantaloons.svg"
import Reima from "../public/assets/images/icons/social-proofs/Reima.svg"
import Telia from "../public/assets/images/icons/social-proofs/Telia.svg"
import Traya from "../public/assets/images/icons/social-proofs/Traya.svg"
import Vivo from "../public/assets/images/icons/social-proofs/Vivo.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper";


function SocialProof() {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    return (
        <>
            {domLoaded ? (
                <Swiper slidesPerView={1}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 3,
                            spaceBetween: 100,
                        },
                        480: {
                            slidesPerView: 3,
                            spaceBetween: 100,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 25,
                        },
                        1440: {
                            slidesPerView: 5,
                            spaceBetween: 25,
                        }
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide><HealthGlow /></SwiperSlide>
                    <SwiperSlide><DNA /></SwiperSlide>
                    <SwiperSlide><Vivo /></SwiperSlide>
                    <SwiperSlide><Reima /></SwiperSlide>
                    <SwiperSlide><Telia /></SwiperSlide>
                    <SwiperSlide><Pantaloons /></SwiperSlide>
                    <SwiperSlide><Traya /></SwiperSlide>
                    <SwiperSlide><Alehdet /></SwiperSlide>
                </Swiper>
            ) : null
            }
        </>
    );
}

export default SocialProof