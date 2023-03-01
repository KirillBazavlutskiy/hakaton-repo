import { Swiper, SwiperSlide } from 'swiper/react';

import { IPost } from '@/components/OurLastestNews/OurLastestNews';
import s from './Post.module.css';


export function Post({ ...props }: IPost): JSX.Element {
    console.log(props);

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
                {
                    props.media_type == 'VIDEO'
                        ? <video loop autoPlay muted><source src={props.media_url} type="video/mp4" /></video>
                        : props.media_type == 'CAROUSEL_ALBUM'
                            ? <Swiper
                                grabCursor={true}
                                centeredSlides={true}
                                slidesPerView={"auto"}
                                
                                pagination={true}
                                className="mySwiper"
                            >
                                {props.children.data.map((c, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <img className={s.img} src={c.media_url} alt="" />
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                            : <img className={s.img} src={props.media_url} alt={props.caption} />

                }

                <div className={s.bottom}>
                    <span className={s.caption}>{props.caption ? props.caption : 'no description'}</span>
                </div>
            </div>
        </a>
    );
}