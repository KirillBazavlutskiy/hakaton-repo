import React, {useState} from 'react';
import {IReg} from "@/models/Auth";

const Registration = () => {

    const [regData, setRegData] = useState<IReg>({
        email: '',
        username: '',
        password: '',
    })

    return (
        <form onSubmit={async () => {
            // TODO Запрос на нового пользователя
        }}>
            <label>
                Username
                <input
                    type="text"
                    value={regData.username}
                    onChange={e => setRegData({...regData, username: e.target.value})}
                />
            </label>
            <label>
                Email
                <input
                    type="email"
                    value={regData.email}
                    onChange={e => setRegData({...regData, email: e.target.value})}
                />
            </label>
            <label>
                Password
                <input
                    type="password"
                    value={regData.password}
                    onChange={e => setRegData({...regData, password: e.target.value})}
                />
            </label>
            <button type='submit'>Sign Up</button>
        </form>
    );
};

export default Registration;