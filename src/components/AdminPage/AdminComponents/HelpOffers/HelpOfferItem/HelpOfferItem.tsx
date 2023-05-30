import {FC, useEffect, useState} from 'react';
import {IOfferAdmin} from "@/models/data";
import s from './HelpOfferItem.module.scss';
import PhotoSlider from "@/components/AdminPage/AdminComponents/Projects/ProjectsList/PhotoSlider/PhotoSlider";
import AdminService from "@/services/AdminService";
import {UserDTO} from "@/models/user";

interface HelpOfferItemProps {
    offer: IOfferAdmin;
}

const HelpOfferItem: FC<HelpOfferItemProps> = ({ offer }) => {

    const [publishUser, setPublishUser] = useState<UserDTO | null>(null);

    useEffect(() => {
        AdminService.FetchUser(offer.id).then((res) => setPublishUser(res));
    })

    return (
        <div className={s.container}>
            <div className={s.photoSlider}>
                <PhotoSlider images={offer.photos} />
            </div>
            <div className={s.textSpace}>
                <h1>{offer.title}</h1>
                <h2>{offer.message}</h2>
                <p>{publishUser?.email}</p>
                <p>{publishUser?.phone}</p>
            </div>
        </div>
    );
};

export default HelpOfferItem;
