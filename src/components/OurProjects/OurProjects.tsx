import {FC, useEffect, useState} from 'react';
import SwiperCore, { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react"
import { RoundedButton } from '../RoundedButton/RoundedButton';
import cn from "classnames";

import { SectionCaption } from '../SectionCaption/SectionCaption';
import { IProject } from "@/models/data";

import s from './OurProjects.module.scss';
import React from 'react';
import {OurProjects} from "@/models/text";
import UserService from "@/services/UserService";
import {useRouter} from "next/router";
import PhotoSlider from "@/components/AdminPage/AdminComponents/Projects/ProjectsList/PhotoSlider/PhotoSlider";

SwiperCore.use([EffectCoverflow, Pagination]);

interface IntroTextProps {
    OurProjects: OurProjects;
    Array: IProject[];
}

const OurProjects: FC<IntroTextProps> = ({OurProjects, Array}) => {

    const [activeTab, setActiveTab] = useState<number>(0);
    const { locale } = useRouter();

    const [tabs, setTabs] = useState<IProject[]>([{
        name: "Error of projects preload",
        description_EN: "Ops! Something went wrong...",
        description_UA: "Ой! Щось пійшло не так!",
        photos: [""],
        createdAt: new Date(),
    }]);

    useEffect(() => {
        UserService.GetProjects()
            .then((response) => setTabs(response))
            .catch((error) => console.log(error));
    }, [])

    const projectNamesMapping = () => {
        const arr: IProject[][] = projectNameArrayGrouping();

        return (
            arr.map((subArray: IProject[], i) => (
                <SwiperSlide className={s.slideWrapperGroups} key={i * 3}>
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
                    loop={false}
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
                        {
                            tabs[activeTab].photos.map((p, index) =>
                                <SwiperSlide className={s.slideWrapper} key={index}>
                                    {/*<div className={s.slideBlock} key={p} style={{ background: `url(https://ss.egartsites.pp.ua/${p})` }}></div>*/}
                                    <img src={`https://ss.egartsites.pp.ua/${p}`} alt={`https://ss.egartsites.pp.ua/${p}`}/>
                                    <div className={s.bgImage} style={{ background: `url(https://ss.egartsites.pp.ua/${p})` }}  />
                                </SwiperSlide>)
                        }
                    </Swiper>
                    <div className={s.block}>
                        {
                            tabs[activeTab][locale === 'en' ? 'description_EN' : 'description_UA']
                        }
                    </div>
                    <div className={s.donateButtonContainer}>
                        <RoundedButton className={s.donate}>
                            <a href="#B56">{OurProjects.donateButton}</a>
                        </RoundedButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProjects;
