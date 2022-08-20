import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SignupInfo from './SignupInfo'
import TimeTableInfo from "./TimetableInfo";
import timetableInfoImg from '../../assets/TimetableInfoImage.svg'
import { UserAuth} from '../../context/UserAuthContext'

function Form(){
    const navigate = useNavigate()
    const { signUp } = UserAuth()
    const [page, setPage] = useState(0)
    const [formData, setFormData] = useState({
        name: "",
        regno: "",
        email: "",
        password: "",
        timetable: ""
    })

    const PageDisplay = ()=>{
        if(page===0){
            return <SignupInfo formData={formData} setFormData={setFormData}/>
        } else {
            return <TimeTableInfo formData={formData} setFormData={setFormData}/>
        }
    }
    const handleSubmit = async ()=>{
      try {
        await signUp(formData.email, formData.password);
        navigate('/home')
      } catch (error) {
        console.error(error)
      }
    }

    return (
        <div className="form flex items-center">
            <img src={timetableInfoImg} alt="signup" className="signup-image"/> 
            <div className="body">{PageDisplay()}
            <div className="foot">
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}>
            Prev
          </button>
          <button
            onClick={() => {
              if (page === 1) {
                handleSubmit();
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === 1 ? "Submit" : "Next"}
          </button>
        </div>
        </div>
            
        </div>
    )
}

export default Form