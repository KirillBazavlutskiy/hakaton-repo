import {Dispatch, FC, SetStateAction, useState} from 'react';
import s from './ProjectModalWindow.module.scss';
import ModalWindow from "@/components/Style/ModalWindow/ModalWindow";
import Label from "@/components/AdminPage/AdminComponents/AdminUI/Label/Label";
import AdminService from "@/services/AdminService";
import {IProjectPrivate} from "@/models/data";

interface ProjectModalWindowProps {
    modalEdit: boolean;
    setModalEdit: Dispatch<SetStateAction<boolean>>;
    project: IProjectPrivate;
    fetchProjects: () => Promise<void>;
}

const ProjectModalWindow: FC<ProjectModalWindowProps> = ({ modalEdit, setModalEdit, project, fetchProjects}) => {

    const [projectState, setProjectState] = useState<IProjectPrivate>(project);
    const [photoFiles, setPhotoFiles] = useState<File[]>([]);

    return (
        <ModalWindow state={modalEdit} setState={setModalEdit}>
            <div className={s.modalContainer}>
                <Label type={'input'} maxLength={400} state={projectState} path={['name']} setState={setProjectState} />
                <Label type={'textarea'} height={200} maxLength={400} state={projectState} path={['description_UA']} setState={setProjectState} />
                <Label type={'textarea'} height={200} maxLength={400} state={projectState} path={['description_EN']} setState={setProjectState} />
                <label>
                    <p>{photoFiles.length === 0 ?
                        `Correct photos: ${projectState.photos.length}` :
                        `Added Photos: ${photoFiles.length}`}</p>
                    <input
                        type={'file'}
                        accept={"image/*"}
                        multiple
                        onChange={e =>
                            e.target.files && setPhotoFiles(Array.from( e.target.files))
                        }
                    />
                </label>
                <button onClick={async () => {
                    await AdminService.ChangeProject(project.id, {
                        name: projectState.name,
                        description_UA: projectState.description_UA,
                        description_EN: projectState.description_EN,
                        photosFiles: photoFiles,
                        photosLinks: projectState.photos,
                        createdAt: project.createdAt
                    });
                    setModalEdit(false);
                    await fetchProjects();
                }}>Save</button>
            </div>
        </ModalWindow>
    );
};

export default ProjectModalWindow;
