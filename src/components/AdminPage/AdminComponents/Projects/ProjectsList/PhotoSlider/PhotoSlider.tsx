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
                autoplay={{
                    delay: 3000,
                }}
                className={s.swiper}
            >
                {images.map((image) => (
                    <SwiperSlide key={image} className={s.swiperSlide}>
                        <img src={'https://ss.egartsites.pp.ua/' + image} alt={image} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default PhotoSlider;

