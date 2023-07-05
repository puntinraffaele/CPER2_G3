import { baseURL } from '../utils/urls'
import { useRouter } from 'next/router'
import { redirect } from "next/dist/server/api-utils";
import { useEffect, useState } from 'react'

export default function LoginComponent() {

    const [username, setUsername] = useState('');
    const handleUsernameChange = (e) => setUsername(e.target.value);
    const [password, setPassword] = useState('');
    const handlePasswordChange = (e) => setPassword(e.target.value);

    let login = async () => {
        const res = await fetch(baseURL + 'login', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            })
        }).then(res => {
            console.log(res)
            if (!res.ok) {
                return null
            }
            else {
                return res.text()
            }
        })

        if (res) {
            sessionStorage.setItem('jwt_bearer', res)
        }
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center md:h-screen lg:py-0">
                <label for="usr">Utente:</label>
                <input type="text" value={username} placeholder="Giuseppe" onChange={handleUsernameChange} />
                <label for="psw">Password:</label>
                <input type="password" value={password} onChange={handlePasswordChange} />
                <button type="button" onClick={login}>Submit</button>
            </div>
        </>
    )
}
