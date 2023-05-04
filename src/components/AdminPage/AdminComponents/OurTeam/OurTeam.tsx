import {FC, useEffect, useState} from 'react';
import s from './OurTeam.module.scss'
import {UserDTO} from "@/models/user";
import AdminService from "@/services/AdminService";
import OurTeamList from "@/components/AdminPage/AdminComponents/OurTeam/OurTeamList/OurTeamList";
import OurTeamAdd from "@/components/AdminPage/AdminComponents/OurTeam/OurTeamAdd/OurTeamAdd";

const OurTeam: FC = () => {

    const fetchTeam = async () => {
        const data = await AdminService.FetchUsers('Member');
        setTeamList(data);
    }

    const [teamList, setTeamList] = useState<UserDTO[]>([]);
    const [deleteMode, setDeleteMode] = useState<boolean>(false);

    useEffect(() => {
        fetchTeam();
    }, [])

    return (
        <div className={s.container}>
            <h1>Our Team</h1>
            <OurTeamList team={teamList} deleteMode={deleteMode} fetchTeam={fetchTeam} />
            <OurTeamAdd setDeleteMode={setDeleteMode} fetchTeam={fetchTeam} />
        </div>
    );
};

export default OurTeam;
