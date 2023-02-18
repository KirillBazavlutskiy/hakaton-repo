import React from 'react';
import * as process from "process";

export default function Instagram () {
    return (
        <div>

        </div>
    );
};

export const getStaticProps = async () => {
     const url = `https://graph.instagram.com/17895695668004550?fields=id,media_type,media_url,permalink,username,timestamp&access_token=${process.env.INSTAGRAM_KEY}`;
     const data = await fetch(url);
     const feed = await data.json();
     console.log(feed);
};