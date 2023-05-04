import {FC, useEffect, useState} from 'react';
import AdminService from "@/services/AdminService";
import s from "./OurPartners.module.scss";
import {UserDTO} from "@/models/user";
import OurPartnersList from "@/components/AdminPage/AdminComponents/OurPartners/OurPartnersList/OurPartnersList";
import OurPartnersAdd from "@/components/AdminPage/AdminComponents/OurPartners/OurPartnersAdd/OurPartnersAdd";

const OurPartners: FC = () => {

    const fetchPartners = async () => {
        const partners = await AdminService.FetchUsers('Partner');
        setPartners(partners);
    }

    const [partners, setPartners] = useState<UserDTO[]>([]);
    const [deleteMode, setDeleteMode] = useState<boolean>(false);

    useEffect(() => {
        fetchPartners();
    }, [])

    return (
        <div className={s.container}>
            <h1>Our Partners</h1>
            <OurPartnersList partners={partners} deleteMode={deleteMode} fetchPartners={fetchPartners} />
            <OurPartnersAdd setDeleteMode={setDeleteMode} fetchPartners={fetchPartners} />
        </div>
    );
};

export default OurPartners;
