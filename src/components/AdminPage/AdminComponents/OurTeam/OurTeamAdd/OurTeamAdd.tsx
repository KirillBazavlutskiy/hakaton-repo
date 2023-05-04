import {Dispatch, FC, SetStateAction, useState} from "react";
import {AddUserRequest} from "@/models/auth";
import s from "./OurTeamAdd.module.scss";
import Button from "@/components/AdminPage/AdminComponents/AdminUI/Button/Button";
import ModalWindow from "@/components/Style/ModalWindow/ModalWindow";
import Label from "@/components/AdminPage/AdminComponents/AdminUI/Label/Label";
import AdminService from "@/services/AdminService";

interface OurPartnersAddProps {
    setDeleteMode: Dispatch<SetStateAction<boolean>>;
    fetchTeam: () => Promise<void>;
}

const teammateStateDefault: AddUserRequest = {
    role: 'Member',
    fullName: '',
    email: '',
    phone: '',
    password: '',
    photo: [],
}

const OurTeamAdd: FC<OurPartnersAddProps> = ({ setDeleteMode, fetchTeam }) => {

    const [modalMenu, setModalMenu] = useState<boolean>(false);
    const [teammate, setTeammate] = useState<AddUserRequest>(teammateStateDefault);

    return (
        <div className={s.container}>
            <div className={s.btns}>
                <Button color={'yellow'} size={'small'} shadow onClick={() => setDeleteMode(prev => !prev)}>
                    Delete Teammate
                </Button>
                <Button color={'blue'} size={'small'} shadow onClick={() => {setModalMenu(true)}}>Add Teammate +</Button>
            </div>
            <ModalWindow state={modalMenu} setState={setModalMenu}>
                <div className={s.modalWindow}>
                    <Label maxLength={100} state={teammate} path={['fullName']} placeholder={'Full name'} setState={setTeammate} />
                    <Label maxLength={100} state={teammate} path={['email']} placeholder={'Email'} setState={setTeammate} />
                    <Label maxLength={100} state={teammate} path={['phone']} placeholder={'Phone'} setState={setTeammate} />
                    <Label maxLength={100} state={teammate} path={['password']} placeholder={'Password'} setState={setTeammate} />
                    <label>
                        <p>{teammate.photo.length !== 0 ? 'Photo Added' : 'Set a photo'}</p>
                        <input
                            type={'file'}
                            accept={"image/*"}
                            onChange={e =>
                                e.target.files && setTeammate({
                                    ...teammate,
                                    photo: [ Array.from( e.target.files)[0] ]
                                })
                            }
                        />
                    </label>
                    <button onClick={async () => {
                        await AdminService.AddUser(teammate);
                        await fetchTeam();
                        setTeammate(teammateStateDefault);
                        setModalMenu(false);
                    }}>Add</button>
                </div>
            </ModalWindow>
        </div>
    );
};

export default OurTeamAdd;
