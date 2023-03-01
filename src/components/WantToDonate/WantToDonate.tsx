import s from './WantToDonate.module.scss'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"
import { SectionCaption } from '../SectionCaption/SectionCaption'

const WantToDonate = () => {

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.inner}>
                    <SectionCaption>
                        I want to donate
                    </SectionCaption>
                    <div className={s.buttons}>
                        <div className={s.block}>
                            <a className={s.way} href={"https://secure.wayforpay.com/payment/wfp"}>WayForPay</a>
                        </div>
                        <div className={s.block}>
                            <PayPalScriptProvider options={{ "client-id": "ARByd3mCc6RaCPvyerFjF6UAy0W6Fszp6353DDQz3rx77DYGCApGu64n0Kr4BPM0gEoCpjDjztsfc04X" }}>
                                <PayPalButtons />
                            </PayPalScriptProvider>
                        </div>
                    </div>
                </div>
                <div className={s.otherWays}>
                    <SectionCaption>
                        Other ways to help
                    </SectionCaption>
                    <ul>
                        <li>
                            <a href='#'>Paypal</a>
                        </li>
                        <li>
                            <a href='#'>BTC</a>
                        </li>
                        <li>
                            <a href='#'>ETH</a>
                        </li>
                        <li>
                            <a href='#'>USDT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default WantToDonate;