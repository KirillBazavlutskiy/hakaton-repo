export interface IAdmin {
    token: string;
    isMaster: boolean;
}

export interface IProject {
    id: string
    name: string;
    description_EN: string;
    description_UA: string;
    imageUrl: string;
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