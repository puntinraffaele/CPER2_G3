import styles from '../styles/styles.css';
import Image from "next/image";
import logo from '../public/logo.png'
import Link from 'next/link';

export default function App({ Component, pageProps }) {
    return (
        <>
        <header>
        <nav
            className="flex w-full items-center justify-start bg-white py-2 text-neutral-600 shadow-lg font-mono font-semibold" data-te-navbar-ref>
            <div className="flex w-full justify-between items-center ml-4" id="navbarSupportedContentY">
                {/* data-te-collapse-item> */}
                <a href="/" className="flex items-center justify-start" >
                    <Image src={logo} width={25} alt={"logo"}/>
                    <span className="ml-2 text-lg">Earth4Sport</span>
                </a>

                <button className="mr-4 rounded-lg border-2 border-transparent text-gray-400 bg-gray-900 hover:text-gray-900 hover:bg-gray-400 hover:border-gray-900
                hover:border-2">
                    <span className="p-3">Logout</span>
                </button>
            </div>
        </nav>

        </header>
            <Component {...pageProps} />
        </>
    );
}
