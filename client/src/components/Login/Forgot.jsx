import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/UserAuthContext";
import { toast } from "react-toastify";
const Forgot = () => {
  const [email, setEmail] = useState("");
  const emailPattern = /([a-z|.]+)([0-9]{4})([a-z]?)(@vitstudent.ac.in)/;
  const navigate = useNavigate();
  const { reset } = UserAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (emailPattern.test(email) === false) {
        toast.error("VIT mail needed");
        return;
      }
      await reset(email).then(() => {
        toast.success("Email has been sent to you. Please, check and verify.");
        navigate("/login");
      });
    } catch (error) {
      console.error(error.message);
      if (error === "Firebase: Error (auth/too-many-requests).") {
        toast.error("Too many requests");
      }
      //toast.error("Error: "+ error)
    }
  };
  return (
    <>
      <section className="bg-primary h-screen flex">
        <div className="max-w-lg m-auto bg-white px-12 py-12 rounded-md">
          <h4 className="text-md font-normal text-center">
            Enter your email to receive a link to reset your password
          </h4>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col py-2 w-full">
              <label className="font-semibold py-2">Email</label>
              <input
                autoComplete="true"
                onChange={(e) => setEmail(e.target.value.toLowerCase())}
                type="email"
                className="focus:outline-none border-2 rounded py-3 px-4"
              />
            </div>
            <button
              className="bg-primary py-3 px-4 w-full text-white rounded-md mt-1.5"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Forgot;
