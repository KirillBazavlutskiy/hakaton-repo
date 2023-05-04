import {Dispatch, FC, SetStateAction, useState} from 'react';
import s from "./AdminsAdd.module.scss";
import Button from "@/components/AdminPage/AdminComponents/AdminUI/Button/Button";
import ModalWindow from "@/components/Style/ModalWindow/ModalWindow";
import Label from "@/components/AdminPage/AdminComponents/AdminUI/Label/Label";
import AdminService from "@/services/AdminService";
import {AddUserRequest} from "@/models/auth";

interface AdminsAddProps {
    fetchAdmins: () => Promise<void>;
}

const AdminDefaultState: AddUserRequest = {
    role: "Admin",
    fullName: '',
    email: '',
    phone: '',
    password: '',
    photo: [],
    extras: '',
}

const AdminsAdd: FC<AdminsAddProps> = ({ fetchAdmins }) => {

    const [modalMenu, setModalMenu] = useState<boolean>(false);
    const [admin, setAdmin] = useState<AddUserRequest>(AdminDefaultState);

    return (
        <div className={s.container}>
            <div className={s.btns}>
                <Button color={'blue'} size={'small'} shadow onClick={() => {setModalMenu(true)}}>Add Admin +</Button>
            </div>
            <ModalWindow state={modalMenu} setState={setModalMenu}>
                <div className={s.modalWindow}>
                    <Label maxLength={100} state={admin} path={['fullName']} placeholder={'Full name'} setState={setAdmin} />
                    <Label maxLength={100} state={admin} path={['email']} placeholder={'Email'} setState={setAdmin} />
                    <Label maxLength={100} state={admin} path={['phone']} placeholder={'Phone'} setState={setAdmin} />
                    <Label maxLength={100} state={admin} path={['password']} placeholder={'Password'} setState={setAdmin} />
                    <label>
                        <p>{admin.photo.length !== 0 ? 'Photo Added' : 'Set a photo'}</p>
                        <input
                            type={'file'}
                            accept={"image/*"}
                            onChange={e =>
                                e.target.files && setAdmin({
                                    ...admin,
                                    photo: [ Array.from( e.target.files)[0] ]
                                })
                            }
                        />
                    </label>
                    <Button color={'blue'} size={'small'} onClick={async () => {
                        await AdminService.AddUser(admin);
                        await fetchAdmins();
                        setAdmin(AdminDefaultState);
                        setModalMenu(false);
                    }}>Add</Button>
                </div>
            </ModalWindow>
        </div>
    );
};

export default AdminsAdd;
