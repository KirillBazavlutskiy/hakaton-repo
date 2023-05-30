import React, {FC, useState} from 'react';
import {UserDTO} from "@/models/user";
import s from "./PartnerItem.module.scss";
import AdminService from "@/services/AdminService";
import Label from "@/components/AdminPage/AdminComponents/AdminUI/Label/Label";
import Button from "@/components/AdminPage/AdminComponents/AdminUI/Button/Button";
import ModalWindow from "@/components/Style/ModalWindow/ModalWindow";

interface PartnerItemProps {
    partner: UserDTO;
    fetchPartners: () => Promise<void>;
}

const PartnerItem: FC<PartnerItemProps> = ({ partner, fetchPartners }) => {

    const [partnerState, setPartnerState] = useState<UserDTO>(partner);
    const [photoFile, setPhotoFile] = useState<File | null>(null);
    const [modalWindow, setModalWindow] = useState<boolean>(false);

    return (
        <>
            <div key={partner.id} className={s.partnerImgContainer}>
                <img
                    src={`https://ss.egartsites.pp.ua/${partner.photo}`}
                    alt={partner.photo}
                    onClick={() => setModalWindow(true)}
                />
            </div>
            <ModalWindow state={modalWindow} setState={setModalWindow}>
                <div className={s.modalWindow}>
                    <Label placeholder={'Full Name'} maxLength={100} state={partnerState} path={['fullName']} setState={setPartnerState} />
                    <Label placeholder={'Email'} maxLength={50} state={partnerState} path={['email']} setState={setPartnerState} />
                    <Label placeholder={'Phone'} maxLength={40} state={partnerState} path={['phone']} setState={setPartnerState} />
                    <Label placeholder={'Extras'} maxLength={100} state={partnerState} path={['extras']} setState={setPartnerState} />
                    <label>
                        <p>{partnerState.photo.length !== 0 ? 'Photo Added' : 'Set a photo'}</p>
                        <input
                            type={'file'}
                            accept={"image/*"}
                            onChange={e => e.target.files && setPhotoFile(Array.from( e.target.files)[0])}
                        />
                    </label>
                    <div className={s.btns}>
                        <Button color={'blue'} size={'small'} onClick={async () => {
                            await AdminService.UpdateUser({
                                ...partnerState,
                                photoFile:  photoFile ? [photoFile] : [],
                                photoLinks: partnerState.photo,
                            })
                            await fetchPartners();
                            setModalWindow(false);
                        }}>Save</Button>
                        <Button color={'red'} size={'small'} onClick={async () => {
                            await AdminService.DeleteUser(partner.id);
                            await fetchPartners();
                            setModalWindow(false);
                        }}>Delete</Button>
                    </div>
                </div>
            </ModalWindow>
        </>
    );
};

export default PartnerItem;
