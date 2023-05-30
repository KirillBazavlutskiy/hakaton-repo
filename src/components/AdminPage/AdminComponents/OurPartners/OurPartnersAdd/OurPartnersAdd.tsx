import {Dispatch, FC, SetStateAction, useState} from 'react';
import s from "./OurPartnersAdd.module.scss";
import Button from "@/components/AdminPage/AdminComponents/AdminUI/Button/Button";
import ModalWindow from "@/components/Style/ModalWindow/ModalWindow";
import Label from "@/components/AdminPage/AdminComponents/AdminUI/Label/Label";
import AdminService from "@/services/AdminService";
import {AddUserRequest} from "@/models/auth";

interface OurPartnersAddProps {
    fetchPartners: () => Promise<void>;
}

const partnerStateDefault: AddUserRequest = {
    role: 'Partner',
    fullName: '',
    email: '',
    phone: '',
    photo: [],
}

const OurPartnersAdd: FC<OurPartnersAddProps> = ({ fetchPartners }) => {

    const [modalMenu, setModalMenu] = useState<boolean>(false);
    const [partner, setPartner] = useState<AddUserRequest>(partnerStateDefault);

    return (
        <div className={s.container}>
            <div className={s.btns}>
                <Button color={'blue'} size={'small'} shadow onClick={() => {setModalMenu(true)}}>Add Partner +</Button>
            </div>
            <ModalWindow state={modalMenu} setState={setModalMenu}>
                <div className={s.modalWindow}>
                    <Label maxLength={100} state={partner} path={['fullName']} placeholder={'Full name'} setState={setPartner} />
                    <Label maxLength={100} state={partner} path={['email']} placeholder={'Email'} setState={setPartner} />
                    <Label maxLength={100} state={partner} path={['phone']} placeholder={'Phone'} setState={setPartner} />
                    <label>
                        <p>{partner.photo.length !== 0 ? 'Photo Added' : 'Set a photo'}</p>
                        <input
                            type={'file'}
                            accept={"image/*"}
                            onChange={e =>
                                e.target.files && setPartner({
                                    ...partner,
                                    photo: [ Array.from( e.target.files)[0] ]
                                })
                            }
                        />
                    </label>
                    <button onClick={async () => {
                        await AdminService.AddUser(partner);
                        await fetchPartners();
                        setPartner(partnerStateDefault);
                        setModalMenu(false);
                    }}>Add</button>
                </div>
            </ModalWindow>
        </div>
    );
};

export default OurPartnersAdd;
