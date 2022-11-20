import { useState } from "react";
import { Twitter, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
const ContactUs = () => {
  const [name, setName] = useState();
  const [message, setMessage] = useState();
  const [msgLength, setMsgLength] = useState(0);
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
    setMsgLength(e.target.value.length);
  };
  return (
    <div className="flex flex-col w-full items-center gap-y-4 bg-gray-200 h-screen">
      <div className="text-center text-4xl font-bold p-4 py-5 ">Contact Us</div>
      <div className="w-2/4 flex flex-col gap-y-3">
        <label for="contactUsName">Name</label>
        <input
          id="contactUsName"
          className="p-2 rounded-md"
          placeholder="Name"
          onChange={handleName}
        />
        <label for="contactUsMessasge">Type a message</label>
        <div className="relative w-full">
          <textarea
            className="w-full pr-[25%] p-2 rounded-md resize-none"
            rows={10}
            cols={6}
            id="contactUsMessage"
            maxLength={120}
            style={{ textDecoration: "hidden" }}
            placeholder="Name"
            onChange={handleMessage}
          />
          <h1 className="absolute top-2 right-5">{msgLength}/120</h1>
          {msgLength === 120 && (
            <h1 className="text-red-600">Max Length Reached</h1>
          )}
        </div>
      </div>
      <div>
        <button className="flex-1 items-center h-fit w-fit py-3 px-5 text-sm font-medium text-center text-white bg-myBlue rounded-lg hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300">
          Send Message
        </button>
      </div>
      <div className="flex justify-between">
        {[<Twitter />, <LinkedIn />, <GitHub />, <Instagram />].map(
          (social) => (
            <button className="bg-blue-600">{social}</button>
          )
        )}
      </div>
    </div>
  );
};

export default ContactUs;
