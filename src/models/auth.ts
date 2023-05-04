import {UserRole} from "@/models/user";

export interface AddUserRequest {
    fullName: string;
    email: string;
    phone: string;
    role: UserRole;
    password?: string;
    extras?: string;
    photo: File[];
}

export interface UpdateUserRequest {
    id: string;
    fullName: string;
    email: string;
    phone: string;
    role: UserRole;
    extras?: string;
    photoFile: File[];
    photoLinks: string;
}

export interface ChangePasswordRequest {
    oldPassword: string;
    newPassword: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface TokenBody {
    token: string;
    expires: Date;
    session: {
        id: string;
        expires: Date;
    }
}

export interface RegisterRequest {
    fullName: string;
    email: string;
    phone: string;
}

export interface OptionDTO {
    name: string;
    value: string;
}

export interface CookiesSet {
    token: string;
    tokenExpires: Date;
    sessionId: string;
    sessionExpires: Date;
}
