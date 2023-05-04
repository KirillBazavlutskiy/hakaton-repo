import {FC, useEffect, useState} from 'react';
import s from './Options.module.scss';
import {Option} from "@/models/data";
import AdminHooks from "@/components/AdminPage/hooks";
import AdminService from "@/services/AdminService";
import OptionsList from "@/components/AdminPage/AdminComponents/Options/OptionsList/OptionsList";
import OptionAdd from "@/components/AdminPage/AdminComponents/Options/OptionAdd/OptionAdd";

const Options: FC = () => {

    const [options, setOptions] = useState<Option[]>([]);

    const fetchOptions = async (): Promise<void> => {
        await AdminHooks.fetchData(AdminService.GetOptions, setOptions);
    }

    useEffect(() => {
        fetchOptions();
    }, [])

    return (
        <div className={s.container}>
            <h1>How can you help</h1>
            <OptionsList options={options} fetchOptions={fetchOptions} />
            <OptionAdd fetchOptions={fetchOptions} />
        </div>
    );
};

export default Options;
