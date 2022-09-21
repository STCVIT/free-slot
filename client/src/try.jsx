import React, { useState } from "react";
const Try = () => {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    console.log(name)
    e.preventDefault();
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
    </div>
  );
};

export default Try;
