import { SectionCaption } from '../SectionCaption/SectionCaption';
import s from './OfficialAidRequest.module.scss'

const OfficialAidRequest = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <SectionCaption className={s.caption}>
                    Template for official aid request for organisations
                </SectionCaption>
                <a href="#">Fill the form</a>
            </div>
        </div>
    );
};

export default OfficialAidRequest;