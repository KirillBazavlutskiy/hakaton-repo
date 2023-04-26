export type UserRole = 'Guest' | 'Client' | 'Partner' | 'Member' | 'Admin';

export interface UserAsMemberDTO {
    fullName: string;
    photo: string;
    extras: string;
}

export interface UserAsPartnerDTO {
    fullName: string;
    photo: string;
    extras: string;
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
