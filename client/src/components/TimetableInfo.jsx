import React from 'react'
import timetableInfoImg from '../assets/TimetableInfoImage.svg'
//import fileUpload from '../assets/file-upload.svg'
import DropFileInput from './DropFileInput'

export default function TimeTableInfo({ formData, setFormData }) {
    const onFileChange = (files)=>{
        console.log(files);
    }
    return(
        <div className='signup-container flex items-center'>
            <img src={timetableInfoImg} alt="signup" className="signup-image"/>
            <div className='info-container flex-row items-center justify-center'>
                <h1>Sign-Up</h1>
                <p>Upload the full screenshot of your VIT Timetable of current semester.</p>
                <form class='bg-whiteshadow-md rounded px-8 pt-6 pb-8 mb-4'>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Timetable  
                        </label>
                        <div className='file-upload'>
                        <DropFileInput onFileChange={(files)=>{onFileChange(files)}}/>
                        {/* <div> 
                        <label class="text-center p-4 flex flex-col w-full h-full border-4 border-blue-200 border-dashed">
                            <div>
                                <img src ={fileUpload} alt='upload'></img>
                                <p>Drop your Timetable here</p>
                            </div>
                            <div class="relative py-4">
                                <div class="absolute inset-0 flex items-center">
                                    <div class="w-full border-b border-gray-300"></div>
                                </div>
                                <div class="relative flex justify-center">
                                    <span class="bg-white px-4 text-sm text-gray-500">or</span>
                                </div>
                            </div>
                            <button className='border py-4'> Select from Computer</button>
                        </label> */}
                        <div class="relative py-4">
                                <div class="absolute inset-0 flex items-center">
                                    <div class="w-full border-b border-gray-300"></div>
                                </div>
                                <div class="relative flex justify-center">
                                    <span class="bg-white px-4 text- text-gray-500">OR</span>
                                </div>
                        </div>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Paste your Timetable here" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}