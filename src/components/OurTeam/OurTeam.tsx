import {FC, useState} from 'react';
import s from './OurTeam.module.scss';
import PersonCard from "@/components/OurTeam/PersonCard/PersonCard";

import Person1 from './TeamPhotos/Person1.png';
import Person2 from './TeamPhotos/Person2.png';
import Person3 from './TeamPhotos/Person3.png';
import Person4 from './TeamPhotos/Person4.png';
import Person5 from './TeamPhotos/Person5.png';
import Person6 from './TeamPhotos/Person6.png';
import Person7 from './TeamPhotos/Person7.png';
import Person8 from './TeamPhotos/Person8.png';
import Person9 from './TeamPhotos/Person9.png';
import Person10 from './TeamPhotos/Person10.png';
import {OurTeam} from "@/models/text";

interface OurTeamProps {
    OurTeam: OurTeam;
}

const OurTeam: FC<OurTeamProps> = ({OurTeam}) => {

    const [photos] = useState([
        {
            title: 'Ivan Ivanov',
            photoSrc: Person1
        },
        {
            title: 'Petr Petrov',
            photoSrc: Person2
        },
        {
            title: 'Sergey Sergeev',
            photoSrc: Person3
        },
        {
            title: 'Alex Alexandrov',
            photoSrc: Person4
        },
        {
            title: 'Arina Timofeeva',
            photoSrc: Person5
        },
        {
            title: 'Ivan Ivanov',
            photoSrc: Person6
        },
        {
            title: 'Petr Petrov',
            photoSrc: Person7
        },
        {
            title: 'Sergey Sergeev',
            photoSrc: Person8
        },
        {
            title: 'Alex Alexandrov',
            photoSrc: Person9
        },
        {
            title: 'Arina Timofeeva',
            photoSrc: Person10
        }
    ])

    return (
        <div className={s.container}>
            <h2>{OurTeam.main}</h2>
            <h3>{OurTeam.description}</h3>
            <div className={s.teamList}>
                {
                    photos.map((p) => <PersonCard title={p.title} photoSrc={p.photoSrc} />)
                }
            </div>
        </div>
    );
};

export default OurTeam;