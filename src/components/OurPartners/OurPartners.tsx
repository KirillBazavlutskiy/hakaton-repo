import { SectionCaption } from '../SectionCaption/SectionCaption';

import s from './OurPartners.module.scss';

import ukmed from '../../images/ukmed.png';
import wck from '../../images/wck.png';
import uklon from '../../images/uklon.png';
import novap from '../../images/novap.png';
import reckitt from '../../images/reckitt.png';
import nph from '../../images/nph.png';
import fce from '../../images/fce.png';
import Slider from './Slider/Slider';
import {FC} from "react";
import {OurPartners} from "@/models/text";
import { ITeam } from '@/models/data';

interface OurPartnersProps {
    OurPartners: OurPartners;
    Array: ITeam[];
}

const OurPartners:FC<OurPartnersProps> = ({OurPartners, Array}) => {
    // const links = [
    //     { link: ukmed }, { link: wck }, { link: uklon }, { link: novap }, { link: reckitt }, { link: nph }, { link: fce },
    //     { link: ukmed }, { link: wck }, { link: uklon }, { link: novap }, { link: reckitt }, { link: nph }, { link: fce },
    // ]
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <SectionCaption>
                    {OurPartners}
                </SectionCaption>
                <div className={s.block}>
                    {/* TODO: Разкоментить код ниже, когда будет зполнена база. И убрать массив выше */}
                    {/* <Slider links={Array.map(res => res.photo)} direction={'toRight'} />
                    <Slider links={Array.map(res => res.photo)} direction={'toLeft'} /> */}
                </div>
            </div>
        </div>
    );
};

export default OurPartners;