import { FC } from "react";
import {GetStaticProps} from 'next';
import {IPost} from '@/models/data';
import {Translation} from "@/models/text";
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
import {useRouter} from "next/router";

interface IndexProps {
    instagramData: IPost[];
    translation: Translation;
}

const Index: FC<IndexProps> = ({ instagramData, translation }) => {

    const router = useRouter();
    const language = router.locale || 'en';
    const localisationText = translation[language];

    return (
        <Layout title={"Головна"} keywords={""} lang={language} headerText={localisationText.HeaderText} bottomText={localisationText.BottomText}>
            <section id="B1">
                <IntroText MainText={localisationText.MainText} />
            </section>
            <section id="B2">
                <OurProjects OurProjects={localisationText.OurProjects}/>
            </section>
            <section id="B3">
                {instagramData?.length != 0 && <OurLastestNews instagramData={instagramData} />}
            </section>
            <section id="B4">
                <WhatHasAlreadyBeenDone WhatHasAlreadyBeenDone={localisationText.WhatHasAlreadyBeenDone}/>
            </section>
            <section id="B56">
                <WantToDonate IWantToDonate={localisationText.IWantToDonate}/>
                <HumanitarianAid HumanitarianAid={localisationText.IWantToHelpWithHumanitarianAid}/>
            </section>
            <section id="B7">
                <OurPartners OurPartners={localisationText.OurPartners}/>
            </section>
            <section id='B8'>
                <OurTeam OurTeam={localisationText.OurTeam}/>
            </ section>
            <section id="B9">
                <OfficialAidRequest OfficialAid={localisationText.LinkToForm}/>
            </section>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps<IndexProps> = async (context) => {
    const filePath = path.join(process.cwd(), 'data', 'localisation.json');
    const data = fs.readFileSync(filePath);
    const jsonData: Translation = JSON.parse(data.toString());

    try {
        const { data: response } = await axios.get<IPost[]>(`https://graph.instagram.com/me/media?fields=id,username,caption,media_type,media_url,children{media_url,thumbnail_url},timestamp,permalink&access_token=${process.env.INSTAGRAM_KEY}`);

        return {
            props: {
                instagramData: response,
                translation: jsonData,
            },
            revalidate: 600,
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                instagramData: [],
                translation: jsonData,
            },
            revalidate: 600,
        };
    }
}

export default Index;