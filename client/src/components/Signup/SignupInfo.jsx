import React, {useState} from 'react'
import signupInfoImg from '../../assets/SignupInfoImage.svg'
import { UserAuth } from '../../context/UserAuthContext'
import {useNavigate} from 'react-router-dom'
import googleLogo from '../../assets/Gooogle-logo.svg'

export default function SignupInfo({ formData, setFormData }) {
    const [error, setError] = useState('')
    const {googleSignIn} = UserAuth()
    const navigate = useNavigate()
    const oAuth= async (e)=>{
        setError('')
        try {
            await googleSignIn()
            navigate('/home')
        } catch (error) {
            setError(e.message)
            console.log(e.message)
        }
      }
    return(
        <div className='signup-container flex items-center'>
            {/* <img src={signupInfoImg} alt="signup" class="signup-image"/> */}

            <div className='info-container flex-row items-center justify-center'>
                    <button className=" flex justify-around border text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={oAuth}>
                        <img src={googleLogo} alt="" /> 
                        <p>Continue with Google</p>
                    </button>
                <div className='bg-whiteshadow-md rounded px-8 pt-6 pb-8 mb-4'>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" value={formData.name} onChange={ (e)=>{
                            setFormData({...formData, name: e.target.value})
                        }} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="regno">
                        VIT Registration No.
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="regno" type="text" value={formData.regno} onChange={ (e)=>{
                            setFormData({...formData, regno: e.target.value})
                        }}/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                        VIT Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" value={formData.email} onChange={ (e)=>{
                            setFormData({...formData, email: e.target.value})
                        }}/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter 6-digit password" value={formData.password} onChange={ (e)=>{
                            setFormData({...formData, password: e.target.value})
                        }}/>
                    </div>
                </div>
            </div>
        </div>
    )
}