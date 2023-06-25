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
import {Statistic} from "@/models/user";
import UserService from "@/services/UserService";
import {number} from "prop-types";
import LocalisationService from "@/services/LocalisationService";

interface IndexProps {
    instagramData: IPost[];
    translation: Translation;

    OurProjectsArray: IProject[];
    OurTeamArray: ITeam[];
    OurPartnersArray: ITeam[];
    StatisticInfo: Statistic;
}

const Index: FC<IndexProps> =
    ({
         instagramData,
         translation,
         OurProjectsArray,
         OurTeamArray,
         OurPartnersArray,
         StatisticInfo
     }) => {

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
                    <WhatHasAlreadyBeenDone Statistic={StatisticInfo}  WhatHasAlreadyBeenDone={localisationText.WhatHasAlreadyBeenDone}/>
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
    const preparedTranslation = await LocalisationService.PrepareTranslationText(jsonData);

    // const url = `https://graph.instagram.com/me?fields=id,username&access_token=${process.env.INSTAGRAM_API}`;
    let instagramData:IPost[] = [];
    try {
        const { data: response } = await axios.get<IPost[]>(`https://graph.instagram.com/me/media?fields=id,username,caption,media_type,media_url,children{media_url,thumbnail_url},timestamp,permalink&access_token=${process.env.INSTAGRAM_API}`);
        instagramData = response;
        // console.log(response)
    } catch (e) {
        console.log(e);
    }

    let projects: IProject[] = [];
    let teamResponse: ITeam[] = [];
    let partnersResponse: ITeam[] = [];

    try {
        const projectsData = await axios.get<IProject[]>('https://ss.egartsites.pp.ua/api/Projects/GetPublic?skip=0&limit=100');
        const teamData = await axios.get<ITeam[]>('https://ss.egartsites.pp.ua/api/Users/GetMembers');
        const partnersData = await axios.get<ITeam[]>('https://ss.egartsites.pp.ua/api/Users/GetPartners');
        projects = projectsData.data;
        teamResponse = teamData.data;
        partnersResponse = partnersData.data;
    } catch (e) {
        console.error(e);
    }
    const StatisticValue: Statistic = await UserService.GetAllStatistic();

    return {
        props: {
            instagramData: instagramData,
            translation: preparedTranslation,

            OurProjectsArray: projects,
            OurTeamArray: teamResponse,
            OurPartnersArray: partnersResponse,
            StatisticInfo: StatisticValue,
        },
        revalidate: 600,
    };
}

export default Index;
