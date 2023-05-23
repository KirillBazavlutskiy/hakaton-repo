import React, {FC, useState} from 'react';
import s from "./ProjectAdminItem.module.scss";
import {IProjectPrivate} from "@/models/data";
import PhotoSlider from "@/components/AdminPage/AdminComponents/Projects/ProjectsList/PhotoSlider/PhotoSlider";
import AdminService from "@/services/AdminService";
import ProjectModalWindow from "@/components/AdminPage/AdminComponents/Projects/ProjectsList/ProjectModalWindow/ProjectModalWindow";

interface ProjectAdminItem {
    fetchProjects: () => Promise<void>;
    project: IProjectPrivate;
}

const ProjectAdminItem: FC<ProjectAdminItem> = ({ project, fetchProjects }) => {

    const [modalEdit, setModalEdit] = useState<boolean>(false);

    return (
        <>
            <div key={project.name} className={s.projectItem}>
                <h3>{project.name}</h3>
                <div className={s.inner}>
                    <div className={s.photos}>
                        <PhotoSlider images={project.photos} />
                    </div>
                    <span>English Text</span>
                    <p>{project.description_EN.slice(0,
                        project.description_EN.length < 30 ? project.description_EN.length : 30
                    )}...</p>
                    <span>Ukrainian Text</span>
                    <p>{project.description_UA.slice(0,
                        project.description_UA.length < 30 ? project.description_UA.length : 30
                    )}...</p>
                    <div className={s.buttons}>
                        <button onClick={() => setModalEdit(true)}>Edit</button>
                        <button onClick={async () => {
                            await AdminService.DeleteProject(project.id);
                            await fetchProjects();
                        }}>Delete</button>
                    </div>
                </div>
            </div>
            <ProjectModalWindow
                modalEdit={modalEdit}
                setModalEdit={setModalEdit}
                project={project}
                fetchProjects={fetchProjects}
            />
        </>
    )
};

export default ProjectAdminItem;
