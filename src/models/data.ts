import {DateTime} from "next-auth/providers/kakao";

export interface IAdmin {
    token: string;
    isMaster: boolean;
}

export interface IProject {
    name: string;
    description_EN: string;
    description_UA: string;
    photos: string[];
    createdAt: Date;
}

export interface IProjectPostRequestBody {
    name: string,
    description_UA: string,
    description_EN: string,
    photos: File[];
    participants: string[];
}

export interface IProjectPutRequestBody {
    name: string;
    description_EN: string;
    description_UA: string;
    photosFiles: File[];
    photosLinks: string[];
    createdAt: Date;
}

export interface IProjectPrivate extends IProject {
    id: string;
    publishedBy: string;
    participants: string[];
}

export interface ITeam {
    fullName: string;
    photo: string;
    extras: string;
}

export interface IOffer {
    hcuh: string,
    name: string,
    phone: string,
    email: string,
    offer: string,
    image: File[],
}

export interface IOfferAdmin {
    id: string;
    publishedBy: string;
    title: string;
    message: string;
    photos: string[];
    files: string[];
    tags: string[];
    viewedBy: null | string;
    createdAt: DateTime;
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

export interface OfferRequest {
    title: string;
    message: string;
    photos: File[];
    files: File[];
}

export interface Option {
    name: string;
    value: string;
}
