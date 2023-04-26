import {Dispatch, FC, SetStateAction, useState} from 'react';
import s from "./HumanitarianAidForm.module.scss";
import {RoundedButton} from "@/components/RoundedButton/RoundedButton";
import {IOffer} from "@/models/data";
import {IWantToHelpWithHumanitarianAid} from "@/models/text";
import NeedToLogin from "@/components/HumanitarianAid/NeedToLogin/NeedToLogin";
import {useAppSelector} from "@/redux/store";
import Input from "@/components/HumanitarianAid/Input/Input";
import UserService from "@/services/UserService";
import humanitarianAid from "@/components/HumanitarianAid/HumanitarianAid";

interface HumanitarianAidFormProps {
    HumanitarianAidForm: IWantToHelpWithHumanitarianAid;
    setLoginMenuActive: Dispatch<SetStateAction<boolean>>;
}

const HumanitarianAidForm: FC<HumanitarianAidFormProps> = ({ HumanitarianAidForm, setLoginMenuActive }) => {

    const [userForm, setUserForm] = useState<IOffer>({
        hcuh: '',
        name: '',
        phone: '',
        email: '',
        offer: '',
        image: null,
    });

    const { user } = useAppSelector(state => state.status);

    return (
        <form
            className={s.formSide}
            onSubmit={async e => {
                e.preventDefault();
                await UserService.AddHelpOffer({
                    title: userForm.hcuh,
                    message: userForm.offer,
                    photos: userForm.image || [],
                    files: [],
                });
            }
            }>
            <div className={s.inputs}>
                <Input type={"text"} placeholder={HumanitarianAidForm.form.hcuh}
                       state={userForm} propertyKey={'hcuh'} setState={setUserForm}
                />
                <Input type={'text'} placeholder={HumanitarianAidForm.form.name}
                       state={userForm} propertyKey={'name'} setState={setUserForm}
                />
                <Input type={'tel'} placeholder={HumanitarianAidForm.form.phone}
                       state={userForm} propertyKey={'phone'} setState={setUserForm}
                />
                <Input type={'email'} placeholder={HumanitarianAidForm.form.email}
                       state={userForm} propertyKey={'email'} setState={setUserForm}
                />
            </div>
            <div className={s.bigFields}>
                <textarea
                    value={userForm.offer}
                    onChange={e => setUserForm({ ...userForm, offer: e.target.value })}
                    placeholder={HumanitarianAidForm.form.whatYouCanProvide}>
                </textarea>
                <label>
                    <p>{userForm.image === null ? HumanitarianAidForm.form.imageHaveToAdd : `${HumanitarianAidForm.form.imageAdded}${userForm.image.length}`}</p>
                    <input
                        type={'file'}
                        accept={"image/*"}
                        multiple
                        placeholder={'Add Photo +'}
                        onChange={e =>
                            e.target.files && setUserForm({ ...userForm, image: Array.from( e.target.files) })
                        }
                    />
                </label>
            </div>
            <RoundedButton className={s.submit}>
                <button type='submit'>{HumanitarianAidForm.form.sendButton}</button>
            </RoundedButton>
            {user === 'Guest' &&
                <NeedToLogin
                    setLoginMenuActive={setLoginMenuActive}
                    text={HumanitarianAidForm.needToAuth}
                    buttonText={HumanitarianAidForm.login}
                />
            }
        </form>
    );
};

export default HumanitarianAidForm;
