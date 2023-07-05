import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MapComponent from '../components/map';
import Sessions from '../components/sessions';
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  if (typeof window !== 'undefined') {
    if (sessionStorage.getItem('jwt_bearer')) {

      return (
        <>
          <Sessions />
        </>
      )
    }
    else
      router.push('/', undefined, { shallow: true })
  }
}
