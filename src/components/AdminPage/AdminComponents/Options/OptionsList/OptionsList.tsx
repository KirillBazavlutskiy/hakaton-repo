import { FC } from 'react';
import s from './OptionsList.module.scss';
import {Option} from "@/models/data";
import OptionItem from "@/components/AdminPage/AdminComponents/Options/OptionsList/OptionItem/OptionItem";

interface OptionsListProps {
    options: Option[];
    fetchOptions : () => Promise<void>;
}

const OptionsList: FC<OptionsListProps> = ({ options, fetchOptions }) => {
    return (
        <div className={s.containerList}>{
            options.map(o => <OptionItem key={o.name} name={o.name} value={o.value} fetchOptions={fetchOptions} />)
        }</div>
    );
};

export default OptionsList;
