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

const OurPartners = () => {
    const links = [
        { link: ukmed }, { link: wck }, { link: uklon }, { link: novap }, { link: reckitt }, { link: nph }, { link: fce },
        { link: ukmed }, { link: wck }, { link: uklon }, { link: novap }, { link: reckitt }, { link: nph }, { link: fce },
    ]
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <SectionCaption>
                    Our partners
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