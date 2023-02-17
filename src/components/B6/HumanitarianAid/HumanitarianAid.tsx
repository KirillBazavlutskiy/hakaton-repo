import {FC} from 'react';
import s from './HumanitarianAid.module.scss';

const HumanitarianAid: FC = () => {
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
                                <input type="text" placeholder='Name'/>
                            </label>
                            <label>
                                <input type="text" placeholder='Phone'/>
                            </label>
                            <label>
                                <input type="text" placeholder='E-mail'/>
                            </label>
                        </div>
                        <textarea placeholder='What you can provide'></textarea>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HumanitarianAid;