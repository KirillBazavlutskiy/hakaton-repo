export type HeaderText = {
    projects: string;
    news: string;
    statistic: string;
    partners: string;
    donate: string;
}
export type MainText = {
    main: string;
    button: string;
};
export type OurProjects = {
    main: string;
    donateButton: string;
};
export type OurLatestNews = string;
export type WhatHasAlreadyBeenDone = string;
export type IWantToDonate = {
    main: string;
    otherWays: string;
};
export type IWantToHelpWithHumanitarianAid = {
    main: string;
    fillTheForm: string;
    listOfNeeds: string;
    form: {
        name: string;
        phone: string;
        email: string;
        whatYouCanProvide: string;
        sendButton: string;
    };
};
export type OurPartners = string;
export type OurTeam = {
    main: string;
    description: string;
};
export type LinkToForm = {
    main: string;
    formLink: string;
};
export type BottomText = {
    privacyPolicy: string;
    donateButton: string;
};

export interface TranslatedLanguage {
    HeaderText: HeaderText;
    MainText: MainText;
    OurProjects: OurProjects;
    OurLatestNews: OurLatestNews;
    WhatHasAlreadyBeenDone: WhatHasAlreadyBeenDone;
    IWantToDonate: IWantToDonate
    IWantToHelpWithHumanitarianAid: IWantToHelpWithHumanitarianAid;
    OurPartners: OurPartners;
    OurTeam: OurTeam;
    LinkToForm: LinkToForm;
    BottomText: BottomText;
}

export interface Translation {
    [language: string]: TranslatedLanguage;
}