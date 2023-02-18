import s from './OurPartners.module.scss'
import ukmed from '../../images/ukmed.png'
import Image from "next/image";
import wck from '../../images/wck.png'
import uklon from '../../images/uklon.png'
import novap from '../../images/novap.png'
import reckitt from '../../images/reckitt.png'
import nph from '../../images/nph.png'
import fce from '../../images/fce.png'
import liberto from '../../images/liberto.png'
import bf from '../../images/bf.png'
import limac from '../../images/limac.png'

const OurPartners = () => {
    return (
        <div className={s.container}>
            <h1>Our partners</h1>
            <div className={s.block}>
                <div className={s.gridBlock}>
                    {
                        [
                            // `${ukmed}`, 'WCK', 'uklon', 'Нова Пошта', 'reckitt',
                            // 'Nova Poshta Humanitarian', 'ФСЕ', 'Libero', 'БФ', 'Limak'
                            {link: ukmed},
                            {link: wck},
                            {link: uklon},
                            {link: novap},
                            {link: reckitt},
                            {link: nph},
                            {link: fce},
                            {link: liberto},
                            {link: bf},
                            {link: limac}
                        ].map(res => <Image src={res.link} alt="partner"/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default OurPartners;