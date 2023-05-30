import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import s from './PhotoSlider.module.scss';

SwiperCore.use([Autoplay]);

type PhotoSliderProps = {
    images: string[];
};

const PhotoSlider: React.FC<PhotoSliderProps> = ({ images }) => {
    return (
        <div className={s.sliderContainer}>
            <Swiper
                centeredSlides={true}
                slidesPerView={"auto"}
                className={s.swiper}
            >
                {images.map((image) => {
                    return (
                        <SwiperSlide key={image} className={s.slideWrapper}>
                            {/*<div className={s.slideBlock} key={image} style={{ background: `url(https://ss.egartsites.pp.ua/${image})` }}></div>*/}
                            <img src={'https://ss.egartsites.pp.ua/' + image} alt={image} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default PhotoSlider;

