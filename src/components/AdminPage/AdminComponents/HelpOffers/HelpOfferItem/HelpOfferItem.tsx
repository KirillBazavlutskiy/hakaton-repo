import {FC, useEffect, useState} from 'react';
import {IOfferAdmin} from "@/models/data";
import s from './HelpOfferItem.module.scss';
import PhotoSlider from "@/components/AdminPage/AdminComponents/Projects/ProjectsList/PhotoSlider/PhotoSlider";
import AdminService from "@/services/AdminService";
import {UserDTO} from "@/models/user";
import printJS from "print-js";
import Button from "@/components/AdminPage/AdminComponents/AdminUI/Button/Button";

interface HelpOfferItemProps {
    offer: IOfferAdmin;
}

const HelpOfferItem: FC<HelpOfferItemProps> = ({ offer }) => {

    const [publishUser, setPublishUser] = useState<UserDTO | null>(null);

    useEffect(() => {
        AdminService.FetchUser(offer.id).then((res) => setPublishUser(res));
    })

    const handlePrint = async () => {
        if (typeof window !== 'undefined') {
            const printJS = await import('print-js');
            printJS.default(`offer-${offer.id}`, 'html');
        }
    };

    return (
        <div className={s.container}>
            <div className={s.offerForm} id={`offer-${offer.id}`}>
                <div className={s.photoSlider}>
                    <PhotoSlider images={offer.photos} />
                </div>
                <div className={s.textSpace}>
                    <h2>{offer.title}</h2>
                    <h3>{offer.message}</h3>
                    {
                        publishUser?.email ?
                            <a href={`mailto:${publishUser?.email}`}>{publishUser?.email}</a> :
                            <p>E-mail not found</p>
                    }
                    {
                        publishUser?.phone ?
                            <a href={`tel:${publishUser?.phone}`}>{publishUser?.phone}</a> :
                            <p>Phone number not found</p>
                    }
                </div>
            </div>
            <div className={s.btn}>
                <Button color={'blue'} size={'small'} onClick={handlePrint}>Print</Button>
            </div>
        </div>
    );
};

export default HelpOfferItem;
