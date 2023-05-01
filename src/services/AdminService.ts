import {UserDTO, UserRole} from "@/models/user";
import $api from "@/http/init";
import {IProjectPostRequestBody, IProjectPrivate, IProjectPutRequestBody, Option} from "@/models/data";
import {toast} from "react-toastify";

export default class AdminService {
    static fetchMembers = async (skip: number, limit: number,  role: UserRole): Promise<UserDTO[]> => {
        const { data } = await $api.get<UserDTO[]>(`/Users?skip=${skip}&limit=${limit}&role=${role}`);
        return data;
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

    static GetOptions = async (): Promise<Option[]> => {
        try {
            const { data } = await $api.get<Option[]>('/Options');
            return data;
        } catch (e) {
            console.log(e);
            return [];
        }
    }

    static ChangeOption = async (name: string, value: string): Promise<void> => {
        try {
            await $api.put(`/Options/${name}`, value, {
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
}
