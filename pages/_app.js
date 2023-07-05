import styles from '../styles/styles.css';
import Image from "next/image";
import Link from 'next/link';
import { cookies } from 'next/dist/client/components/headers';
import { baseURL } from '../utils/urls'
import Layout from '../components/layout';


export default function App({ Component, pageProps }) {
    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
