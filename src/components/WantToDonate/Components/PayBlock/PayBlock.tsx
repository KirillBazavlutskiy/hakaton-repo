import styles from './PayBlock.module.scss'
import {useState} from "react";
import Image from 'next/image';

import copy from 'copy-to-clipboard';

import BtcImage from './images/btc.png';
import EthImage from './images/eth.png';
import UsdtImage from './images/usdt.png';
import { toast } from 'react-toastify';

const PayBlock = () => {

    const [pay__method, set__pay__method] = useState<Array<any>>([
        {name: "BTC", receipt: "1NjvdYW1zBygV6siBAbEwrEvmPP8HC5ZUD", network:"BTC", image: BtcImage},
        {name: "ETH", receipt: "0xce8ec1fa8d14a46d552ee2f971ca4f9dbed3ed56", network:"ETH-20", image: EthImage},
        {name: "USDT", receipt: "TCL2HgoZ6xqWygQVamDcAdHJ8QkGLhhpSP", network:"TRC20", image: UsdtImage},
    ])

    const [activeBtn, setActiveBtn] = useState<string>("BTC")

    const copy__button__function = (value:any) => {
        copy(value)

        toast.success(`You copied ${activeBtn} receipt`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }

    return (
        <div className={styles.container}>
            <div className={styles.leftBlock}>
                {
                    pay__method.map(res =>
                        <button className={activeBtn === res.name ? styles.activeBtn : styles.notActiveBtn}
                                onClick={() => setActiveBtn(res.name)}>
                            {res.name}
                        </button>
                    )
                }
            </div>
            <div className={styles.rightBlock}>
                {
                    pay__method
                        .filter(res => res.name === activeBtn)
                        .map(res =>
                            <div className={styles.receiptBlock}>
                                <Image width={120} height={120} src={res.image} alt={res.image}/>
                                <div className={styles.block}>
                                    <div className={styles.receipt}>
                                        <p>{res.receipt}</p>
                                        <button onClick={() => copy__button__function(res.receipt)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke-width="1.5">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className={styles.network}>
                                        <p>{res.network}</p>
                                    </div>
                                </div>
                            </div>
                        )
                }
            </div>
        </div>
    );
};

export default PayBlock;