import {FC, useEffect, useState} from 'react';
import s from './HelpOffersList.module.scss';
import {IOfferAdmin} from "@/models/data";
import AdminService from "@/services/AdminService";
import HelpOfferItem from "@/components/AdminPage/AdminComponents/HelpOffers/HelpOfferItem/HelpOfferItem";

const HelpOffersList: FC = () => {

    const [helpOffers, setHelpOffers] = useState<IOfferAdmin[]>([]);

    const fetchOffers = async () => {
        const offers = await AdminService.GetHelpOffers(false, []);
        setHelpOffers(offers);
    }

    useEffect(() => {fetchOffers()}, [])

    return (
        <div className={s.container}>
            <h1>Help Offers</h1>
            <div className={s.offersList}>{
                    helpOffers.map(offer => <HelpOfferItem offer={offer} />)
            }</div>
        </div>
    );
};

export default HelpOffersList;
