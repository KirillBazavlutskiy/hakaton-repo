import {FC, useState} from 'react';
import s from './Sections.module.scss';

const Sections: FC = () => {

    const [activeTab, setActiveTab] = useState<number>(0);

    const tabs = [
        { name: 'Stay Sage Kids', text: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { name: 'Medical Aid', text: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { name:  'Humanitarian Aid Support', text: "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
    ]

    return (
        <div className={s.container}>
            <div className={s.buttons}>
                {
                    tabs.map((n, i) => (
                        <button className={activeTab === i ? s.active : s.notActive} key={i} onClick={() => setActiveTab(i)}>{n.name}</button>
                    ))
                }
            </div>
            <div className={s.projects}>
                {
                    tabs.map((n, i) => (
                        <h2
                            style={{ display: activeTab === i ? 'block' : 'none' }}
                            key={i}
                        >{n.text}</h2>
                    ))
                }
            </div>
        </div>
    );
};

export default Sections;