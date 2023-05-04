import { StaticImageData } from 'next/image';
import s from './Slider.module.scss';
import Image from "next/image";
import cn from "classnames";


interface SliderProps {
    links: Link[],
    direction: 'toRight' | 'toLeft',
    className?: string,
}

interface Link {
    link: StaticImageData
}

const Slider = ({links, direction, className}: SliderProps) => {
    return (
        <div className={s.slider}>
            <div className={
                cn(s.slide_track, {
                    [s.toRight]: direction == 'toRight',
                    [s.toLeft]: direction == 'toLeft'
                })}>
                {
                    links.map(el => (
                        <div className={s.slide}>
                            <Image src={el.link} alt="partner" />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Slider;