import {FC, useState} from 'react';
import s from './HumanitarianAid.module.scss';

interface IForm {
    name: string;
    phone: string;
    email: string;
    provide: string;
}

const HumanitarianAid: FC = () => {

    const [userForm, setUserForm] = useState<IForm>({
        name: '',
        phone: '',
        email: '',
        provide: ''
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
                    <form className={s.formSide}>
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
                                    value={userForm.phone}
                                    onChange={e => setUserForm({...userForm, phone: e.target.value})}
                                    type="text"
                                    placeholder='Phone'/>
                            </label>
                            <label>
                                <input
                                    value={userForm.email}
                                    onChange={e => setUserForm({...userForm, email: e.target.value})}
                                    type="text"
                                    placeholder='E-mail'/>
                            </label>
                        </div>
                        <textarea
                            value={userForm.provide}
                            onChange={e => setUserForm({...userForm, provide: e.target.value})}
                            placeholder='What you can provide'>
                        </textarea>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HumanitarianAid;