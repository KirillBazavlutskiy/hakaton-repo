import { SectionCaption } from '../SectionCaption/SectionCaption';
import s from './OfficialAidRequest.module.scss'
import {LinkToForm} from "@/models/text";
import {FC} from "react";

interface OfficialAidRequestProps {
    OfficialAid: LinkToForm;
}

const OfficialAidRequest:FC<OfficialAidRequestProps> = ({OfficialAid}) => {
    return (
        <div className={s.main}>
            <div className={s.wrapper}>
                <div className={s.container}>
                    <SectionCaption className={s.caption}>
                        {OfficialAid.first__main}
                    </SectionCaption>
                    <a href="https://forms.gle/mGUJzQgW4qnhYRqRA">{OfficialAid.formLink}</a>
                </div>
            </div>
            <div className={s.wrapper}>
                <div className={s.container}>
                    <SectionCaption className={s.caption}>
                        {OfficialAid.second__main}
                    </SectionCaption>
                    <a href="https://forms.gle/mGUJzQgW4qnhYRqRA">{OfficialAid.formLink}</a>
                </div>
            </div>
        </div>
    );
};

export default OfficialAidRequest;