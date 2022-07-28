import React, { useState } from "react";
import SignupInfo from './SignupInfo'
import TimeTableInfo from "./TimetableInfo";

function Form(){
    const [page, setPage] = useState(0)
    const [formData, setFormData] = useState({
        name: "",
        regno: "",
        email: "",
        password: "",
        timetable: ""
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
            <div className="body">{PageDispaly()}
            <div className="foot">
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
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