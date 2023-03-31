import { FC, useState } from 'react';
import AdminService from "@/services/AdminService";

import { IOffer } from "@/models/data";

import { SectionCaption } from '../SectionCaption/SectionCaption';
import { RoundedButton } from '../RoundedButton/RoundedButton';

import s from './HumanitarianAid.module.scss';
import {IWantToHelpWithHumanitarianAid} from "@/models/text";

interface HumanitarianAidProps {
    HumanitarianAid: IWantToHelpWithHumanitarianAid;
}

const HumanitarianAid: FC<HumanitarianAidProps> = ({HumanitarianAid}) => {

    const [userForm, setUserForm] = useState<IOffer>({
        name: '',
        phone: '',
        email: '',
        offer: ''
    });

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.gradient}></div>
                <div className={s.inner}>
                    <SectionCaption>
                        {HumanitarianAid.main}
                    </SectionCaption>
                    <div className={s.blocks}>
                        <div className={s.infoSide}>
                            <p>{HumanitarianAid.fillTheForm}</p>
                            <a href="https://docs.google.com/document/d/15VglwvQL6Xn1fCCRMNMvp6wfashimn0D/edit">{HumanitarianAid.listOfNeeds}</a>
                        </div>
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
                                    placeholder={HumanitarianAid.form.name} />
                                <input
                                    value={userForm.phone}
                                    onChange={e => setUserForm({ ...userForm, phone: e.target.value })}
                                    type="text"
                                    placeholder={HumanitarianAid.form.phone} />
                                <input
                                    value={userForm.email}
                                    onChange={e => setUserForm({ ...userForm, email: e.target.value })}
                                    type="text"
                                    placeholder={HumanitarianAid.form.email} />
                            </div>
                            <textarea
                                value={userForm.offer}
                                onChange={e => setUserForm({ ...userForm, offer: e.target.value })}
                                placeholder={HumanitarianAid.form.whatYouCanProvide}>
                            </textarea>
                            <RoundedButton className={s.submit}>
                                <button type='submit'>{HumanitarianAid.form.sendButton}</button>
                            </RoundedButton>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HumanitarianAid;