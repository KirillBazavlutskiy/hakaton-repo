import {FC, useEffect, useState} from "react";

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

const Index: FC = () => {
    return (
        <Layout title={"Головна"} keywords={""}>
            <section id="B1">
                <IntroText />
            </section>
            {/*<section id="B2">*/}
            {/*    <OurProjects />*/}
            {/*</section>*/}
            <section id="B3">
                <OurLastestNews />
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