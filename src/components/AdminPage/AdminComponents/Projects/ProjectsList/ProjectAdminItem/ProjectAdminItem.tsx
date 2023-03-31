import React, {FC} from 'react';
import s from "./ProjectAdminItem.module.scss";
import AdminService from "@/services/AdminService";
import {IProject} from "@/models/data";

interface ProjectAdminItem {
    fetchProjects: () => Promise<void>;
    project: IProject;
}

const ProjectAdminItem: FC<ProjectAdminItem> = ({ project, fetchProjects }) => {
    return (
        <div key={project.name} className={s.projectItem}>
            <img src={project.imageUrl} alt={project.name}/>
            <div className={s.projectInfo}>
                <h2>{project.name}</h2>
                <p>{project.description_EN}</p>
                <p>{project.description_UA}</p>
                <button
                    onClick={async () => {
                        await AdminService.DeleteProject(project.id);
                        await fetchProjects();
                    }
                    }>Видалити</button>
            </div>
        </div>
    )
};

export default ProjectAdminItem;