import { FC, useEffect, useState } from 'react';
import SwiperCore, { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react"
import { RoundedButton } from '../RoundedButton/RoundedButton';
import cn from "classnames";

import { SectionCaption } from '../SectionCaption/SectionCaption';
import AdminService from "@/services/AdminService";
import { IProject } from "@/models";

import s from './OurProjects.module.scss';

SwiperCore.use([EffectCoverflow, Pagination]);

const OurProjects: FC = () => {

    const [activeTab, setActiveTab] = useState<number>(0);

    const [tabs, setTabs] = useState<IProject[]>([
        {
            id: "1",
            name: "project 1",
            description_EN: "description_en1",
            description_UA: "description_ua1",
            imageUrl: "url"
        },
        {
            id: "2",
            name: "project 2",
            description_EN: "description_en2",
            description_UA: "description_ua2",
            imageUrl: "url"
        },
        {
            id: "3",
            name: "project 3",
            description_EN: "description_en3",
            description_UA: "description_ua3",
            imageUrl: "url"
        },
        {
            id: "4",
            name: "project 4",
            description_EN: "description_en4",
            description_UA: "description_ua4",
            imageUrl: "url"
        },
        {
            id: "5",
            name: "project 5",
            description_EN: "description_en5",
            description_UA: "description_ua5",
            imageUrl: "url"
        },
        {
            id: "6",
            name: "project 6",
            description_EN: "description_en6",
            description_UA: "description_ua6",
            imageUrl: "url"
        },
        {
            id: "7",
            name: "project 7",
            description_EN: "description_en7",
            description_UA: "description_ua7",
            imageUrl: "url"
        },
        {
            id: "8",
            name: "project 8",
            description_EN: "description_en8",
            description_UA: "description_ua8",
            imageUrl: "url"
        },
        {
            id: "9",
            name: "project 9",
            description_EN: "description_en9",
            description_UA: "description_ua9",
            imageUrl: "url"
        },
        {
            id: "10",
            name: "project 10",
            description_EN: "description_en10",
            description_UA: "description_ua10",
            imageUrl: "url"
        }
    ]);

    // useEffect(() => {
    //     AdminService.GetProjects()
    //         .then((responce) => setTabs(responce))
    //         .catch((error) => console.log(error));
    // }, [])

    const projectNameArrayGrouping = (): IProject[][] => {
        const arr: IProject[][] = [];
        for (let i = 0; i < tabs.length / 3; i++) {
            arr.push([]);
            for (let j = i * 3; j < i * 3 + 3; j++) {
                arr[i].push(tabs[j]);
            }
        }
        return arr;
    }

    const projectNamesMapping = () => {
        const arr: IProject[][] = projectNameArrayGrouping();

        return (
            arr.map((subArray: IProject[], i) => (
                <SwiperSlide className={s.slideWrapper} key={i}>
                    <div className={s.bar}>
                        <div className={s.scrolled}>
                            {projectsGroupMapping(subArray, i)}
                        </div>
                    </div>
                </SwiperSlide>)
            )
        )
    }

    const projectsGroupMapping = (arr: IProject[], index: number) => {
        return (
            arr.map((el: IProject, i) => (
                el?.name &&
                <>
                    {i !== 0 && <span>•</span>}
                    <div className={cn(s.tab, {[s.active]: activeTab === i + index * 3})} onClick={() => setActiveTab(i + index * 3)} key={i + index * 3}>
                        {el.name}
                    </div>
                </>
            ))
        )
    }

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <SectionCaption>
                    Our Projects
                </SectionCaption>
                <Swiper
                    modules={[Navigation]}
                    loop={true}
                    effect={"coverflow"}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: -200,
                        depth: 200,
                        modifier: 2,
                        slideShadows: false,
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}

                    className={s.swiper}
                >
                    <div className="swiper-button-next"></div>
                    {projectNamesMapping()}
                    <div className="swiper-button-prev"></div>
                </Swiper>
                <div className={s.content}>
                    <Swiper
                        modules={[Autoplay]}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        autoplay={{ delay: 4000 }}

                        className={s.swiper}
                    >
                        <SwiperSlide className={s.slideWrapper}>
                            <div className={s.slideBlock} style={{ background: "url(https://static.dw.com/image/57844523_605.jpg)" }}></div>
                        </SwiperSlide>
                        <SwiperSlide className={s.slideWrapper}>
                            <div className={s.slideBlock} style={{ background: "url(https://nung.edu.ua/sites/default/files/2022-03/viber_2022-03-09_18-02-07-497.jpg)" }}></div>
                        </SwiperSlide>
                        <SwiperSlide className={s.slideWrapper}>
                            <div className={s.slideBlock} style={{ background: "url(https://aam.com.ua/wp-content/uploads/56n.jpg)" }}></div>
                        </SwiperSlide>
                    </Swiper>
                    <div className={s.block}>
                        {
                            tabs[activeTab].description_EN
                        }
                    </div>
                    {
                        tabs.map((el, i) => (
                            <div
                                className={s.statistic}
                                style={{ display: activeTab === i ? 'block' : 'none' }}
                                key={i}
                            >
                                <RoundedButton className={s.donate}>
                                    <a href="#B56">Donate</a>
                                </RoundedButton>
                                {/*<div className={s.wrapper}>*/}
                                {/*    {*/}
                                {/*        el.statistic.map((el, i) => (*/}
                                {/*            <div*/}
                                {/*                className={s.counter}*/}
                                {/*            >*/}
                                {/*                <h3>{el.value}</h3>*/}
                                {/*                <span>{el.key}</span>*/}
                                {/*            </div>*/}
                                {/*        ))*/}
                                {/*    }*/}
                                {/*</div>*/}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default OurProjects;