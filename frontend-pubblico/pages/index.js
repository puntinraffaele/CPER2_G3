import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MapComponent from '../components/map';
import FetchTest from '../components/test';

export default function Home() {
  return (
    <FetchTest />
    // <MapComponent/>
  )
}
