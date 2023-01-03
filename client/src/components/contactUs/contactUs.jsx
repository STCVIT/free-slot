import { useState } from "react";
import PageHeading from "../Headings/PageHeading";
import Socials from "../Socials/Socials";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainNavbar from "../Menus/MainNavbar";
import emailjs from "@emailjs/browser";
const ContactUs = ({ isHomePage }) => {
  // eslint-disable-next-line no-unused-vars
  const [name, setName] = useState();
  // eslint-disable-next-line no-unused-vars
  const [message, setMessage] = useState();
  const [msgLength, setMsgLength] = useState(0);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    const user = JSON.parse(localStorage.getItem("user"));
    try {
      e.preventDefault();
      if (!name || !message) {
        toast.error("Please fill all the fields");
        return;
      }
      setIsSent(true);
      emailjs
        .send(
          "service_5twqp0f",
          "template_glznn58",
          {
            from_name: name,
            message: message,

            email: user ? user.email : name,
          },
          "tCHlzcE0KIYaaoDg1"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      toast.success("Message Sent");
      setName("");
      setMessage("");
      setMsgLength(0);
    } catch (err) {
      console.log(err);
    }
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
    setMsgLength(e.target.value.length);
  };
  return (
    <div className={`bg-[#f2f2f2] h-full `}>
      {!isHomePage && <MainNavbar active="account" />}
      {!isHomePage && <PageHeading title="Contact Us" />}
      <div
        className={!isHomePage && `flex justify-center flex-col items-center`}
      >
        <div
          className={`flex h-full flex-col w-full lg:w-3/4 justify-between  items-center gap-y-4 `}
        >
          <div className="w-full h-full flex flex-col gap-y-3 px-4 lg:px-0">
            <label className="text-2xl">Name</label>
            <input
              id="contactUsName"
              className="p-2 py-4 rounded-md"
              placeholder="Name"
              value={name}
              autoComplete="off"
              onChange={handleName}
            />
            <div className="my-2">
              <div className="flex justify-between ">
                <p className="text-2xl">Type a message</p>
                <p className="text-sm font-bold">{msgLength}/500</p>
              </div>
              <div className="relative w-full">
                <textarea
                  className="w-full p-2 py-4 rounded-md resize-none"
                  rows={10}
                  cols={6}
                  maxLength={500}
                  style={{ textDecoration: "hidden" }}
                  placeholder="Enter your message here"
                  value={message}
                  onChange={handleMessage}
                />
                {msgLength === 500 && (
                  <p className="text-red-600">Max Length Reached</p>
                )}
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex-1 text-lg items-center h-fit w-full py-3 px-5  font-medium text-center text-white bg-myBlue rounded-lg hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300"
              onClick={handleSubmit}
            >
              Send Message
            </button>
          </div>
        </div>
        {!isHomePage && <Socials />}
      </div>
    </div>
  );
};

export default ContactUs;
