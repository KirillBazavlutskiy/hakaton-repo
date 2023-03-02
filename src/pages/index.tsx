import {FC, useEffect, useState} from "react";

import { Layout } from '@/layouts/Layout';
import IntroText from "@/components/IntroText/IntroText";
import OurProjects from "@/components/OurProjects/OurProjects";
import WhatHasAlreadyBeenDone from "@/components/WhatHasAlreadyBeenDone/WhatHasAlreadyBeenDone";
import WantToDonate from '@/components/WantToDonate/WantToDonate';
import HumanitarianAid from '@/components/HumanitarianAid/HumanitarianAid';
import OurPartners from "@/components/OurPartners/OurPartners";

import OurLastestNews from "@/components/OurLastestNews/OurLastestNews";
import BeforeFooter from "@/components/B9/BeforeFooter";
import Ellipse from "@/components/Style/Ellipse";

const Index: FC = () => {
    return (
        <Layout title={"Головна"} keywords={""}>
            <Ellipse top={50} left='auto' right={70} width={900} height={900} color1={'#a09af1'} color2={'transparent'} />
            <Ellipse top={1000} left={30} right='auto' width={400} height={300} color1={'#a09af1'} color2={'transparent'} />
            <section id="B1">
                <IntroText />
            </section>
            <section id="B2">
                <OurProjects />
            </section>
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
                <OurPartners/>
            </section>
            <section id="B9">
                <BeforeFooter/>
            </section>
        </Layout>
    )
}



export default Index;