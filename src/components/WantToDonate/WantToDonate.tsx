import s from './WantToDonate.module.scss'
import { SectionCaption } from '../SectionCaption/SectionCaption'
import PayBlock from "@/components/WantToDonate/Components/PayBlock/PayBlock";
import {IWantToDonate} from "@/models/text";
import {FC} from "react";

interface WantToDonateProps {
    IWantToDonate: IWantToDonate;
}
const WantToDonate:FC<WantToDonateProps> = ({IWantToDonate}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.inner}>
                    <SectionCaption>
                        {IWantToDonate.main}
                    </SectionCaption>
                    <div className={s.buttons}>
                        {/*TODO: liqpay api & mono api*/}
                        <button>Privat</button>
                        <button>Mono</button>
                    </div>
                </div>
                <PayBlock PayBlock={IWantToDonate}/>
            </div>
        </div>
    );
};

export default WantToDonate;