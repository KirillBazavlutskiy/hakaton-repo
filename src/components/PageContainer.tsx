import React, {FC} from "react";
import Head from "next/head";

interface MainContainerProps {
    children: React.ReactNode;
    keywords: string;
    title: string;
}
const PageContainer: FC<MainContainerProps> = ({ children, keywords , title}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content={"hakaton-app " + keywords} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                {children}
            </div>
        </>
    );
};

export default PageContainer;