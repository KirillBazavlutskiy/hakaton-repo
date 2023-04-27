import {UserDTO, UserRole} from "@/models/user";
import $api from "@/http/init";

export default class AdminService {
    static fetchMembers = async (skip: number, limit: number,  role: UserRole): Promise<UserDTO[]> => {
        const { data } = await $api.get<UserDTO[]>(`/Users?skip=${skip}&limit=${limit}&role=${role}`);
        return data;
    }
}
