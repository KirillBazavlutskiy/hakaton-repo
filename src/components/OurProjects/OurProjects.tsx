import {FC, useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RoundedButton } from '../RoundedButton/RoundedButton';

import { SectionCaption } from '../SectionCaption/SectionCaption';
import s from './OurProjects.module.scss';
import AdminService, {IProject} from "@/services/AdminService";

const OurProjects: FC = () => {

    const [activeTab, setActiveTab] = useState<number>(0);
    //State for scroll position in bar
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    //Variable == current scroll position
    let scrollValue = scrollPosition;

    const [tabs, setTabs] = useState<IProject[]>([]);

    useEffect(() => {
        AdminService.GetProjects()
            .then((responce) => setTabs(responce))
            .catch((error) => console.log(error));
    },[])

    const scrollNameProjectsFunction = () => {
        let buttons:any = [];

        if (scrollValue === 0) {
            tabs.slice(scrollValue, scrollValue+3).forEach((res, i) => {
                buttons.push(
                    <button className={activeTab === i ? s.active : s.notActive} onClick={() => setActiveTab(i)} key={i}>
                        {res.name}
                    </button>
                );

                if (i < tabs.length - 1) {
                    buttons.push(<span key={`sep-${i}`}>·</span>);
                }
            });
        }
        else {
            tabs.slice(scrollValue*3, (scrollValue*3)+3).forEach((res, i) => {
                buttons.push(
                    <button className={activeTab === i ? s.active : s.notActive} onClick={() => setActiveTab(i)} key={i}>
                        {res.name}
                    </button>
                );

                if (i < tabs.length - 1) {
                    buttons.push(<span key={`sep-${i}`}>·</span>);
                }
            });
        }

        return buttons;
    }

    const scrollImageProjectsFunction = () => {
        let slides:any = [];

        if (scrollValue === 0) {
            tabs.slice(scrollValue, scrollValue+3).forEach((el, i) => {
                slides.push(
                    <SwiperSlide className={s.slideWrapper} key={i}>
                        <div className={s.slideBlock} style={{ background: `url(${el.imageUrl})` }}></div>
                    </SwiperSlide>
                );
            });
        }
        else {
            tabs.slice(scrollValue*3, (scrollValue*3)+3).forEach((el, i) => {
                slides.push(
                    <SwiperSlide className={s.slideWrapper} key={i}>
                        <div className={s.slideBlock} style={{ background: `url(${el.imageUrl})` }}></div>
                    </SwiperSlide>
                );
            });
        }

        return slides;
    }

    const scrollDescriptionProjectsFunction = () => {
        let paragraphs:any = [];

        if (scrollValue === 0) {
            tabs.slice(scrollValue, scrollValue+3).forEach((n, i) => {
                paragraphs.push(
                    <p
                        style={{ display: activeTab === i ? 'block' : 'none' }}
                        key={i}
                    >
                        {n.description_UA}
                    </p>
                );
            });
        }
        else {
            tabs.slice(scrollValue*3, (scrollValue*3)+3).forEach((n, i) => {
                paragraphs.push(
                    <p
                        style={{ display: activeTab === i ? 'block' : 'none' }}
                        key={i}
                    >
                        {n.description_UA}
                    </p>
                );
            });
        }

        return paragraphs;
    }



    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <SectionCaption>
                    Our Projects
                </SectionCaption>
                <div className={s.bar}>
                    <button onClick={() => scrollValue === 0 ? setScrollPosition((tabs.length/3)-1) : setScrollPosition(--scrollValue)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </button>
                    <div className={s.scrolled}>
                        {scrollNameProjectsFunction()}
                    </div>
                    <button onClick={() => scrollValue === (tabs.length/3)-1 ? setScrollPosition(0) : setScrollPosition(++scrollValue)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </button>
                </div>
                <div className={s.content}>
                    <Swiper
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}

                        pagination={true}
                        className={s.swiper}
                    >
                        {scrollImageProjectsFunction()}
                    </Swiper>
                    <div className={s.block}>
                        {
                            scrollDescriptionProjectsFunction()
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