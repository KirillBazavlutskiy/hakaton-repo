import s from './WantToDonate.module.scss'
import { SectionCaption } from '../SectionCaption/SectionCaption'
import PayBlock from "@/components/WantToDonate/Components/PayBlock/PayBlock";

const WantToDonate = () => {

    // const [paymentMethod, setPaymentMethod] = useState(1);

    // const [paydata, setPayData] = useState({
    //     payPal: "payPal__receipt__for__donate",
    //     btc: "btc__receipt__for__donate",
    //     eth: "eth__receipt__for__donate",
    //     usdt: "usdt__receipt__for__donate"
    // });

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.inner}>
                    <SectionCaption>
                        I want to donate
                    </SectionCaption>
                    <div className={s.buttons}>
                        {/*TODO: liqpay api & mono api*/}
                        <button>Privat</button>
                        <button>Mono</button>
                    </div>
                </div>
                <PayBlock/>
                {/*<div className={s.otherWays}>*/}
                {/*    <SectionCaption>*/}
                {/*        Other ways to help*/}
                {/*    </SectionCaption>*/}
                {/*    <div className={s.block}>*/}
                {/*        <ul>*/}
                {/*            <li>*/}
                {/*                <button className={paymentMethod === 1 ? s.activeBtn : s.notActiveBtn} onClick={() => setPaymentMethod(1)}>PayPal</button>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <button className={paymentMethod === 2 ? s.activeBtn : s.notActiveBtn} onClick={() => setPaymentMethod(2)}>BTC</button>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <button className={paymentMethod === 3 ? s.activeBtn : s.notActiveBtn} onClick={() => setPaymentMethod(3)}>ETH</button>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <button className={paymentMethod === 4 ? s.activeBtn : s.notActiveBtn} onClick={() => setPaymentMethod(4)}>USDT</button>*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*        <div className={paymentMethod === 1 ? s.payActive : s.payNotActive}>*/}
                {/*            <div className={s.payBlock}>*/}
                {/*                <p>{paydata.payPal}</p>*/}
                {/*                <button className={s.copyBtn} onClick={() => {navigator.clipboard.writeText(paydata.payPal)}}>*/}
                {/*                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"*/}
                {/*                         stroke-width="1.5" stroke="currentColor" className="w-6 h-6">*/}
                {/*                        <path stroke-linecap="round" stroke-linejoin="round"*/}
                {/*                              d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"/>*/}
                {/*                    </svg>*/}
                {/*                </button>*/}
                {/*            </div>*/}
                {/*            <div className={s.payBlock}>*/}
                {/*                <p>{paydata.payPal}</p>*/}
                {/*                <button className={s.copyBtn} onClick={() => navigator.clipboard.writeText(paydata.payPal)}>*/}
                {/*                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"*/}
                {/*                         stroke-width="1.5" stroke="currentColor" className="w-6 h-6">*/}
                {/*                        <path stroke-linecap="round" stroke-linejoin="round"*/}
                {/*                              d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"/>*/}
                {/*                    </svg>*/}
                {/*                </button>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className={paymentMethod === 2 ? s.payActive : s.payNotActive}>*/}
                {/*            <div className={s.payBlock}>*/}
                {/*                <p>{paydata.btc}</p>*/}
                {/*                <button className={s.copyBtn} onClick={() => {navigator.clipboard.writeText(paydata.btc)}}>*/}
                {/*                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"*/}
                {/*                         stroke-width="1.5" stroke="currentColor" className="w-6 h-6">*/}
                {/*                        <path stroke-linecap="round" stroke-linejoin="round"*/}
                {/*                              d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"/>*/}
                {/*                    </svg>*/}
                {/*                </button>*/}
                {/*            </div>*/}
                {/*            <div className={s.payBlock}>*/}
                {/*                <p>{paydata.btc}</p>*/}
                {/*                <button className={s.copyBtn} onClick={() => navigator.clipboard.writeText(paydata.btc)}>*/}
                {/*                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"*/}
                {/*                         stroke-width="1.5" stroke="currentColor" className="w-6 h-6">*/}
                {/*                        <path stroke-linecap="round" stroke-linejoin="round"*/}
                {/*                              d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"/>*/}
                {/*                    </svg>*/}
                {/*                </button>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className={paymentMethod === 3 ? s.payActive : s.payNotActive}>*/}
                {/*            <div className={s.payBlock}>*/}
                {/*                <p>{paydata.eth}</p>*/}
                {/*                <button className={s.copyBtn} onClick={() => {navigator.clipboard.writeText(paydata.eth)}}>*/}
                {/*                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"*/}
                {/*                         stroke-width="1.5" stroke="currentColor" className="w-6 h-6">*/}
                {/*                        <path stroke-linecap="round" stroke-linejoin="round"*/}
                {/*                              d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"/>*/}
                {/*                    </svg>*/}
                {/*                </button>*/}
                {/*            </div>*/}
                {/*            <div className={s.payBlock}>*/}
                {/*                <p>{paydata.eth}</p>*/}
                {/*                <button className={s.copyBtn} onClick={() => navigator.clipboard.writeText(paydata.eth)}>*/}
                {/*                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"*/}
                {/*                         stroke-width="1.5" stroke="currentColor" className="w-6 h-6">*/}
                {/*                        <path stroke-linecap="round" stroke-linejoin="round"*/}
                {/*                              d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"/>*/}
                {/*                    </svg>*/}
                {/*                </button>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className={paymentMethod === 4 ? s.payActive : s.payNotActive}>*/}
                {/*            <div className={s.payBlock}>*/}
                {/*                <p>{paydata.usdt}</p>*/}
                {/*                <button className={s.copyBtn} onClick={() => {navigator.clipboard.writeText(paydata.usdt)}}>*/}
                {/*                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"*/}
                {/*                         stroke-width="1.5" stroke="currentColor" className="w-6 h-6">*/}
                {/*                        <path stroke-linecap="round" stroke-linejoin="round"*/}
                {/*                              d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"/>*/}
                {/*                    </svg>*/}
                {/*                </button>*/}
                {/*            </div>*/}
                {/*            <div className={s.payBlock}>*/}
                {/*                <p>{paydata.usdt}</p>*/}
                {/*                <button className={s.copyBtn} onClick={() => navigator.clipboard.writeText(paydata.usdt)}>*/}
                {/*                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"*/}
                {/*                         stroke-width="1.5" stroke="currentColor" className="w-6 h-6">*/}
                {/*                        <path stroke-linecap="round" stroke-linejoin="round"*/}
                {/*                              d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"/>*/}
                {/*                    </svg>*/}
                {/*                </button>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default WantToDonate;