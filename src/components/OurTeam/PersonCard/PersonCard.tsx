import { FC } from 'react';
import s from './PersonCard.module.scss';

interface PersonCardProps {
    title: string;
    photoSrc: string;
}

const PersonCard: FC<PersonCardProps> = ({ title, photoSrc }) => {
    return (
        <div className={s.cardContainer}>
            <div className={s.personImg}>
                <img src={photoSrc} alt={title} />
            </div>
            <p>{title}</p>
        </div>
    );
};

export default PersonCard;
