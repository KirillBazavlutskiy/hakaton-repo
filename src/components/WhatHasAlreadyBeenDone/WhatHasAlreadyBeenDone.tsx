import { FC, useEffect, useState } from "react";
import Counter from '../Counter/Counter';
import { SectionCaption } from '../SectionCaption/SectionCaption';
import s from './WhatHasAlreadyBeenDone.module.scss';
import {WhatHasAlreadyBeenDone} from "@/models/text";

interface WhatHasAlreadyBeenDoneProps {
    WhatHasAlreadyBeenDone: WhatHasAlreadyBeenDone;
}

const WhatHasAlreadyBeenDone: FC<WhatHasAlreadyBeenDoneProps> = (WhatHasAlreadyBeenDone) => {
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
        }
    })

    return (
        <div className={s.wrappercounter}>
            <div className={s.container}>
                <SectionCaption>
                    {WhatHasAlreadyBeenDone.WhatHasAlreadyBeenDone}
                </SectionCaption>
                <div className={s.content}>
                    <div className={s.info}>
                        <div className={s.collected}>
                            <h3>{currentPageYOffset >= heightToAnimate ? <Counter val={2000878} /> : <>0</>}&nbsp;uah</h3>
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
                            <h3>{currentPageYOffset >= heightToAnimate ? <Counter val={5000} /> : <>0</>}</h3>
                            <span>Fed settlers</span>
                        </div>
                        <div className={s.counter}>
                            <h3>{currentPageYOffset >= heightToAnimate ? <Counter val={750} /> : <>0</>}</h3>
                            <span>Children got help</span>
                        </div>
                        <div className={s.counter}>
                            <h3>{currentPageYOffset >= heightToAnimate ? <Counter val={330} /> : <>0</>}</h3>
                            <span>Warriors in gear</span>
                        </div>
                        <div className={s.counter}>
                            <h3>{currentPageYOffset >= heightToAnimate ? <Counter val={11} /> : <>0</>}</h3>
                            <span>Hospitals got help</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatHasAlreadyBeenDone;