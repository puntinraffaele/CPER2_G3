const logo = '../public/logo.png'
import { useEffect, useState } from 'react'
import LoginComponent from './login';

export default function Layout({ children, logo }) {
    const [loggedIn, setLoggedIn] = useState(true)
    useEffect(() => {
        setLoggedIn(false)
    })

    const [logout, loadFunc] = useState(function () { })
    useEffect(() => loadFunc(() => {
        if (typeof window !== 'undefined') {
            sessionStorage.clear()
            children = <>
                <LoginComponent />
            </>
        }
    }
    ))
    return (
        <>
            <header>
                <nav
                    className="flex w-full items-center justify-start bg-white py-2 text-gray-600 shadow-lg font-mono font-semibold" data-te-navbar-ref>
                    <div className="flex w-full justify-between items-center ml-4" id="navbarSupportedContentY">
                        <div className="flex items-center text-xl justify-start" >
                            <img src={logo}></img>
                            <span className="ml-2 text-[#3f48cc]">EARTH</span>
                            <span className="text-green-600">4</span>
                            <span className="text-[#3f48cc]">SPORT</span>
                        </div>
                        <button type="button" className="mr-4 text-lg" onClick={logout}>
                            Logout
                        </button>
                    </div>
                </nav>
            </header>
            <main>{children}</main>
        </>
    )
}