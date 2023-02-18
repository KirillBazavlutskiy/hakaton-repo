import {useEffect, FC, useState} from 'react';
import AdminService from "@/Services/AdminService";
import s from './SuperAdmin.module.scss';

const SuperAdmin: FC = () => {

    const fetchAdmins = async () => {
        const admins = await AdminService.GetAdmins();
        setAdmins(admins);
    }

    const [admins, setAdmins] = useState<string[]>([]);
    const [passwd, setPasswd] = useState<string>('');

    useEffect(() => {
        fetchAdmins();
    }, [])

    return (
        <div className={s.container}>
            <h2>Паролі адмінів:</h2>
            <ul className={s.adminList}>
                {
                    admins.map(a => <li>{a}</li>)
                }
            </ul>
            <form onSubmit={async () => {
                await AdminService.AddAdmin(passwd)
                fetchAdmins();
                setPasswd('');
            }}>
                <input
                    value={passwd}
                    onChange={e => setPasswd(e.target.value)}
                    type="text"
                />
                <button type='submit'>Додати адміна</button>
            </form>
        </div>
    );
};


export default SuperAdmin;