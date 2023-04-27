import { FC, useEffect, useState } from 'react';
import SwiperCore, { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react"
import { RoundedButton } from '../RoundedButton/RoundedButton';
import cn from "classnames";

import { SectionCaption } from '../SectionCaption/SectionCaption';
import AdminService from "@/services/AdminService";
import { IProject } from "@/models/data";

import s from './OurProjects.module.scss';
import React from 'react';
import {OurProjects} from "@/models/text";
import {toFormData} from "axios";

SwiperCore.use([EffectCoverflow, Pagination]);

interface IntroTextProps {
    OurProjects: OurProjects;
    Array: IProject[];
}

const OurProjects: FC<IntroTextProps> = ({OurProjects, Array}) => {

    const [activeTab, setActiveTab] = useState<number>(0);

    const [tabs, setTabs] = useState<IProject[]>([{
        name: "Error of projects preload",
        description_EN: "Ops! Something went wrong...",
        description_UA: "Ой! Щось пійшло не так!",
        photos: [""],
        createdAt: "",
        createdAt: new Date(),
    }]);

    useEffect(() => {
        AdminService.GetProjects()
            .then((response) => setTabs(response))
            .catch((error) => console.log(error));
    }, [])

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

    const projectsGroupMapping = (arr: IProject[], index: number) => {
        return arr.map((el: IProject, i) => {
            if (!el?.name) {
                return null;
            }

            const tabClasses = cn(s.tab, { [s.active]: activeTab === i + index * 3 });

            const handleClick = () => setActiveTab(i + index * 3);

            return (
                <React.Fragment key={i + index * 3}>
                    {i !== 0 && <span>•</span>}
                    <div className={tabClasses} onClick={handleClick}>
                        {el.name}
                    </div>
                </React.Fragment>
            );
        });
    };

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <SectionCaption>
                    {OurProjects.main}
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
                            <div className={s.slideBlock} style={{ background: `url(${tabs[activeTab]?.photos})` }}></div>
                        </SwiperSlide>
                    </Swiper>
                    <div className={s.block}>
                        {
                            tabs[activeTab]?.description_EN
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
                                    <a href="#B56">{OurProjects.donateButton}</a>
                                </RoundedButton>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default OurProjects;
