import {FC, useState} from 'react';
import s from './ProjectAdd.module.scss';
import AdminService from "@/services/AdminService";
import {IProjectPostRequestBody} from "@/models/data";
import Label from "@/components/AdminPage/AdminComponents/AdminUI/Label/Label";
import ModalWindow from "@/components/Style/ModalWindow/ModalWindow";

interface ProjectAddProps {
    fetchProjects: () => Promise<void>;
}

const ProjectAdd: FC<ProjectAddProps> = ({ fetchProjects }) => {

    const [projectState, setProjectState] = useState<IProjectPostRequestBody>({
        name: '',
        description_EN: '',
        description_UA: '',
        photos: [],
        participants: []
    });
    const [modalMenuMode, setModalMenuMode] = useState<boolean>(false);
    const [photoFiles, setPhotoFiles] = useState<File[]>([]);

    return (
        <>
            <div className={s.container} onClick={() => {
                setModalMenuMode(true)
            }}>
                <h2>Add a new project</h2>
            </div>
            <ModalWindow state={modalMenuMode} setState={setModalMenuMode}>
                <div className={s.modalContainer}>
                    <Label type={'input'} placeholder={'Name'} maxLength={50} state={projectState} path={['name']} setState={setProjectState} />
                    <Label type={'textarea'} placeholder={'English Description'} height={200} maxLength={400} state={projectState} path={['description_EN']} setState={setProjectState} />
                    <Label type={'textarea'} placeholder={'Ukrainian Description'} height={200} maxLength={400} state={projectState} path={['description_UA']} setState={setProjectState} />
                    <label>
                        <p>{`Added Photos: ${photoFiles.length}`}</p>
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
                        await AdminService.AddProject({ ...projectState, photos: photoFiles })
                        setModalMenuMode(false);
                        await fetchProjects();
                    }}>Save</button>
                </div>
            </ModalWindow>
        </>
    );
};

export default ProjectAdd;
