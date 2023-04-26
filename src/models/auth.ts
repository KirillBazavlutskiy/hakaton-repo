import {UserRole} from "@/models/user";

export interface AddUserRequest {
    fullName: string;
    email: string;
    phone: string;
    role: UserRole;
    password: string | null;
    extras: string | null;
    photo: string;
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

export interface UpdateUserRequest {
    fullName: string | null;
    email: string | null;
    phone: string | null;
    role: UserRole | null;
    extras: string | null;
    photo: string | null;
}

export interface OptionDTO {
    name: string;
    value: string;
}
