import {FC} from 'react';
import cn from "classnames";
import s from './OurPartnersList.module.scss';
import {UserDTO} from "@/models/user";
import PartnerItem from "@/components/AdminPage/AdminComponents/OurPartners/OurPartnersList/PartnerItem/PartnerItem";

interface OurPartnersListProps {
    partners: UserDTO[];
    fetchPartners: () => Promise<void>;
}

const OurPartnersList: FC<OurPartnersListProps> = ({ partners, fetchPartners }) => {
    return (
        <div className={s.partnersList}>
            {
                partners.map(partner =>
                    <PartnerItem
                        key={partner.id}
                        partner={partner}
                        fetchPartners={fetchPartners}
                    />
                )
            }
        </div>
    );
};

export default OurPartnersList;
