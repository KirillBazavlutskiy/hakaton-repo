import {FC} from "react";

import PageContainer from "@/components/PageContainer";
import OurLastestNews from "@/components/B3/OurLastestNews";
import OurPartners from "@/components/B7/OurPartners";
import Header from "@/components/B1/Header/Header";
import BeforeFooter from "@/components/B9/BeforeFooter";
import IntroText from "@/components/B1/IntroText/IntroText";
import Sections from "@/components/B2/Sections/Sections";
import Donate from "@/components/B5/Donate";
import Ellipse from "@/components/Style/Ellipse";
import WhatHasAlreadyBeenDone from "@/components/B4/WhatHasAlreadyBeenDone/WhatHasAlreadyBeenDone";
import HumanitarianAid from "@/components/B6/HumanitarianAid/HumanitarianAid";

const Index = () => {
    return (
        <PageContainer title={"Головна"} keywords={""}>
            <Ellipse top={50} left='auto' right={70} width={900} height={900} color1={'#a09af1'} color2={'transparent'} />
            <Ellipse top={1000} left={30} right='auto' width={400} height={300} color1={'#a09af1'} color2={'transparent'} />
            <Header />
            <section id="B1">
                <IntroText />
            </section>
            <section id="B2">
                <Sections />
            </section>
            <section id="B3">
                <OurLastestNews/>
            </section>
            <section id="B4">
                <WhatHasAlreadyBeenDone />
            </section>
            <section id="B5">
                <Donate/>
            </section>
            <section id="B6">
                <HumanitarianAid />
            </section>
            <section id="B7">
                <OurPartners/>
            </section>
            <section id="B9">
                <BeforeFooter/>
            </section>
        </PageContainer>
    )
}

export default Index;