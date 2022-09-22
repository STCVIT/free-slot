import axios from "axios";
import React, { useState } from "react";
const Try = () => {
  const [name, setName] = useState("");
  const[output, setOutput]=useState("")
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:4000/link/',{
      name
    })
    .then((res)=>{
      setOutput(res.data)
      console.log(res.data)
    })
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        {/*when user submit the form , handleSubmit()
        function will be called .*/}
        <label>Name:</label>
        <br />
        <input
          type="text"
          value={name}
          required
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <label className="flex flex-col gap-y-5" id="output">
        Output:
      </label>
      <input className="min-w-full" value={output}></input>
    </div>
  );
};

export default Try;
