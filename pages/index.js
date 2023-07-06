import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Sessions from '../components/sessions';
import LoginComponent from '../components/login';
import { useEffect, useState } from 'react'

export default function Home() {
  const [page, loadFunc] = useState(function () { })
  useEffect(() => loadFunc(function () {
    if (typeof window !== 'undefined') {
      if (sessionStorage.getItem('jwt_bearer')) {
        try {
          return (
            <>
              <Sessions />
            </>
          )

        } catch (error) {
          console.log(`Redirected to login, reason: ${err.message}`)
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
