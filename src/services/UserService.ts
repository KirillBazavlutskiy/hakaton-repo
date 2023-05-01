import {IProject, IProjectPrivate, OfferRequest} from "@/models/data";
import $api from "@/http/init";
import {toast} from "react-toastify";
import AdminService from "@/services/AdminService";

export default class UserService {
    static AddHelpOffer = async (body: OfferRequest) => {
        try {
            const photosLinks = await AdminService.SendPhotos(body.photos);

            const res = await $api.post('/HelpOffers', { ...body, photos: photosLinks});
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

    static GetProjects = async () => {
        try {
            const { data } = await $api.get<IProject[]>('/Projects/GetPublic');
            return data;
        } catch (e) {
            return [];
        }
    }
}
