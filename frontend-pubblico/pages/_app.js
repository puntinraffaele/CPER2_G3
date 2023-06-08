import styles from '../styles/styles.css';
import Image from "next/image";
import logo from '../public/logo.png'
import Link from 'next/link';

export default function App({ Component, pageProps }) {
    return (
        <>
        <header>
        <nav
            className="flex w-full items-center justify-start bg-white py-2 text-gray-600 shadow-lg font-mono font-semibold" data-te-navbar-ref>
            <div className="flex w-full justify-between items-center ml-4" id="navbarSupportedContentY">
                <a href="/" className="flex items-center text-xl justify-start" >
                    <Image src={logo} width={30} alt={"logo"}/>
                    <span className="ml-2 text-[#3f48cc] drop-shadow-lg">EARTH</span>
                    <span className="text-green-600">4</span>
                    <span className="text-[#3f48cc]">SPORT</span>
                </a>
                <a href="/" className="mr-4 text-lg">Logout</a>
            </div>
        </nav>

        </header>
            <Component {...pageProps} />
        </>
    );
}
