import { FC, useState } from 'react';
import AdminService, { IOffer } from "@/services/AdminService";

import { SectionCaption } from '../SectionCaption/SectionCaption';
import { RoundedButton } from '../RoundedButton/RoundedButton';

import s from './HumanitarianAid.module.scss';

const HumanitarianAid: FC = () => {

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
                        I want to help with Humanitarian Aid
                    </SectionCaption>
                    <div className={s.blocks}>
                        <div className={s.infoSide}>
                            <p>If u can help and provide something of the current list above, please fill out the form below</p>
                            <a href="#">List of current Needs</a>
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
                                    placeholder='Name' />
                                <input
                                    value={userForm.phone}
                                    onChange={e => setUserForm({ ...userForm, phone: e.target.value })}
                                    type="text"
                                    placeholder='Phone' />
                                <input
                                    value={userForm.email}
                                    onChange={e => setUserForm({ ...userForm, email: e.target.value })}
                                    type="text"
                                    placeholder='E-mail' />
                            </div>
                            <textarea
                                value={userForm.offer}
                                onChange={e => setUserForm({ ...userForm, offer: e.target.value })}
                                placeholder='What you can provide'>
                            </textarea>
                            <RoundedButton className={s.submit}>
                                <button type='submit'>Send</button>
                            </RoundedButton>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HumanitarianAid;