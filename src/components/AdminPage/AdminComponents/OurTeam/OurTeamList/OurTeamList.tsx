import {UserDTO} from "@/models/user";
import {FC} from 'react';
import cn from "classnames";
import s from "./OurTeamList.module.scss";
import AdminService from "@/services/AdminService";

interface OurTeamListProps {
    team: UserDTO[];
    deleteMode: boolean;
    fetchTeam: () => Promise<void>;
}

const OurTeamList: FC<OurTeamListProps> = ({ team, deleteMode, fetchTeam }) => {
    return (
        <div className={cn(s.teamList, deleteMode && s.deleteMode)}>
            {
                team.map(teammate => <div key={teammate.id} className={s.teammateContainer}>
                    <div className={s.imageContainer}>
                        <img
                            src={`https://ss.egartsites.pp.ua/${teammate.photo}`}
                            alt={teammate.photo}
                            onClick={async () => {
                                if (deleteMode) await AdminService.DeleteUser(teammate.id);
                                await fetchTeam();
                            }}
                        />
                    </div>
                    <p>{teammate.fullName}</p>
                </div>)
            }
        </div>
    );
};

export default OurTeamList;
