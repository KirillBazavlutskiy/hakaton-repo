import {FC, useState} from 'react';
import s from './ProjectAdd.module.scss';
import AdminService from "@/services/AdminService";
import introText from "@/components/IntroText/IntroText";

interface ProjectAddProps {
    fetchProjects: () => Promise<void>;
}

const ProjectAdd: FC<ProjectAddProps> = ({ fetchProjects }) => {

    const [project, setProject] = useState({
        name: '',
        description_EN: '',
        description_UA: '',
        imageUrl: '',
    });

    return (
        <form onSubmit={async (event) => {
            event.preventDefault();
            await AdminService.AddProject(project);
            await fetchProjects();
            setProject({ name: '', description_EN: '', description_UA: '', imageUrl: '' })
        }} className={s.addProject}>
            <label>
                Назва
                <input type="text" value={project.name} onChange={e => setProject(prev => ({ ...prev, name: e.target.value }))}/>
            </label>
            <label>
                Опис англійською
                <textarea value={project.description_EN} onChange={e => setProject(prev => ({ ...prev, description_EN: e.target.value }))}/>
            </label>
            <label>
                Опис українською
                <textarea value={project.description_UA} onChange={e => setProject(prev => ({ ...prev, description_UA: e.target.value }))}/>
            </label>
            <label>
                Посилання на фото
                <input type="text" value={project.imageUrl} onChange={e => setProject(prev => ({ ...prev, imageUrl: e.target.value }))}/>
            </label>
            <button type='submit'>Відправити</button>
        </form>
    );
};

export default ProjectAdd;