import { baseURL } from '../utils/urls'
const logo = './logo.png'
import { useState } from 'react'

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
            <div className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center md:h-screen lg:py-0">
                    <a className="flex items-center mb-6 text-4xl font-mono font-semibold text-gray-900 dark:text-white">
                        <img src={logo} className='w-8'></img>
                        <span className="ml-2 text-[#3f48cc]">EARTH</span>
                        <span className="text-green-600">4</span>
                        <span className="text-[#3f48cc]">SPORT</span>
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Esegui l'accesso
                            </h1>
                            <div className="space-y-4 md:space-y-6" action="#">
                                <label for="usr" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Utente:</label>
                                <input type="text" value={username} placeholder="Username" onChange={handleUsernameChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm 
                                rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                                <label for="psw" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password:</label>
                                <input type="password" value={password} placeholder="••••••••" onChange={handlePasswordChange} 
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm 
                                rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>

                                <button type="button" onClick={login}
                                className="w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none 
                                focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-primary-600 
                                dark:hover:bg-primary-700 dark:focus:ring-primary-800 text-xl bg-blue-300 text-white">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
