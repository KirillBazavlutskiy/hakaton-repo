import { FC } from 'react';
import s from './WhatHasAlreadyBeenDone.module.scss';
const WhatHasAlreadyBeenDone: FC = () => {
    return (
        <div className={s.container}>
            <h1>What has already been done?</h1>
            <div className={s.info}>
                <div className={s.mainInfo}>
                    <h1>2 000 878 uah</h1>
                    <p>Collected</p>
                    <h1>2022 Report</h1>
                </div>
                <div className={s.otherInfo}>
                    <div className={s.otherInfoBlock}>
                        <h2>5000 +</h2>
                        <p>Fed settlers</p>
                    </div>
                    <div className={s.otherInfoBlock}>
                        <h2>750 +</h2>
                        <p>Children got help</p>
                    </div>
                    <div className={s.otherInfoBlock}>
                        <h2>330 +</h2>
                        <p>Warriors in gear</p>
                    </div>
                    <div className={s.otherInfoBlock}>
                        <h2>11</h2>
                        <p>Hospitals got help</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatHasAlreadyBeenDone;