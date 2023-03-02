import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RoundedButton } from '../RoundedButton/RoundedButton';

import { SectionCaption } from '../SectionCaption/SectionCaption';
import s from './OurProjects.module.scss';

const OurProjects: FC = () => {

    const [activeTab, setActiveTab] = useState<number>(0);
    //State for scroll position in bar
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    //Variable == current scroll position
    let scrollValue = scrollPosition;

    const tabs = [
        { name: 'Stay Sage Kids', text: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", url: "https://static.dw.com/image/57844523_605.jpg", statistic: [{ key: "Fed settlers", value: 5000 }, { key: "Fed settlers", value: 5000 }, { key: "Fed settlers", value: 5000 }] },
        { name: 'Medical Aid', text: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", url: "https://nung.edu.ua/sites/default/files/2022-03/viber_2022-03-09_18-02-07-497.jpg", statistic: [{ key: "Fed settlers", value: 4000 }, { key: "Fed settlers", value: 4000 }, { key: "Fed settlers", value: 4000 }] },
        { name: 'Humanitarian Aid Support', text: "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", url: "https://aam.com.ua/wp-content/uploads/56n.jpg", statistic: [{ key: "Fed settlers", value: 3000 }, { key: "Fed settlers", value: 3000 }, { key: "Fed settlers", value: 3000 }] }
    ]

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <SectionCaption>
                    Our Projects
                </SectionCaption>
                <div className={s.bar}>
                    <div className={s.scrolled}>
                        {
                            tabs.map((n, i) => (
                                <>
                                    <button
                                        className={activeTab === i ? s.active : s.notActive} onClick={() => setActiveTab(i)} key={i}
                                    >
                                        {n.name}
                                    </button>
                                    {i < tabs.length - 1 ? <span>·</span> : <></>}
                                </>
                            ))
                        }
                    </div>
                    <div className={s.scrollBtn}>
                        <button onClick={() => setScrollPosition(--scrollValue)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"/>
                            </svg>
                        </button>
                        <div className={s.points}>
                            <button className={scrollPosition === 0 ? s.checked : s.notChecked} onClick={() => setScrollPosition(0)}>.</button>
                            <button className={scrollPosition === 1 ? s.checked : s.notChecked} onClick={() => setScrollPosition(1)}>.</button>
                            <button className={scrollPosition === 2 ? s.checked : s.notChecked} onClick={() => setScrollPosition(2)}>.</button>
                        </div>
                        <button onClick={() => setScrollPosition(++scrollValue)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={s.content}>
                    <Swiper
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}

                        pagination={true}
                        className={s.swiper}
                    >
                        {tabs.map((el, i) => {
                            return (
                                <SwiperSlide
                                    className={s.slideWrapper}
                                    key={i}
                                >
                                    <div
                                        className={s.slideBlock}
                                        style={{ background: `url(${el.url})` }}
                                    >
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                    <div className={s.block}>
                        {
                            tabs.map((n, i) => (
                                <p
                                    style={{ display: activeTab === i ? 'block' : 'none' }}
                                    key={i}
                                >
                                    {n.text}
                                </p>
                            ))
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
                                <div className={s.wrapper}>
                                    {
                                        el.statistic.map((el, i) => (
                                            <div
                                                className={s.counter}
                                            >
                                                <h3>{el.value}</h3>
                                                <span>{el.key}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default OurProjects;