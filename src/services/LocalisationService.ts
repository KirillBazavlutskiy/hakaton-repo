import {Translation} from "@/models/text";
import axios from "axios";
import {toast} from "react-toastify";

export default class LocalisationService {
    static GetLocalisation = async (): Promise<Translation> => {
        const { data } = await axios.get<Translation>('/api/localisation');
        return data;
    }
    static SetLocalisation = async (translation: Translation): Promise<void> => {
        try {
            await axios.put('/api/localisation', translation);
            toast.success('Змінено!', {
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
}
