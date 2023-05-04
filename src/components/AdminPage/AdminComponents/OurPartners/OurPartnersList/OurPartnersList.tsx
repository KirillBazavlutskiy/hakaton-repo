import {FC} from 'react';
import cn from "classnames";
import s from './OurPartnersList.module.scss';
import AdminService from "@/services/AdminService";
import {UserDTO} from "@/models/user";

interface OurPartnersListProps {
    partners: UserDTO[];
    deleteMode: boolean;
    fetchPartners: () => Promise<void>;
}

const OurPartnersList: FC<OurPartnersListProps> = ({ partners, deleteMode, fetchPartners }) => {
    return (
        <div className={cn(s.partnersList, deleteMode && s.deleteMode)}>
            {
                partners.map(partner => <div key={partner.id} className={s.partnerImgContainer}>
                    <img
                        src={`https://ss.egartsites.pp.ua/${partner.photo}`}
                        alt={partner.photo}
                        onClick={async () => {
                            if (deleteMode) await AdminService.DeleteUser(partner.id);
                            await fetchPartners();
                        }}
                    />
                </div>)
            }
        </div>
    );
};

export default OurPartnersList;
