import { FC, useEffect, useState } from "react";
import Counter from '../Counter/Counter';
import { SectionCaption } from '../SectionCaption/SectionCaption';
import s from './WhatHasAlreadyBeenDone.module.scss';
import {WhatHasAlreadyBeenDone} from "@/models/text";
import {Statistic} from "@/models/user";
import axios from "axios";

interface WhatHasAlreadyBeenDoneProps {
    WhatHasAlreadyBeenDone: WhatHasAlreadyBeenDone;
    Statistic: Statistic;
}

const WhatHasAlreadyBeenDone: FC<WhatHasAlreadyBeenDoneProps> = ({WhatHasAlreadyBeenDone, Statistic}) => {
    const [heightToAnimate, setHeightToAnimate] = useState<number>(1000);
    const [currentPageYOffset, setCurrentPageYOffset] = useState<number>(0);

    useEffect(() => {
        let heightSectionB1 = document.getElementById("B1")?.offsetHeight;
        let heightSectionB2 = document.getElementById("B2")?.offsetHeight;
        let heightSectionB3 = document.getElementById("B3")?.offsetHeight;

        let height = (heightSectionB1 && heightSectionB2 && heightSectionB3) ? heightSectionB1 + heightSectionB2 + heightSectionB3 + 90 - window.innerHeight : 0;

        setHeightToAnimate(height);
    }, []);

    useEffect(() => {
        window.onscroll = () => {
            setCurrentPageYOffset(() => window.pageYOffset);
        };
    })

    return (
        <div className={s.wrappercounter}>
            <div className={s.container}>
                <SectionCaption>
                    {WhatHasAlreadyBeenDone}
                </SectionCaption>
                <div className={s.content}>
                    <div className={s.info}>
                        <div className={s.collected}>
                            <h3>{currentPageYOffset >= heightToAnimate ? <Counter val={+Statistic.moneyCollected.replaceAll(" ", "")} /> : <>0</>}&nbsp;uah</h3>
                            <span>Collected</span>
                        </div>
                        <a href="#" className={s.report}>
                            2022&nbsp;Report
                            <div className={s.markedLine}></div>
                            <div className={s.bluredLine}></div>
                        </a>
                    </div>
                    <div className={s.statistic}>
                        <div className={s.counter}>
                            <h3>{Statistic.residentsOfDnipro}</h3>
                            <span>residents of Dnipro received training in first aid</span>
                        </div>
                        <div className={s.counter}>
                            <h3>{Statistic.MedicalFacilities}</h3>
                            <span>medical facilities received assistance</span>
                        </div>
                        <div className={s.counter}>
                            <h3>{Statistic.MedicalFacilities}</h3>
                            <span>medical facilities received assistance</span>
                        </div>
                        <div className={s.counter}>
                            <h3>{Statistic.ChildrenReceivedAssistance}</h3>
                            <span>children received assistance</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatHasAlreadyBeenDone;
