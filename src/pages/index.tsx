import {FC, useEffect} from "react";
import {GetStaticProps} from 'next';
import {IPost, IProject, ITeam} from '@/models/data';
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
import AuthService from "@/services/AuthService";
import AboutUs from "@/components/AboutUs/AboutUs";

interface IndexProps {
    instagramData: IPost[];
    translation: Translation;

    OurProjectsArray: IProject[];
    OurTeamArray: ITeam[];
    OurPartnersArray: ITeam[];
}

const Index: FC<IndexProps> = ({ instagramData, translation, OurProjectsArray, OurTeamArray, OurPartnersArray }) => {

    const router = useRouter();
    const language = router.locale || 'en';
    const localisationText = translation[language];

    useEffect(() => {
        AuthService.GetMe();
    }, [])

    return (
        <Layout title={"Головна"} keywords={""} lang={language} headerText={localisationText.HeaderText} bottomText={localisationText.BottomText}>
            <section id="B1">
                <IntroText MainText={localisationText.MainText} />
                <AboutUs languageProps={localisationText.AboutUs}/>
            </section>
            <section id="B2">
                <OurProjects OurProjects={localisationText.OurProjects} Array={OurProjectsArray}/>
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
                <OurPartners OurPartners={localisationText.OurPartners} Array={OurPartnersArray}/>
            </section>
            <section id='B8'>
                <OurTeam OurTeam={localisationText.OurTeam} Array={OurTeamArray}/>
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

        const res = await axios.get<IProject[]>('https://ss.egartsites.pp.ua/Projects/GetPublic');
        const team__responce = await axios.get<ITeam[]>('https://ss.egartsites.pp.ua/Users/GetMembers');
        const parnters__responce = await axios.get<ITeam[]>('https://ss.egartsites.pp.ua/Users/GetPartners');

        return {
            props: {
                instagramData: response,
                translation: jsonData,

                OurProjectsArray: res.data,
                OurTeamArray: team__responce.data,
                OurPartnersArray: parnters__responce.data,
            },
            revalidate: 600,
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                instagramData: [],
                translation: jsonData,
                
                OurProjectsArray: [],
                OurTeamArray: [],
                OurPartnersArray: [],
            },
            revalidate: 600,
        };
    }
}

export default Index;
