import { FC } from "react";
import {GetStaticPaths, GetStaticProps} from 'next';
import {IPost} from '@/models/data';
import {TranslatedLanguage, Translation} from "@/models/text";
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
import OurTeam from "@/components/OurTeam/OurTeam";

import fs from "fs";
import process from "process";
import path from "path";

interface IndexProps {
    instagramData: IPost[];
    localisationText: TranslatedLanguage;
    language: string;
}

const Index: FC<IndexProps> = ({ instagramData, localisationText, language}) => {

    return (
        <Layout title={"Головна"} keywords={""} lang={language}>
            <section id="B1">
                <IntroText MainText={localisationText.MainText} />
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

export const getStaticProps: GetStaticProps<IndexProps> = async (context) => {

    const { lang } = context.params as { lang: string };
    const filePath = path.join(process.cwd(), 'data', 'localisation.json');
    const data = fs.readFileSync(filePath);
    const jsonData: Translation = JSON.parse(data.toString());

    try {
        const { data: response } = await axios.get<IPost[]>(`https://graph.instagram.com/me/media?fields=id,username,caption,media_type,media_url,children{media_url,thumbnail_url},timestamp,permalink&access_token=${process.env.INSTAGRAM_KEY}`);

        return {
            props: {
                instagramData: response,
                localisationText: jsonData[lang || 'en'],
                language: lang
            }
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                instagramData: [],
                localisationText: jsonData[lang || 'en'],
                language: lang
            }
        };
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const filePath = path.join(process.cwd(), 'data', 'localisation.json');
    const data = fs.readFileSync(filePath);
    const keys = Object.keys(JSON.parse(data.toString()));

    const paths = keys.map((key) => ({
        params: { lang: key },
    }))

    return { paths, fallback: false }
}

export default Index;