import React, {FC, useState} from 'react';
import s from "./TeammateItem.module.scss";
import {UserDTO} from "@/models/user";
import Label from "@/components/AdminPage/AdminComponents/AdminUI/Label/Label";
import Button from "@/components/AdminPage/AdminComponents/AdminUI/Button/Button";
import AdminService from "@/services/AdminService";
import ModalWindow from "@/components/Style/ModalWindow/ModalWindow";

interface TeammateItemProps {
    teammate: UserDTO;
    fetchTeam: () => Promise<void>;
}

const TeammateItem: FC<TeammateItemProps> = ({ teammate, fetchTeam }) => {

    const [teammateState, setTeammateState] = useState<UserDTO>(teammate);
    const [photoFile, setPhotoFile] = useState<File | null>(null);
    const [modalWindow, setModalWindow] = useState<boolean>(false);

    return (
        <>
            <div className={s.teammateContainer}>
                <div className={s.imageContainer}>
                    <img
                        src={`https://ss.egartsites.pp.ua/${teammate.photo}`}
                        alt={teammate.photo}
                        onClick={() => setModalWindow(true)}
                    />
                </div>
                <p>{teammate.fullName}</p>
            </div>
            <ModalWindow state={modalWindow} setState={setModalWindow}>
                <div className={s.modalWindow}>
                    <Label placeholder={'Full Name'} maxLength={100} state={teammateState} path={['fullName']} setState={setTeammateState} />
                    <Label placeholder={'Email'} maxLength={50} state={teammateState} path={['email']} setState={setTeammateState} />
                    <Label placeholder={'Phone'} maxLength={40} state={teammateState} path={['phone']} setState={setTeammateState} />
                    <Label placeholder={'Extras'} maxLength={100} state={teammateState} path={['extras']} setState={setTeammateState} />
                    <label>
                        <p>{teammateState.photo.length !== 0 ? 'Photo Added' : 'Set a photo'}</p>
                        <input
                            type={'file'}
                            accept={"image/*"}
                            onChange={e => e.target.files && setPhotoFile(Array.from( e.target.files)[0])}
                        />
                    </label>
                    <div className={s.btns}>
                        <Button color={'blue'} size={'small'} onClick={async () => {
                            await AdminService.UpdateUser({
                                ...teammateState,
                                photoFile:  photoFile ? [photoFile] : [],
                                photoLinks: teammateState.photo,
                            })
                            await fetchTeam();
                        }}>Save</Button>
                        <Button color={'red'} size={'small'} onClick={async () => {
                            await AdminService.DeleteUser(teammate.id);
                            await fetchTeam();
                        }}>Delete</Button>
                    </div>
                </div>
            </ModalWindow>
        </>
    );
};

export default TeammateItem;
