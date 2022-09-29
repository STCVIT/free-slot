import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SignupInfo from './SignupInfo'
import TimeTableInfo from "./TimetableInfo";
import timetableInfoImg from '../../assets/TimetableInfoImage.svg'
import { UserAuth } from '../../context/UserAuthContext'
import axios from "axios";

function Form() {
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

  const PageDisplay = () => {
    if (page === 0) {
      return <SignupInfo formData={formData} setFormData={setFormData} />
    } else {
      return <TimeTableInfo formData={formData} setFormData={setFormData} />
    }
  }
  const handleSubmit = async () => {
    try {
      axios({
        method: 'post',
        url: 'http://localhost:4000/user/create'
      })
      navigate('/timetable')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="form grid grid-cols-2 min-h-screen">
      <div><img src={timetableInfoImg} alt="signup" className="signup-image min-h-screen" /> </div>
      <div className="body flex item-center flex-col justify-center px-40">{PageDisplay()}
        <div className="foot flex justify-around items-center mx-28">
          <button className="py-0.5 px-2"
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}>
            Prev
          </button>
          <button className="py-0.5 px-2"
            onClick={async() => {
              if (page === 1) {
                await handleSubmit();
                navigate('/timetable')
                
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