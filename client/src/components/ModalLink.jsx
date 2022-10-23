import React from "react";
import Cross from "../assets/Cross.svg";
// import Circle from '../assets/circle.svg'
import Copy from "../assets/copy.svg";
const ModalLink = ({ setModalOnLink, setChoiceLink }) => {
  const handleOKClickLink = () => {
    setChoiceLink(true);
    setModalOnLink(false);
  };
  const handleCancelClickLink = () => {
    setChoiceLink(false);
    setModalOnLink(false);
  };

  return (
    <div className="   bg-zinc-200/60 opacity-100 fixed inset-0 z-50   ">
      <div className="flex h-screen justify-center items-center ">
        <div className="flex-col items-center bg-white shadow-lg rounded-xl ">
          <header className="p-4 bg-blueTheme text-white grid grid-cols-6 rounded-t-xl">
            <img
              src={Cross}
              onClick={handleCancelClickLink}
              alt=""
              className="cursor-pointer grid col-span-2 ml-5 mt-3"
            ></img>
            <h1 className="bg-blueTheme text-white col-span-4 text-xl justify text-left">
              Your link is ready
            </h1>
          </header>
          <div className="py-4">
            <p className="ml-4 mx-4 text-sm justify text-center text-gray-500">
              Share this link with others with whom you
            </p>
            <p className="ml-4  mx-4 text-sm justify text-center text-gray-500 ">
              {" "}
              want to find free slot
            </p>
          </div>
          <form className="p-3">
            <div className="relative">
              <input
                type="search"
                id="default-search"
                className="block p-4 pl-10 w-full text-sm text-gray-700 bg-gray-50  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-100 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                required
              ></input>
              <img src={Copy} alt="" className="" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalLink;
