import {FC} from 'react';
import s from './ProjectsList.module.scss';
import AdminService from "@/services/AdminService";
import {IProject} from "@/models";
import ProjectAdminItem
    from "@/components/AdminPage/AdminComponents/Projects/ProjectsList/ProjectAdminItem/ProjectAdminItem";

interface ProjectsListProps {
    projects: IProject[];
    fetchProjects: () => Promise<void>
}

const ProjectsList: FC<ProjectsListProps> = ({ projects, fetchProjects }) => {
    return (
        <div className={s.projectsList}>
            {
                projects.map((p, index) => <ProjectAdminItem fetchProjects={fetchProjects} id={p.id} name={p.name} description_EN={p.description_EN} description_UA={p.description_UA} imageUrl={p.imageUrl} />)
            }
        </div>
    );
};

export default ProjectsList;