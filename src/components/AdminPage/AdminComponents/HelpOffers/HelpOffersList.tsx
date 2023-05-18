import {FC, useEffect, useState} from 'react';
import s from './HelpOffersList.module.scss';
import {IOfferAdmin} from "@/models/data";
import AdminService from "@/services/AdminService";

const HelpOffersList: FC = () => {

    const [helpOffers, setHelpOffers] = useState<IOfferAdmin[]>([]);

    const fetchOffers = async () => {
        const offers = await AdminService.GetHelpOffers(false, []);
        setHelpOffers(offers);
    }

    useEffect(() => {fetchOffers()}, [])

    return (
        <div className={s.container}>
            {
                helpOffers.map(offer => <div>
                    <h1>{offer.title}</h1>
                    <h2>{offer.message}</h2>
                </div>)
            }
        </div>
    );
};

export default HelpOffersList;
