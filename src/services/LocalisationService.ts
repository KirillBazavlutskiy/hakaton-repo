import {Translation} from "@/models/text";
import axios from "axios";

export default class LocalisationService {
    static GetLocalisation = async (): Promise<Translation> => {
        const { data } = await axios.get<Translation>('/api/localisation');
        return data;
    }
}