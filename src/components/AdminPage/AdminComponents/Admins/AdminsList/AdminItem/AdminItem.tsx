import {FC, useState} from 'react';
import s from './AdminItem.module.scss';
import {UserDTO} from "@/models/user";
import ModalWindow from "@/components/Style/ModalWindow/ModalWindow";
import Label from "@/components/AdminPage/AdminComponents/AdminUI/Label/Label";
import {AddUserRequest} from "@/models/auth";
import Button from "@/components/AdminPage/AdminComponents/AdminUI/Button/Button";
import AdminService from "@/services/AdminService";

interface AdminItemProps {
    admin: UserDTO;
    fetchAdmins: () => Promise<void>;
}

const AdminItem: FC<AdminItemProps> = ({ admin, fetchAdmins }) => {

    const [adminState, setAdminState] = useState<UserDTO>(admin);
    const [photoFile, setPhotoFile] = useState<File | null>(null);
    const [modalWindow, setModalWindow] = useState<boolean>(false);

    return (
        <>
            <div className={s.container} onClick={() => {setModalWindow(true)}}>
                <div className={s.adminImageContainer}>
                    <img src={`https://ss.egartsites.pp.ua/${admin.photo}`} alt="No photo" />
                </div>
                <p>{admin.fullName}</p>
                <p>{admin.email}</p>
            </div>
            <ModalWindow state={modalWindow} setState={setModalWindow}>
                <div className={s.modalWindow}>
                    <Label placeholder={'Full Name'} maxLength={100} state={adminState} path={['fullName']} setState={setAdminState} />
                    <Label placeholder={'Email'} maxLength={50} state={adminState} path={['email']} setState={setAdminState} />
                    <Label placeholder={'Phone'} maxLength={40} state={adminState} path={['phone']} setState={setAdminState} />
                    <Label placeholder={'Extras'} maxLength={100} state={adminState} path={['extras']} setState={setAdminState} />
                    <label>
                        <p>{adminState.photo.length !== 0 ? 'Photo Added' : 'Set a photo'}</p>
                        <input
                            type={'file'}
                            accept={"image/*"}
                            onChange={e => e.target.files && setPhotoFile(Array.from( e.target.files)[0])}
                        />
                    </label>
                    <div className={s.btns}>
                        <Button color={'blue'} size={'small'} onClick={async () => {
                            await AdminService.UpdateUser({
                                ...adminState,
                                photoFile:  photoFile ? [photoFile] : [],
                                photoLinks: adminState.photo,
                            })
                            await fetchAdmins();
                        }}>Save</Button>
                        <Button color={'red'} size={'small'} onClick={async () => {
                            await AdminService.DeleteUser(admin.id);
                            await fetchAdmins();
                        }}>Delete</Button>
                    </div>
                </div>
            </ModalWindow>
        </>
    );
};

export default AdminItem;
