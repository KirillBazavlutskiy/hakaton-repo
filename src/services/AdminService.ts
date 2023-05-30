import {UserDTO, UserRole} from "@/models/user";
import $api from "@/http/init";
import {IOfferAdmin, IProjectPostRequestBody, IProjectPrivate, IProjectPutRequestBody, Option} from "@/models/data";
import {AddUserRequest, UpdateUserRequest} from "@/models/auth";
import {AboutUsOptionsStateType} from "@/components/AdminPage/AdminComponents/AboutUs/AboutUs";
import MessageService from "@/services/MessageService";

export default class AdminService {
    static SendPhotos = async (photosFiles: File[]): Promise<string[]> => {
        let photosLinks: string[] = [];
        try {
            await Promise.all(
                photosFiles.map(async (photo, index) => {
                    const { data } = await $api.post<string>('/Files/UploadFile', { file: photo },
                        { headers: {'Content-Type': 'multipart/form-data'} }
                    );
                    photosLinks.push(data);
                })
            );
        } catch (e) {
            console.log(e)
        }
        return photosLinks;
    }

    static FetchUsers = async (role: UserRole): Promise<UserDTO[]> => {
        try {
            const { data } = await $api.get<UserDTO[]>(`/Users?skip=0&limit=100&role=${role}`);
            return data;
        } catch (e) {
            return [];
        }
    }

    static FetchUser = async (id: string): Promise<UserDTO | null> => {
        try {
            const { data } = await $api.get<UserDTO>(`/Users/${id}`);
            return data;
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    static AddUser = async (partner: AddUserRequest): Promise<void> => {
        try {
            const photo = await this.SendPhotos(partner.photo);
            await $api.post('/Users', { ...partner, photo: photo[0] })
            MessageService.ShowMessageSuccess("Додано!");

        } catch (e) {
            console.log(e);
        }
    }

    static UpdateUser = async (user: UpdateUserRequest): Promise<void> => {
        try {
            const currentUser = await this.FetchUser(user.id);

            let changedFields: any = {};

            const userKeys: string[] = Object.keys(user);
            if (currentUser !== null) {
                if (currentUser.fullName !== user.fullName) {
                    changedFields['fullName'] = user.fullName;
                }
                if (currentUser.email !== user.email) {
                    changedFields['email'] = user.email;
                }
                if (currentUser.phone !== user.phone) {
                    changedFields['phone'] = user.phone;
                }
                if (currentUser.extras !== user.extras) {
                    changedFields['extras'] = user.extras;
                }
                if (user.photoLinks.length !== 0) {
                    changedFields['photo'] = await AdminService.SendPhotos(user.photoFile);
                }
            }
            await $api.put(`/Users/${user.id}`, {
                ...changedFields,
            })
            MessageService.ShowMessageSuccess("Змінено!");

        } catch (e) {
          console.log(e);
        }
    }

    static DeleteUser = async (id: string) => {
        try {
            await $api.delete(`/Users/${id}`);
            MessageService.ShowMessageInfo("Видалено!");

        } catch (e) {
            console.log(e);
        }
    }

    static GetProjectsPrivate = async (): Promise<IProjectPrivate[]> => {
        try {
            const { data } = await $api.get<IProjectPrivate[]>('/Projects');
            return data;
        } catch (e) {
            return [];
        }
    }

    static AddProject = async (project: IProjectPostRequestBody): Promise<void> => {
        try {
            let photosLinks: string[] = await AdminService.SendPhotos(project.photos);
            await $api.post('/Projects', {
                ...project,
                photos: photosLinks,
            })
            MessageService.ShowMessageInfo("Змінено!");

        } catch (e) {
            console.log(e);
        }
    }

    static ChangeProject = async (id: string, project: IProjectPutRequestBody): Promise<void> => {
        try {
            let photosLinks: string[] = await AdminService.SendPhotos(project.photosFiles);
            await $api.put(`/Projects/${id}`, {
                ...project,
                photos: photosLinks.length === 0 ? project.photosLinks : photosLinks
            })
            MessageService.ShowMessageSuccess("Змінено!");

        } catch (e) {
            console.log(e);
        }
    }

    static DeleteProject = async (id: string): Promise<void> => {
        try {
            await $api.delete(`/Projects/${id}`);
            MessageService.ShowMessageInfo("Додано!");
        } catch (e) {
            console.log(e);
        }
    }

    static GetOptions = async (): Promise<Option[]> => {
        try {
            const { data } = await $api.get<Option[]>('/Options');
            return data.filter((option) =>
                option.name !== "AboutUsEN" && option.name !== "OurMissionEN" && option.name !== "ValueEN" && option.name !== "MainTextEN" && option.name !== "ButtonTextEN"
                && option.name !== "AboutUsUA" && option.name !== "OurMissionUA" && option.name !== "ValueUA" && option.name !== "MainTextUA" && option.name !== "ButtonTextUA");
        } catch (e) {
            console.log(e);
            return [];
        }
    }

    static GetOptionsForAboutUsSection = async (language: "EN" | "UA"): Promise<Option[]> => {
        try {
            const { data } = await $api.get<Option[]>('/Options');
            if (language === "EN") {
                return  data.filter((option) =>
                    option.name === "AboutUsEN" || option.name === "OurMissionEN" || option.name === "ValueEN" || option.name === "MainTextEN" || option.name === "ButtonTextEN");
            } else {
                return data.filter((option) =>
                    option.name === "AboutUsUA" || option.name === "OurMissionUA" || option.name === "ValueUA" || option.name === "MainTextUA" || option.name === "ButtonTextUA");
            }
        } catch (e) {
            console.log(e);
            return [];
        }
    }

    static SetOptionsForAboutSection = async (options: AboutUsOptionsStateType): Promise<void> => {
        try {
            await Promise.all(
                [ ...options.EN, ...options.UA ].map(async (option) => {
                    await this.SetOption(option.name, option.value, false);
                })
            );
            MessageService.ShowMessageSuccess("Змінено!");
        } catch (e) {
            MessageService.ShowMessageError("Помилка!");
        }
    }

    static SetOption = async (name: string, value: string, showMessage: boolean = true): Promise<void> => {
        try {
            await $api.put(`/Options/${name}`, JSON.stringify(value), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (showMessage) MessageService.ShowMessageSuccess("Змінено!");
        } catch (e) {
            console.log(e)
        }
    }

    static DeleteOption = async (name: string): Promise<void> => {
        try {
            await $api.delete(`/Options/${name}`);
            MessageService.ShowMessageSuccess("Змінено!");
        } catch (e) {
            console.log(e)
        }
    }

    static GetHelpOffers = async (isViewed: boolean, tags: string[]): Promise<IOfferAdmin[]> => {
        try {
            const tagsList: string = tags.length !== 0 ? `&tags=${tags.join('&tags=')}` : '';
            const { data } = await $api.get<IOfferAdmin[]>(`/HelpOffers?skip=0&limit=100&isViewed=${isViewed}${tagsList}`)
            return data;
        } catch (e) {
            console.log(e);
            return [];
        }
    }

    static ViewHelpOffer = async (id: string): Promise<void> => {
        try {
            await $api.put(`/HelpOffers/${id}`)
            MessageService.ShowMessageInfo("Помічено!");
        } catch (e) {
            console.log(e);
            MessageService.ShowMessageError("Помилка!");
        }
    }

    static HelpOfferAddTag = async (id: string, tag: string): Promise<void> => {
        try {
            await $api.post(`/HelpOffers/AddTag/${id}`, tag);
            MessageService.ShowMessageSuccess("Додано!");
        } catch (e) {
            console.log(e);
            MessageService.ShowMessageError("Помилка!");
        }
    }

    static HelpOfferRemoveTag = async (id: string, tag: string): Promise<void> => {
        try {
            await $api.post(`/HelpOffers/RemoveTag/${id}`, tag);
            MessageService.ShowMessageInfo("Видалено!");
        } catch (e) {
            console.log(e);
            MessageService.ShowMessageError("Помилка!");
        }
    }
}
