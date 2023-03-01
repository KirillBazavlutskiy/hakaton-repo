import { FC } from 'react';
import { SectionCaption } from '../SectionCaption/SectionCaption';
import s from './WhatHasAlreadyBeenDone.module.scss';
const WhatHasAlreadyBeenDone: FC = () => {
    return (
        <div className={s.wrappercounter}>
            <div className={s.container}>
                <SectionCaption>
                    What has already been done? ✅
                </SectionCaption>
                <div className={s.content}>
                    <div className={s.info}>
                        <div className={s.collected}>
                            <h3>2 000 878 uah</h3>
                            <span>Collected</span>
                        </div>
                        <a href="#">2022 Report</a>
                    </div>
                    <div className={s.statistic}>
                        <div className={s.counter}>
                            <h3>5000+</h3>
                            <span>Fed settlers</span>
                        </div>
                        <div className={s.counter}>
                            <h3>750+</h3>
                            <span>Children got help</span>
                        </div>
                        <div className={s.counter}>
                            <h3>330+</h3>
                            <span>Warriors in gear</span>
                        </div>
                        <div className={s.counter}>
                            <h3>11</h3>
                            <span>Hospitals got help</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatHasAlreadyBeenDone;