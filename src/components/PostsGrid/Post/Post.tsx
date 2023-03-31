import { Swiper, SwiperSlide } from 'swiper/react';

import { IPost } from '@/models/data';
import s from './Post.module.scss';


export function Post({ ...props }: IPost): JSX.Element {
    const contentMapping = () => {
        if (props.media_type == 'CAROUSEL_ALBUM') {
            return (
                <Swiper
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}

                    pagination={true}
                    className="mySwiper"
                >
                    {props.children.data.map((c, i) =>
                        <SwiperSlide key={i}>
                            <img src={c.media_url} alt="" />
                        </SwiperSlide>
                    )}
                </Swiper>
            )
        }

        return props.media_type == 'VIDEO'
            ? <video loop autoPlay muted><source src={props.media_url} type="video/mp4" /></video>
            : <img src={props.media_url} alt={props.caption} />
    }

    return (
        <a className={s.container} href={props.permalink} target='_blank'>
            <div className={s.block}>
                <div className={s.top}>
                    <div className={s.avatarStroke}>
                        <div className={s.avatar}>
                        </div>
                    </div>
                    <span className={s.username}>{props.username}</span>
                </div>
                <div className={s.contentWrapper}>
                    {contentMapping()}
                </div>
                <div className={s.bottom}>
                    <span className={s.caption}>{props.caption ? props.caption : 'no description'}</span>
                </div>
            </div>
        </a>
    );
}