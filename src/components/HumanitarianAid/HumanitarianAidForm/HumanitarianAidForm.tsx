import {FC, useState} from 'react';
import s from "./HumanitarianAidForm.module.scss";
import AdminService from "@/services/AdminService";
import {RoundedButton} from "@/components/RoundedButton/RoundedButton";
import {IOffer} from "@/models/data";
import {IWantToHelpWithHumanitarianAid} from "@/models/text";
import NeedToLogin from "@/components/HumanitarianAid/NeedToLogin/NeedToLogin";

interface HumanitarianAidFormProps {
    HumanitarianAidForm: IWantToHelpWithHumanitarianAid;
}

const HumanitarianAidForm: FC<HumanitarianAidFormProps> = ({ HumanitarianAidForm }) => {

    const [userForm, setUserForm] = useState<IOffer>({
        name: '',
        phone: '',
        email: '',
        offer: ''
    });

    return (
        <form
            className={s.formSide}
            onSubmit={async e => {
                e.preventDefault();
                await AdminService.AddOffer(userForm);
            }
            }>
            <div className={s.inputs}>
                <input
                    value={userForm.name}
                    onChange={e => setUserForm({ ...userForm, name: e.target.value })}
                    type="text"
                    placeholder={HumanitarianAidForm.form.name} />
                <input
                    value={userForm.phone}
                    onChange={e => setUserForm({ ...userForm, phone: e.target.value })}
                    type="text"
                    placeholder={HumanitarianAidForm.form.phone} />
                <input
                    value={userForm.email}
                    onChange={e => setUserForm({ ...userForm, email: e.target.value })}
                    type="text"
                    placeholder={HumanitarianAidForm.form.email} />
            </div>
            <textarea
                value={userForm.offer}
                onChange={e => setUserForm({ ...userForm, offer: e.target.value })}
                placeholder={HumanitarianAidForm.form.whatYouCanProvide}>
                            </textarea>
            <RoundedButton className={s.submit}>
                <button type='submit'>{HumanitarianAidForm.form.sendButton}</button>
            </RoundedButton>
            <NeedToLogin />
        </form>
    );
};

export default HumanitarianAidForm;
