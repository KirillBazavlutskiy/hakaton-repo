import {FC, useState} from 'react';
import {Option} from "@/models/data";
import ModalWindow from "@/components/Style/ModalWindow/ModalWindow";
import s from './OptionItem.module.scss';
import AdminService from "@/services/AdminService";

interface OptionItemProps extends Option{
    fetchOptions : () => Promise<void>;
}

const OptionItem: FC<OptionItemProps> = ({ name, value, fetchOptions }) => {

    const [menuActive, setMenuActive] = useState<boolean>(false);
    const [valueState, setValueState] = useState<string>(value);

    return (
        <>
            <div className={s.container}>
                <h3>{name}</h3>
                <p onClick={() => setMenuActive(true)}>{value}</p>
            </div>
            <ModalWindow state={menuActive} setState={setMenuActive}>
                <div className={s.menuContainer}>
                    <input
                        type="text"
                        value={valueState}
                        onChange={(e) => setValueState(e.target.value)}
                    />
                    <div className={s.btns}>
                        <button onClick={async () => {
                            await AdminService.ChangeOption(name, valueState);
                            await fetchOptions();
                        }}>Save</button>
                        <button onClick={async () => {
                            await AdminService.DeleteOption(name);
                            await fetchOptions();
                        }}>Delete Value</button>
                    </div>
                </div>
            </ModalWindow>
        </>
    );
};

export default OptionItem;
