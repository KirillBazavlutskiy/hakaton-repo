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
            <div className={s.adminList}>
                <h2>Паролі адмінів:</h2>
                <ul>
                    {
                        admins.map(a => <li>{a}</li>)
                    }
                </ul>
            </div>
            <form onSubmit={async (event) => {
                event.preventDefault();
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