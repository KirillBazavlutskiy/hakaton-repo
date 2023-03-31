import Head from "next/head";
import cn from 'classnames';

import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

import s from './Layout.module.css';
import 'react-toastify/dist/ReactToastify.css';
import {FC, ReactNode} from "react";

interface LayoutProps {
    lang: string
    children: ReactNode,
    keywords: string,
    title?: string,
    className?: string,
}

export const Layout: FC<LayoutProps> = ({ children, keywords, title, className, lang }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content={"hakaton-app " + keywords} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta lang={lang} />
            </Head>
            <div className={s.wrapper}>
                <Header className={s.header} />
                <div className={cn(s.body)}>
                    {children}
                </div>
                <Footer className={s.footer} />
            </div>
        </>
    );
}