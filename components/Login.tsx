'use client'

import liff from '@line/liff'
import React, { useEffect } from 'react'

const Login = () => {
    useEffect(()=> {
        liff.init({liffId: '2004885407-o7z2m791'})
    }, [])
    const handleLineLogin = () => {
        try {
            liff.login()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <button onClick={handleLineLogin} className='bg-[#06c755] px-6 py-2'>Line login</button>
        </>
    )
}

export default Login