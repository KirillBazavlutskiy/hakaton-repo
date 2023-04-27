import {Dispatch, SetStateAction} from "react";
import {AxiosResponse} from "axios";

export default class AdminHooks {
    static async fetchData<T>(request: (...args: any[]) => Promise<T>, setState: Dispatch<SetStateAction<T>>): Promise<void> {
        const data = await request();
        setState(data);
    }
}
