import {FC, useEffect, useState} from 'react';
import s from './OurTeam.module.scss';
import PersonCard from "@/components/OurTeam/PersonCard/PersonCard";
import {OurTeam} from "@/models/text";
import {ITeam} from "@/models/data";
import axios from "axios";

interface OurTeamProps {
    OurTeam: OurTeam;
    Array: ITeam[];
}

const OurTeam: FC<OurTeamProps> = ({OurTeam, Array}) => {
    return (
        <div className={s.container}>
            <h2>{OurTeam.main}</h2>
            <h3>{OurTeam.description}</h3>
            <div className={s.teamList}>
                {
                    Array.map(t => (<PersonCard key={t.fullName} title={t.fullName} photoSrc={`https://ss.egartsites.pp.ua/${t.photo}`} />))
                }
            </div>
        </div>
    );
};

export default OurTeam;
