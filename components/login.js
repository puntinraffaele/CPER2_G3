import { baseURL } from '../utils/urls'
import { useRouter } from 'next/router'
import { redirect } from "next/dist/server/api-utils";
import { useEffect, useState } from 'react'

export default function LoginComponent() {
    let login = async (event) => {
        event.preventDefault()
        let credentials = {
            username: event.target.usr.value,
            password: event.target.psw.value
        }
        const res = await fetch(baseURL + 'login', {
            method: 'POST',
            body: JSON.stringify(credentials)
        }).then(res => {
            console.log(res)
            if (!res.ok) {
                return null
            }
            else {
                return res.text()
            }
        })

        if (res) {

            sessionStorage.setItem('jwt_bearer', res)
        }
    }

    return (
        <>
            <form onSubmit={login} method="post" className="flex flex-col items-center justify-center md:h-screen lg:py-0">
                <label for="usr">Utente:</label>
                <input type="text" id="usr" />
                <label for="psw">Password:</label>
                <input type="password" id="psw" />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
