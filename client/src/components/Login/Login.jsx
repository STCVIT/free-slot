import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/UserAuthContext'
import googleLogo from '../../assets/Gooogle-logo.svg'
import LoginImage from '../../assets/LoginInfoImage.svg'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { signIn, googleSignIn } = UserAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await signIn(email, password)
            navigate('/home')
        } catch (error) {
            setError(e.message)
            console.log(e.message)
        }
    }
    const oAuth = async (e) => {
        setError('')
        try {
            await googleSignIn()
            navigate('/home')
        } catch (error) {

        }
    }
    return (
        <>
            <div className='grid grid-cols-4'>
                <img src={LoginImage} alt='' className='grid col-span-2 min-h-screen' />
                <div className='grid col-span-2 mt-7'>
                    <button className="  justify-around border text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={oAuth}>
                        <img src={googleLogo} alt="" />
                        <p>Continue with Google</p>
                    </button>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col py-2'>
                            <label className='py-2'>Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} type='email' className='border p-3' />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='py-2'>Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} type='password' className='border p-3' />
                        </div>
                        <button className='border border-blue'>Sign In</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login