import {Translation} from "@/models/text";
import UserService from "@/services/UserService";

export default class LocalisationService {
    static PrepareTranslationText = async (translation: Translation): Promise<Translation> => {

        translation["en"].MainText.main = await UserService.GetOptionByName("MainTextEN");
        translation["ua"].MainText.main = await UserService.GetOptionByName("MainTextUA");

        translation["en"].MainText.button = await UserService.GetOptionByName("ButtonTextEN");
        translation["ua"].MainText.button = await UserService.GetOptionByName("ButtonTextUA");

        translation["en"].AboutUs.about__text = await UserService.GetOptionByName("AboutUsEN");
        translation["ua"].AboutUs.about__text = await UserService.GetOptionByName("AboutUsUA");

        translation["en"].AboutUs.mission__text = await UserService.GetOptionByName("OurMissionEN");
        translation["ua"].AboutUs.mission__text = await UserService.GetOptionByName("OurMissionUA");

        translation["en"].AboutUs.value__text = await UserService.GetOptionByName("ValueEN");
        translation["ua"].AboutUs.value__text = await UserService.GetOptionByName("ValueUA");

        return translation;
    }
}
