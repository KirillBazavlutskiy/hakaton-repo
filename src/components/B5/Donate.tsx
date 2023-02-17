import s from './Donate.module.scss'
import {PayPalScriptProvider, PayPalButtons} from "@paypal/react-paypal-js"

const Donate = () => {

    return (
        <div className={s.container}>
            <div className={s.inner}>
                <h1>I want to donate</h1>
                <div className={s.buttons}>
                    <div className={s.block}>
                        <PayPalScriptProvider options={{"client-id": "ARByd3mCc6RaCPvyerFjF6UAy0W6Fszp6353DDQz3rx77DYGCApGu64n0Kr4BPM0gEoCpjDjztsfc04X"}}>
                            <PayPalButtons/>
                        </PayPalScriptProvider>
                    </div>
                    <div className={s.block}>
                        <a className={s.way} href={"https://secure.wayforpay.com/payment/wfp"}>WayForPay</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donate;