import styles from './PayBlock.module.scss';
import { SectionCaption } from "@/components/SectionCaption/SectionCaption";
import {FC, useState} from "react";
import {IWantToDonate} from "@/models/text";
import QRCode from 'react-qr-code';

interface PayBlockProps {
    PayBlock: IWantToDonate;
}

const PayBlock:FC<PayBlockProps> = (PayBlock) => {
    //Массив
    const [payReceiptsArray, setPayReceiptsArray] = useState([
        {name: "PayPal", receipt: "paypal__receipt", network: null},

        {name: "Bitcoin", receipt: "BTC__receipt", network: "BTC"},

        {name: "Ethereum", receipt: "ETH__receipt", network: "ETH-20"},

        {name: "Tether", receipt: "USDT__receipt", network: "THR"},
    ])
    //TODO: аменить на запрос из базы данных

    //Переменная, хранящая активное значеине кнопки
    const [activeButton, setActiveButton] = useState<string>("PayPal")

    return (
        <div className={styles.container}>
            <div className={styles.block}>
                <div className={styles.linksBlock}>
                    {/*Вывод кнопок (фильтрация прописана на тот случай, если способов оплаты в одной платежной системе больше одной)*/}
                    {payReceiptsArray
                        //Получаем все поля name из массива
                        .map(item => item.name)

                        //Фильтруем(для вывода только одного способа оплаты)
                        .filter((name, index, self) => self.indexOf(name) === index)

                        //Выводим кнопки, со значениями отфильтрованного массива
                        .map(name =>
                        <button
                            className={activeButton === name ? styles.activeBtn : styles.notActiveBtn}
                            onClick={() => setActiveButton(name)}>
                            {name}
                        </button>
                    )}
                </div>
                <div className={styles.secondBlock}>
                    <div className={styles.qrCode}>
                        {/*Компонент установленного модуля, для конвертации string данных в qr-код*/}
                        <QRCode scale="120" value="hello"/>
                        {/*TODO: Решить проблему с отображением QR-кода*/}
                    </div>
                    {/*Общий вывод*/}
                    {payReceiptsArray
                        //Фильтрация массива
                        .filter(responce => responce.name === activeButton)

                        //Вывод отфильтрованного массива
                        .map(responce =>
                            <div className={styles.receiptBlock}>
                                <div className={styles.receipt}>
                                    <div className={styles.textBlock}>
                                        <p>{responce.receipt}</p>
                                    </div>
                                    <button onClick={() => navigator.clipboard.writeText(responce.receipt)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             stroke-width="1.5" >
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"/>
                                        </svg>
                                    </button>
                                </div>
                                <div className={responce.network === null ? styles.notNetwork : styles.activeNetwork}>
                                    <p>{responce.network}</p>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        </div>
    );
};

export default PayBlock;