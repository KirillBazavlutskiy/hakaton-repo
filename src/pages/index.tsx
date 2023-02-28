import {FC, useEffect, useState} from "react";

import { Layout } from '@/layouts/Layout';
import IntroText from "@/components/IntroText/IntroText";
import OurProjects from "@/components/OurProjects/OurProjects";

import OurLastestNews from "@/components/B3/OurLastestNews";
import OurPartners from "@/components/B7/OurPartners";
import BeforeFooter from "@/components/B9/BeforeFooter";
import Ellipse from "@/components/Style/Ellipse";
import WhatHasAlreadyBeenDone from "@/components/B4/WhatHasAlreadyBeenDone/WhatHasAlreadyBeenDone";
import B56 from '@/components/B5B6/B56'


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

const Index: FC = () => {
    const [state, setState] = useState<IPost[]>();

    const getData = async () => {
        const url = `https://graph.instagram.com/me/media?fields=id,username,caption,media_type,media_url,children{media_url,thumbnail_url},timestamp,permalink&access_token=IGQVJYVDdyMm16ekFQYVl4OWxQZAmVVNHZATQ0sxVXF0eS1FckVvVHE1OTVEX00xTEFXR01EQngzM1hTelFEVXA2d1psMEx1Y2RWdUJiakM0Y0ZAodzlYRlY1b3RFUVp2WDREWFZANbllEblplZAExyZA3pDaAZDZD`;
        const data = await fetch(url);
        return await data.json();
    }

    useEffect(() => {
        getData()
				.then(res => {
					setState(res.data);                    
				})
				.catch(() => {
					console.log('err');
				});
    }, []);
    

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
                {
                    state && <OurLastestNews posts={state} />
                }
            </section>
            <section id="B4">
                <WhatHasAlreadyBeenDone />
            </section>
            <section id="B56">
                <B56/>
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