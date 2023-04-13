import {FC, useState} from 'react';
import s from './MainScreen.module.scss';
import Label from "@/components/AdminPage/AdminComponents/AdminUI/Label/Label";
import Button from "@/components/AdminPage/AdminComponents/AdminUI/Button/Button";

const MainScreen: FC = () => {

    const [obj, setObj] = useState({
        wow: {
            key: 'test'
        }
    });

    return (
        <div className={s.container}>
            <Button color={'blue'} size={"small"} shadow onClick={() => alert('hi')}>Add Partner</Button>
            <Label
                title={'Test'} placeholder={'text here'} type={'textarea'} maxLength={50}
                state={obj} path={['wow', 'key']} setState={setObj}
            />
        </div>
    );
};

export default MainScreen;