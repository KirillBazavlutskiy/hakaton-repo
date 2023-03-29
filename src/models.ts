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