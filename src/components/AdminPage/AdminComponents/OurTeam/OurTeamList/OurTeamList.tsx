import {UserDTO} from "@/models/user";
import {FC} from 'react';
import s from "./OurTeamList.module.scss";
import TeammateItem from "@/components/AdminPage/AdminComponents/OurTeam/OurTeamList/TeammateItem/TeammateItem";

interface OurTeamListProps {
    team: UserDTO[];
    fetchTeam: () => Promise<void>;
}

const OurTeamList: FC<OurTeamListProps> = ({ team, fetchTeam }) => {
    return (
        <div className={s.teamList}>{
                team.map(teammate => <TeammateItem key={teammate.id} teammate={teammate} fetchTeam={fetchTeam} />)
        }</div>
    );
};

export default OurTeamList;
