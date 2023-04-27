import {OfferRequest} from "@/models/data";
import $api from "@/http/init";
import {toast} from "react-toastify";

export default class UserService {
    static AddHelpOffer = async (body: OfferRequest) => {
        try {
            const res = await $api.post('/HelpOffers', body);
            if (res.status < 300) {
                toast.success('Успішно відправлено!', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        } catch (e) {
            console.log(e);
        }
    }
}
