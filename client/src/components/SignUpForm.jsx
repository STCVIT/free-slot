import React, { useState } from "react";
import SignupInfo from './SignupInfo'
import TimeTableInfo from "./TimetableInfo";

function Form(){
    const [page, setPage] = useState(0)
    const [formData, setFormData] = useState({
        name: "",
        regno: "",
        email: "",
        password: ""
    })

    const PageDispaly = ()=>{
        if(page===0){
            return <SignupInfo formData={formData} setFormData={setFormData}/>
        } else {
            return <TimeTableInfo formData={formData} setFormData={setFormData}/>
        }
    }

    return (
        <div className="form">
            <div className="body">{PageDispaly()}</div>
        </div>
    )
}

export default Form