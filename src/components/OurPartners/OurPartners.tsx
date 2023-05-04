import { SectionCaption } from '../SectionCaption/SectionCaption';

import s from './OurPartners.module.scss';

import {FC} from "react";
import {OurPartners} from "@/models/text";
import { ITeam } from '@/models/data';

interface OurPartnersProps {
    OurPartners: OurPartners;
    Array: ITeam[];
}

const OurPartners:FC<OurPartnersProps> = ({OurPartners, Array}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <SectionCaption>
                    {OurPartners}
                </SectionCaption>
                <div className={s.block}>
                    {
                        Array.map(partner => <div key={partner.fullName} className={s.partnerImgContainer}>
                            <img
                                src={`https://ss.egartsites.pp.ua/${partner.photo}`}
                                alt={partner.photo}
                            />
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default OurPartners;
