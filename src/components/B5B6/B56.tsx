import s from './B56.module.scss'
import Donate from "../B5/Donate";
import HumanitarianAid from "../B6/HumanitarianAid/HumanitarianAid";

const B56 = () => {
    return (
        <div className={s.container}>
            <Donate/>
            <HumanitarianAid/>
        </div>
    );
};

export default B56;