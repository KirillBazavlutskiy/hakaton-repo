import React, {FC} from 'react';
import s from "./ProjectAdminItem.module.scss";
import AdminService from "@/services/AdminService";
import {IProject} from "@/models";

interface ProjectAdminItem extends IProject {
    fetchProjects: () => Promise<void>;
}

const ProjectAdminItem: FC<ProjectAdminItem> = ({ name, id, description_UA, description_EN, imageUrl, fetchProjects }) => {
    return (
        <div key={name} className={s.projectItem}>
            <div className={s.projectImg}>
                <img src={imageUrl} alt={name}/>
            </div>
            <div className={s.projectInfo}>
                <h2>{name}</h2>
                <p>{description_EN}</p>
                <p>{description_UA}</p>
            </div>
            <button
                onClick={async () => {
                    await AdminService.DeleteProject(id);
                    await fetchProjects();
                }
                }>Видалити</button>
        </div>
    )
};

export default ProjectAdminItem;