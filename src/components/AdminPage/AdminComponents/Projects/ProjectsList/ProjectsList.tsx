import {FC} from 'react';
import s from './ProjectsList.module.scss';
import {IProject} from "@/models/data";
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
                projects.map((p, index) => <ProjectAdminItem key={p.id} project={p} fetchProjects={fetchProjects} />)
            }
        </div>
    );
};

export default ProjectsList;
