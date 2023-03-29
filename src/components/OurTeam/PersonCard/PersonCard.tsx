import { FC } from 'react';
import s from './PersonCard.module.scss';
import Image, {StaticImageData} from "next/image";

interface PersonCardProps {
    title: string;
    photoSrc: StaticImageData;
}

const PersonCard: FC<PersonCardProps> = ({ title, photoSrc }) => {
    return (
        <div className={s.cardContainer}>
            <div className={s.personImg}>
                <Image src={photoSrc} alt={title} />
                <img src="" alt=""/>
            </div>
            <p>{title}</p>
        </div>
    );
};

export default PersonCard;