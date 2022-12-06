import { useState } from "react";
import PageHeading from "../Headings/PageHeading";
import Socials from "../Socials/Socials";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContactUs = ({ isHomePage }) => {
  // eslint-disable-next-line no-unused-vars
  const [name, setName] = useState();
  // eslint-disable-next-line no-unused-vars
  const [message, setMessage] = useState();
  const [msgLength, setMsgLength] = useState(0);
  const [isSent, setIsSent] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !message) {
      toast.error("Please fill all the fields");
      return;
    }
    setIsSent(true);
    console.log(name, message);
    toast.success("Message Sent");
    setName("");
    setMessage("");
    setMsgLength(0);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
    setMsgLength(e.target.value.length);
  };
  return (
    <div>
      <PageHeading title="Contact Us" />
      <div className={`flex flex-col w-full items-center gap-y-4 `}>
        <div className="w-2/4 flex flex-col gap-y-3">
          <label for="contactUsName">Name</label>
          <input
            id="contactUsName"
            className="p-2 rounded-md"
            placeholder="Name"
            value={name}
            onChange={handleName}
          />
          <label for="contactUsMessasge">Type a message</label>
          <div className="relative w-full">
            <textarea
              className="w-full pr-[20%] p-2 rounded-md resize-none"
              rows={10}
              cols={6}
              id="contactUsMessage"
              maxLength={120}
              style={{ textDecoration: "hidden" }}
              placeholder="Enter your message here"
              value={message}
              onChange={handleMessage}
            />
            <p className="absolute top-2 right-5 text-sm font-bold">
              {msgLength}/120
            </p>
            {msgLength === 120 && (
              <p className="text-red-600">Max Length Reached</p>
            )}
          </div>
        </div>
        <div>
          <button
            className="flex-1 items-center h-fit w-fit py-3 px-5 text-sm font-medium text-center text-white bg-myBlue rounded-lg hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300"
            onClick={handleSubmit}
          >
            Send Message
          </button>
        </div>
      </div>
      {!isHomePage && <Socials />}
    </div>
  );
};

export default ContactUs;
