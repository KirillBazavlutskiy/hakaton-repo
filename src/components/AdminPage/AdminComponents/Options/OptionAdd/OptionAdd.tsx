import {FC, useState} from 'react';
import s from './OptionAdd.module.scss';
import Button from "@/components/AdminPage/AdminComponents/AdminUI/Button/Button";
import {Option} from "@/models/data";
import AdminService from "@/services/AdminService";
import ModalWindow from "@/components/Style/ModalWindow/ModalWindow";
import Label from "@/components/AdminPage/AdminComponents/AdminUI/Label/Label";

interface OptionAddProps {
    fetchOptions: () => Promise<void>;
}

const optionDefault: Option = {
    name: '',
    value: ''
}

const OptionAdd: FC<OptionAddProps> = ({ fetchOptions }) => {

    const [option, setOption] = useState<Option>(optionDefault);
    const [modalWindow, setModalWindow] = useState<boolean>(false)

    return (
        <div className={s.container}>
            <Button color={'blue'} size={'small'} onClick={async () => setModalWindow(true)}>Add</Button>
            <ModalWindow state={modalWindow} setState={setModalWindow}>
                <div className={s.menuContainer}>
                    <Label placeholder={'Name'} maxLength={50} state={option} path={['name']} setState={setOption} />
                    <Label placeholder={'Value'} maxLength={100} state={option} path={['value']} setState={setOption} />
                    <button onClick={async () => {
                        await AdminService.SetOption(option.name, option.value);
                        await fetchOptions();
                        setOption(optionDefault);
                        setModalWindow(false);
                    }}>Save</button>
                </div>
            </ModalWindow>
        </div>
    );
};

export default OptionAdd;
