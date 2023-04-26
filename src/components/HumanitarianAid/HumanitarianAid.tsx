import { FC, useState } from 'react';

import { SectionCaption } from '../SectionCaption/SectionCaption';

import s from './HumanitarianAid.module.scss';
import {IWantToHelpWithHumanitarianAid} from "@/models/text";
import HumanitarianAidForm from "@/components/HumanitarianAid/HumanitarianAidForm/HumanitarianAidForm";
import NeedToLogin from "@/components/HumanitarianAid/NeedToLogin/NeedToLogin";

interface HumanitarianAidProps {
    HumanitarianAid: IWantToHelpWithHumanitarianAid;
}

const HumanitarianAid: FC<HumanitarianAidProps> = ({HumanitarianAid}) => {

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.gradient}></div>
                <div className={s.inner}>
                    <SectionCaption>
                        {HumanitarianAid.main}
                    </SectionCaption>
                    <div className={s.blocks}>
                        <div className={s.infoSide}>
                            <p>{HumanitarianAid.fillTheForm}</p>
                            <a href="https://docs.google.com/document/d/15VglwvQL6Xn1fCCRMNMvp6wfashimn0D/edit">{HumanitarianAid.listOfNeeds}</a>
                        </div>
                        <HumanitarianAidForm HumanitarianAidForm={HumanitarianAid} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HumanitarianAid;
