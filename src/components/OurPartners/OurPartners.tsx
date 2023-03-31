import { SectionCaption } from '../SectionCaption/SectionCaption';

import s from './OurPartners.module.scss';

import ukmed from '../../images/ukmed.png';
import Image from "next/image";
import wck from '../../images/wck.png';
import uklon from '../../images/uklon.png';
import novap from '../../images/novap.png';
import reckitt from '../../images/reckitt.png';
import nph from '../../images/nph.png';
import fce from '../../images/fce.png';
import liberto from '../../images/liberto.png';
import bf from '../../images/bf.png';
import limac from '../../images/limac.png';
import Slider from './Slider/Slider';
import {FC} from "react";
import {OurPartners} from "@/models/text";

interface OurPartnersProps {
    OurPartners: OurPartners;
}

const OurPartners:FC<OurPartnersProps> = ({OurPartners}) => {
    const links = [
        { link: ukmed }, { link: wck }, { link: uklon }, { link: novap }, { link: reckitt }, { link: nph }, { link: fce },
        { link: ukmed }, { link: wck }, { link: uklon }, { link: novap }, { link: reckitt }, { link: nph }, { link: fce },
    ]
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <SectionCaption>
                    {OurPartners}
                </SectionCaption>
                <div className={s.block}>
                    <Slider links={links} direction={'toRight'} />
                    <Slider links={links} direction={'toLeft'} />
                </div>
            </div>
        </div>
    );
};

export default OurPartners;