import {UserAsPartnerOrMemberDTO, UserDTO, UserRole} from "@/models/user";
import $api from "@/http/init";
import {IOfferAdmin, IProjectPostRequestBody, IProjectPrivate, IProjectPutRequestBody, Option} from "@/models/data";
import {toast} from "react-toastify";
import {AddUserRequest, UpdateUserRequest} from "@/models/auth";

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

    static AddUser = async (partner: AddUserRequest): Promise<void> => {
        try {
            const photo = await this.SendPhotos(partner.photo);
            await $api.post('/Users', { ...partner, photo: photo[0] })
            toast.success('Додано!', {
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

    static UpdateUser = async (user: UpdateUserRequest): Promise<void> => {
        try {
            let photosLinks: string[] = await AdminService.SendPhotos(user.photoFile);
            await $api.put(`/Users/${user.id}`, {
                ...user,
                photo: photosLinks.length === 0 ? user.photoLinks[0] : photosLinks[0]
            })
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

    static DeleteUser = async (id: string) => {
        try {
            await $api.delete(`/Users/${id}`);
            toast.info('Видалено!', {
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

    static ChangeProject = async (id: string, project: IProjectPutRequestBody): Promise<void> => {
        try {
            let photosLinks: string[] = await AdminService.SendPhotos(project.photosFiles);
            await $api.put(`/Projects/${id}`, {
                ...project,
                photos: photosLinks.length === 0 ? project.photosLinks : photosLinks
            })
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

    static DeleteProject = async (id: string): Promise<void> => {
        try {
            await $api.delete(`/Projects/${id}`);
            toast.info('Видалено!', {
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

    static GetOptions = async (): Promise<Option[]> => {
        try {
            const { data } = await $api.get<Option[]>('/Options');
            return data;
        } catch (e) {
            console.log(e);
            return [];
        }
    }

    static SetOption = async (name: string, value: string): Promise<void> => {
        try {
            await $api.put(`/Options/${name}`, JSON.stringify(value), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
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
            console.log(e)
        }
    }

    static DeleteOption = async (name: string): Promise<void> => {
        try {
            await $api.delete(`/Options/${name}`);
            toast.info('Змінено!', {
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
            toast.info('Помічено!', {
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
            toast.error('Помилка!', {
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
    }

    static HelpOfferAddTag = async (id: string, tag: string): Promise<void> => {
        try {
            await $api.post(`/HelpOffers/AddTag/${id}`, tag);
            toast.success('Додано!', {
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
            toast.error('Помилка!', {
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
    }

    static HelpOfferRemoveTag = async (id: string, tag: string): Promise<void> => {
        try {
            await $api.post(`/HelpOffers/RemoveTag/${id}`, tag);
            toast.info('Видалено!', {
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
            toast.error('Помилка!', {
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
    }
}
