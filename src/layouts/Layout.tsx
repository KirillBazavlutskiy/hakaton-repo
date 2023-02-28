import Head from "next/head";
import cn from 'classnames';

import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

import s from './Layout.module.css';

interface LayoutProps {
    children: React.ReactNode,
    keywords: string,
    title?: string,
    className?: string,
}

export function Layout({ children, keywords, title, className }: LayoutProps): JSX.Element {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content={"hakaton-app " + keywords} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
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