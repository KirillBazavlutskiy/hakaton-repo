export type UserRole = 'Guest' | 'Client' | 'Partner' | 'Member' | 'Admin';

export interface UserAsPartnerOrMemberDTO {
    fullName: string;
    photo: string;
    extras?: string;
}

export interface UserDTO {
    id: string;
    fullName: string;
    email: string;
    phone: string;
    role: UserRole;
    extras: string;
    photo: string;
    workWithUsers: string[];
    participateInProjects: string[];
}

export interface Statistic {
    moneyCollected: number;
    medicalAid: string;
    militaryPersonnel: string;
    residentsOfDnipro: string;
    UkrainiansReceivedAssistance: string;
    MedicalFacilities: string;
    ChildrenReceivedAssistance: string;
}
