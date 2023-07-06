import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Sessions from '../components/sessions';
import LoginComponent from '../components/login';
import { useEffect, useState } from 'react'
import ClockSelect from '../components/clockSelect';

export default function Home() {
  const [page, setPage] = useState()
  useEffect(() => setPage(function () {
    if (typeof window !== 'undefined') {
      if (sessionStorage.getItem('jwt_bearer')) {
        try {
          return (
            <>
              <ClockSelect/>
            </>
          )

        } catch (error) {
          console.log(`Redirected to login, reason: ${error.message}`)
          return (
            <>
              <LoginComponent></LoginComponent>
            </>
          )
        }
      }
      return (
        <>
          <LoginComponent ></LoginComponent>
        </>
      )
    }
  }))
  return <>
    {page}
  </>
}
