import {IProject, OfferRequest} from "@/models/data";
import $api from "@/http/init";
import {toast} from "react-toastify";
import AdminService from "@/services/AdminService";
import axios from "axios";
import {Statistic} from "@/models/user";

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

    static GetOptionByName = async (name: string): Promise<string> => {
        try {
            const { data } = await axios.get<string>(`https://ss.egartsites.pp.ua/api/Options/${name}`);
            return data;
        } catch (e) {
            console.log(e);
            return "";
        }
    }

    static GetAllStatistic = async (): Promise<Statistic> => {
        const Statistic: Statistic = {
            moneyCollected: "",
            medicalAid: '',
            militaryPersonnel: '',
            residentsOfDnipro: '',
            UkrainiansReceivedAssistance: '',
            MedicalFacilities: '',
            ChildrenReceivedAssistance: ''
        }

        try {
            const moneyCollectedValue = await UserService.GetOptionByName("Money Collected");
            const medicalAidValue = await UserService.GetOptionByName("MedicalAid");
            const militaryPersonnelValue = await UserService.GetOptionByName("MilitaryPersonnel");
            const residentsOfDniproValue = await UserService.GetOptionByName("ResidentsOfDnipro");
            const ukrainiansReceivedAssistanceValue = await UserService.GetOptionByName("UkrainiansRecievedAssistance");
            const MedicalFacilitiesValue = await UserService.GetOptionByName("MedicalFacilities");
            const ChildrenReceivedAssistanceValue = await UserService.GetOptionByName("ChildrenReceivedAssistance");

            Statistic.moneyCollected = moneyCollectedValue;
            Statistic.medicalAid = medicalAidValue;
            Statistic.militaryPersonnel = militaryPersonnelValue;
            Statistic.residentsOfDnipro = residentsOfDniproValue;
            Statistic.UkrainiansReceivedAssistance = ukrainiansReceivedAssistanceValue;
            Statistic.MedicalFacilities = MedicalFacilitiesValue;
            Statistic.ChildrenReceivedAssistance = ChildrenReceivedAssistanceValue;
        } catch (e) {
            console.log(e);
        }

        return Statistic;
    }
}
