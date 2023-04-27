export type HeaderText = {
    projects: string;
    news: string;
    statistic: string;
    partners: string;
    donate: string;
}
export type AboutUs = {
  about__title: string;
  about__text: string;
  mission__title: string;
  mission__text: string;
  value__title: string;
  value__text:string;
};
export type Login = {
    loginH1: string;
    loginH2: string;
    toReg: string;
    field: {
        email: string;
    };
};
export type Registration = {
    loginH1: string;
    loginH2: string;
    toReg: string;
    fields: {
        name: string;
        phone: string;
        email: string;
    };
};
export type Auth = {
    mainText: string;
    Login: Login;
    Registration: Registration;
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
    needToAuth: string;
    login: string
    form: {
        hcuh: string;
        name: string;
        phone: string;
        email: string;
        whatYouCanProvide: string;
        sendButton: string;
        "imageHaveToAdd": string,
        "imageAdded": string
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
    Auth: Auth;
    AboutUs: string;
    Mission: string;
    Value: string;
    MainText: MainText;
    OurProjects: OurProjects;
    OutLatestNews: OurLatestNews;
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
