import React, {FC} from "react";
import Head from "next/head";

interface PageContainerProps {
    children: React.ReactNode;
    keywords: string;
    title: string;
}
const PageContainer: FC<PageContainerProps> = ({ children, keywords , title}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content={"hakaton-app " + keywords} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div>
                {children}
            </div>
        </>
    );
};

export default PageContainer;