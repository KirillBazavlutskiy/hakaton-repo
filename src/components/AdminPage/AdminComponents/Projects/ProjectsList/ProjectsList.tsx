import {FC} from 'react';
import s from './ProjectsList.module.scss';
import {IProjectPrivate} from "@/models/data";
import ProjectAdminItem
    from "@/components/AdminPage/AdminComponents/Projects/ProjectsList/ProjectAdminItem/ProjectAdminItem";
import ProjectAdd from "@/components/AdminPage/AdminComponents/Projects/ProjectAdd/ProjectAdd";

interface ProjectsListProps {
    projects: IProjectPrivate[];
    fetchProjects: () => Promise<void>
}

const ProjectsList: FC<ProjectsListProps> = ({ projects, fetchProjects }) => {
    return (
        <div className={s.projectsList}>
            <ProjectAdd fetchProjects={fetchProjects} />
            {
                projects.map((p, index) => <ProjectAdminItem key={p.name} project={p} fetchProjects={fetchProjects} />)
            }
        </div>
    );
};

export default ProjectsList;
