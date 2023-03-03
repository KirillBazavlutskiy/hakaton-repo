import {useEffect, FC, useState} from 'react';
import AdminService, {IProject} from "@/services/AdminService";
import s from './SuperAdmin.module.scss';
import Image from "next/image";

const SuperAdmin: FC = () => {

    const fetchAdminInfo = async () => {
        const admins = await AdminService.GetAdmins();
        setAdmins(admins);

        const projects = await AdminService.GetProjects();
        setProjects(projects);
    }

    const [admins, setAdmins] = useState<string[]>([]);
    const [password, setPassword] = useState<string>('');

    const [projects, setProjects] = useState<IProject[]>([]);
    const [project, setProject] = useState<IProject>({
        name: '',
        description_EN: '',
        description_UA: '',
        imageUrl: '',
    });

    useEffect(() => {
        fetchAdminInfo();
    }, [])

    return (
        <div className={s.container}>
            <div className={s.admins}>
                <h2>Паролі адмінів:</h2>
                <p className={s.adminList}>
                    {
                        admins.map(a => <span key={a}>{a}</span>)
                    }
                </p>
                <form onSubmit={async (event) => {
                    event.preventDefault();
                    await AdminService.AddAdmin(password);
                    fetchAdminInfo();
                    setPassword('');
                }}>
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="text"
                    />
                    <button type='submit'>Додати адміна</button>
                </form>
            </div>
            <div className={s.projects}>
                <h2>Список наших проектів</h2>
                <div className={s.projectsList}>
                    {
                        projects.map((p, index) => {
                            return (
                                <div key={p.name} className={s.projectItem}>
                                    <div className={s.projectImg}>
                                        <img src={p.imageUrl} alt={p.name}/>
                                    </div>
                                    <div className={s.projectInfo}>
                                        <p>{p.name}</p>
                                        <p>{p.description_EN}</p>
                                        <p>{p.description_UA}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <form onSubmit={async (event) => {
                    event.preventDefault();
                    await AdminService.AddProject(project);
                    fetchAdminInfo();
                    setProject({ name: '', description_EN: '', description_UA: '', imageUrl: '' })
                }}>
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
            </div>
        </div>
    );
};


export default SuperAdmin;