import {CookiesSet, LoginRequest, RegisterRequest, TokenBody} from "@/models/auth";
import $api from "@/http/init";
import Cookies from "universal-cookie";
import {UserDTO} from "@/models/user";
import {changeUserStatus} from "@/redux/Slices/UserSlice";
import {store} from "@/redux/store";
import axios from "axios";
import {toast} from "react-toastify";

export default class AuthService {
    static Login = async (body: LoginRequest): Promise<void> => {
        try {
            const res = await $api.post<TokenBody>('/Auth/Login', body);
            this.setCookies({
                token: res.data.token,
                tokenExpires: res.data.expires,
                sessionId: res.data.session.id,
                sessionExpires: res.data.session.expires
            });
            await this.GetMe();
        } catch (e) {
            console.log(e);
        }
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
        try {
            const cookies = new Cookies();
            const res = await axios.get<TokenBody>(`https://ss.egartsites.pp.ua/api/Auth/RenewToken/${cookies.get('UserId')}`, {
                headers: {
                    SessionId: cookies.get('sessionId')
                }
            });
            this.setCookies({
                token: res.data.token,
                tokenExpires: res.data.expires,
                sessionId: res.data.session.id,
                sessionExpires: res.data.session.expires
            });
            await this.GetMe();
        } catch (e) {
            console.log(e);
        }
    }

    static ByEmailChallenge = async (email: string): Promise<void> => {
        try {
            const res = await $api.post<TokenBody>('/Auth/ByEmailChallenge', `email=${email}`);
            this.setCookies({
                token: res.data.token,
                tokenExpires: res.data.expires,
                sessionId: res.data.session.id,
                sessionExpires: res.data.session.expires
            });
        } catch (e) {
            console.log(e);
        }
    }

    static Register = async (regData: RegisterRequest): Promise<void> => {
        try {
            const res = await $api.post<TokenBody>('/Auth/Register', regData);
            this.setCookies({
                token: res.data.token,
                tokenExpires: res.data.expires,
                sessionId: res.data.session.id,
                sessionExpires: res.data.session.expires
            });
            toast.success('Перевірте вашу почтову скриньку!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } catch (e) {
            console.log(e);
        }
    }

    private static setCookies = ({ token, tokenExpires, sessionId, sessionExpires }: CookiesSet): void => {
        const cookies = new Cookies();
        cookies.set('token', token);
        cookies.set('tokenExpires', tokenExpires);
        cookies.set('sessionId', sessionId);
        cookies.set('sessionExpires', sessionExpires);
    }
}
