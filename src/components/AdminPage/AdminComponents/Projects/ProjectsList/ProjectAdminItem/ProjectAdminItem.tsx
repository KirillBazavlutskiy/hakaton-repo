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
            <h2>{project.name}</h2>
            <div className={s.inner}>

            </div>
        </div>
    )
};

export default ProjectAdminItem;
