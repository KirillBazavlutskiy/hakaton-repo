import { FC } from "react";
import { GetStaticProps } from 'next';
import axios from 'axios';

import { Layout } from '@/layouts/Layout';
import IntroText from "@/components/IntroText/IntroText";
import OurProjects from "@/components/OurProjects/OurProjects";
import OurLastestNews from "@/components/OurLastestNews/OurLastestNews";
import WhatHasAlreadyBeenDone from "@/components/WhatHasAlreadyBeenDone/WhatHasAlreadyBeenDone";
import WantToDonate from '@/components/WantToDonate/WantToDonate';
import HumanitarianAid from '@/components/HumanitarianAid/HumanitarianAid';
import OurPartners from "@/components/OurPartners/OurPartners";
import OfficialAidRequest from "@/components/OfficialAidRequest/OfficialAidRequest";

import Ellipse from "@/components/Style/Ellipse";
import OurTeam from "@/components/OurTeam/OurTeam";

export interface IPost {
    id: string,
    username: string,
    caption: string,
    media_type: string,
    media_url: string,
    timestamp: string,
    permalink: string,
    children: Children
}

interface Children {
    data: Child[]
}

interface Child {
    id: string,
    media_url: string,
}

const Index: FC = ({ response }: any) => {
    const instagramData: IPost[] = response.data;

    return (
        <Layout title={"Головна"} keywords={""}>
            <section id="B1">
                <IntroText />
            </section>
            <section id="B2">
                <OurProjects />
            </section>
            <section id="B3">
                {instagramData?.length != 0 && <OurLastestNews instagramData={instagramData} />}
            </section>
            <section id="B4">
                <WhatHasAlreadyBeenDone />
            </section>
            <section id="B56">
                <WantToDonate />
                <HumanitarianAid />
            </section>
            <section id="B7">
                <OurPartners />
            </section>
            <section id='B8'>
                <OurTeam />
            </ section>
            <section id="B9">
                <OfficialAidRequest />
            </section>
        </Layout>
    )
}

export default Index;

export const getStaticProps: GetStaticProps = async () => {
    try {
        const { data: response } = await axios.get(`https://graph.instagram.com/me/media?fields=id,username,caption,media_type,media_url,children{media_url,thumbnail_url},timestamp,permalink&access_token=${process.env.INSTAGRAM_KEY}`);

        return {
            props: {
                response
            }
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                response: []
            }
        };
    }
}