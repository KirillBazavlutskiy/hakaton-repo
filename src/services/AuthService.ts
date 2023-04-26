import {LoginRequest, TokenBody} from "@/models/auth";
import $api from "@/http/init";
import Cookies from "universal-cookie";
import {UserDTO} from "@/models/user";
import {changeUserStatus} from "@/redux/Slices/UserSlice";
import {store} from "@/redux/store";
import axios from "axios";

export default class AuthService {
    static Login = async (body: LoginRequest): Promise<void> => {

        const res = await $api.post<TokenBody>('/Auth/Login', body);
        const cookies = new Cookies();
        cookies.set('token', res.data.token);
        cookies.set('tokenExpires', res.data.expires);
        cookies.set('sessionId', res.data.session.id);
        cookies.set('sessionExpires', res.data.session.expires);
        await this.GetMe();
    }

    static GetMe = async (): Promise<void> => {
        const cookies = new Cookies();
        const sessionId: string = cookies.get('sessionId');

        const res = await $api.get<UserDTO>('/Auth/GetMe', {
            headers: {
                'SessionId': sessionId,
            }
        });

        try {
            cookies.set('UserId', res.data.id);
            store.dispatch(changeUserStatus(res.data.role));
        } catch (e) {
            console.log(e);
        }
    }

    static RefreshSession = async (): Promise<void> => {
        const cookies = new Cookies();
        const res = await axios.get<TokenBody>(`/Auth/RenewToken/${cookies.get('UserId')}`, {
            headers: {
                SessionId: cookies.get('sessionId')
            }
        });
        cookies.set('token', res.data.token);
        cookies.set('tokenExpires', res.data.expires);
        cookies.set('sessionId', res.data.session.id);
        cookies.set('sessionExpires', res.data.session.expires);
        await this.GetMe();
    }

    static ByEmailChallenge = async (email: string): Promise<void> => {
        await axios.post('/Auth/ByEmailChallenge', email);
    }
}
