import React from 'react'
import signupInfoImg from '../assets/SignupInfoImage.svg'
import googleLogo from '../assets/Gooogle-logo.svg'

export default function SignupInfo({ formData, setFormData }) {
    return(
        <div className='signup-container flex items-center'>
            <img src={signupInfoImg} alt="signup" class="signup-image"/>

            <div className='info-container flex-row items-center justify-center'>
                    <button class=" flex justify-around border text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        <img src={googleLogo} alt="" /> 
                        <p>Continue with Google</p>
                    </button>
                <form class='bg-whiteshadow-md rounded px-8 pt-6 pb-8 mb-4'>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Name
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" value={formData.name} onChange={ (e)=>{
                            setFormData({...formData, name: e.target.value})
                        }} />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        VIT Registration No.
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" value={formData.regno} onChange={ (e)=>{
                            setFormData({...formData, regno: e.target.value})
                        }}/>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        VIT Email
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" value={formData.email} onChange={ (e)=>{
                            setFormData({...formData, email: e.target.value})
                        }}/>
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter 6-digit password" value={formData.password} onChange={ (e)=>{
                            setFormData({...formData, password: e.target.value})
                        }}/>
                    </div>
                </form>
            </div>
        </div>
    )
}