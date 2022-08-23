import React from 'react'
//import timetableInfoImg from '../assets/TimetableInfoImage.svg'
//import fileUpload from '../assets/file-upload.svg'
import DropFileInput from './DropFileInput'

export default function TimeTableInfo({ formData, setFormData }) {
    const onFileChange = (files)=>{
        //console.log(files);
        return files
    }
    return(
        <div className='signup-container flex items-center'>
            <div className='info-container flex-row items-center justify-center'>
                <h1>Sign-Up</h1>
                <p>Upload the full screenshot of your VIT Timetable of current semester.</p>
                <div class='bg-whiteshadow-md rounded px-8 pt-6 pb-8 mb-4'>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Timetable  
                        </label>
                        <div className='file-upload'>
                        <DropFileInput formData={formData} setFormData={setFormData} onFileChange={(files)=>{onFileChange(files)}}/>
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
                </div>
            </div>
        </div>
    )
}