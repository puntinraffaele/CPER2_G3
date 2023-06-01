import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MapComponent from '../components/map';
import SingleSession from '../components/singleSession';
import Sessions from '../components/sessions';

export default function Home() {
  return (
    <>
    <Sessions uuid='3d8cf0e2-ef19-4471-bceb-651057311f3d' />
    {/* <DeviceData /> */}
    {/* <MapComponent/> */}
    </>
  )
}
