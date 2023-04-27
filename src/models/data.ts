export interface IAdmin {
    token: string;
    isMaster: boolean;
}

export interface IProject {
    name: string;
    description_EN: string;
    description_UA: string;
    photos: [string];
    createdAt: any;
}

export interface ITeam {
    fullName: string;
    photo: string;
    extras: string;
}

export interface IOffer {
    "name": string,
    "phone": string,
    "email": string,
    "offer": string
}

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