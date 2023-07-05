import { baseURL } from '../utils/urls'
import { useRouter } from 'next/router'
import { redirect } from "next/dist/server/api-utils";

export default function LoginComponent() {
    const router = useRouter()
    let login = async (event) => {
        event.preventDefault()
        let credentials = {
            username: event.target.usr.value,
            password: event.target.psw.value
        }
        const res = await fetch(baseURL + 'login', {
            method: 'POST',
            body: JSON.stringify(credentials)
        }).then(data => data.text())

        if (res) {
            console.log(res)
            sessionStorage.setItem('jwt_bearer', res)
            router.push('/', undefined, { shallow: true })
        }
    }

    return (
        <section className="bg-gray-50">
            <form onSubmit={login} method="post" className="flex flex-col items-center justify-center md:h-screen lg:py-0">
                <label for="usr">Utente:</label>
                <input type="text" id="usr" />
                <label for="psw">Password:</label>
                <input type="password" id="psw" />
                <button type="submit">Submit</button>
            </form>
            {/* <div className="flex flex-col items-center justify-center md:h-screen lg:py-0">
                <a className="flex items-center mb-6 text-4xl font-mono font-semibold text-gray-900">
                    <Image src={logo} width={75} />
                    <span className="ml-2 text-[#3f48cc]">EARTH</span>
                    <span className="text-green-600">4</span>
                    <span className="text-[#3f48cc]">SPORT</span>
                </a>
                <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                            Esegui l'accesso
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Username</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm 
                                rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    placeholder="Giuseppe Garibaldi" required="" />
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 
                                text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    required="" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded 
                                        bg-gray-50 focus:ring-3 focus:ring-primary-300  
                                        " required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label for="remember" className="text-gray-500 ">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-primary-600 hover:underline ">Password dimenticata?</a>
                            </div>
                            <button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none 
                            focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 text-center  
                             text-xl bg-blue-300 text-white" onClick={() => {
                                    signIn()
                                }}>Accedi</button>
                            <p className="text-sm font-light text-gray-500 ">
                                Non hai un account?
                                <a href="#" className="font-medium text-primary-600 hover:underline  ml-1">
                                    Registrati
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div> */}
        </section>
    )
}
