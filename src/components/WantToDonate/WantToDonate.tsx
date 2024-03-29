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
                <div className={s.gradient}></div>
                <div className={s.inner}>
                    <SectionCaption>
                        {IWantToDonate.main}
                    </SectionCaption>
                    <div className={s.buttons}>
                        <a href="https://send.monobank.ua/jar/5GnEwUjFHZ">monobank</a>
                        <a href="https://www.privat24.ua/rd/transfer_to_card?hash=rd/transfer_to_card/%7B%22from%22:%22%22,%22to%22:%225169%203600%200040%202093%22,%22ccy%22:%22UAH%22,%22amt%22:%22100%22%7D">
                            PrivatBank
                        </a>
                    </div>
                </div>
                <PayBlock/>
            </div>
        </div>
    );
};

export default WantToDonate;