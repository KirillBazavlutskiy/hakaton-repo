import {FC, useState} from 'react';
import s from './HumanitarianAid.module.scss';
import AdminService, {IOffer} from "@/Services/AdminService";

const HumanitarianAid: FC = () => {

    const [userForm, setUserForm] = useState<IOffer>({
        name: '',
        contact: '',
        offer: ''
    });

    return (
        <div className={s.container}>
            <div className={s.inner}>
                <h1>I want to help with Humanitarian Aid</h1>
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
                            <label>
                                <input
                                    value={userForm.name}
                                    onChange={e => setUserForm({...userForm, name: e.target.value})}
                                    type="text"
                                    placeholder='Name'/>
                            </label>
                            <label>
                                <input
                                    value={userForm.contact}
                                    onChange={e => setUserForm({...userForm, contact: e.target.value})}
                                    type="text"
                                    placeholder='Contacts'/>
                            </label>
                        </div>
                        <textarea
                            value={userForm.offer}
                            onChange={e => setUserForm({...userForm, offer: e.target.value})}
                            placeholder='What you can provide'>
                        </textarea>
                        <button type='submit'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HumanitarianAid;