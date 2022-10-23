<<<<<<< HEAD
// import React from 'react'
// import Taggle from 'taggle'
// import '../index.css'
// import $ from 'jquery'
// const ModalNewTeam = ({ setModalOnNew, setChoiceNew }) => {

//     const handleOKClickNew = () => {
//         setChoiceNew(true)
//         setModalOnNew(false)
//     }
//     const handleCancelClickNew = () => {
//         setChoiceNew(false)
//         setModalOnNew(false)
//     }

//     var substringMatcher = function (strs) {
//         return function findMatches(q, cb) {
//             var matches, substrRegex;

//             // an array that will be populated with substring matches
//             matches = [];

//             // regex used to determine if a string contains the substring `q`
//             substrRegex = new RegExp(q, 'i');

//             // iterate through the pool of strings and for any string that
//             // contains the substring `q`, add it to the `matches` array
//             $.each(strs, function (i, str) {
//                 if (substrRegex.test(str)) {
//                     matches.push(str);
//                 }
//             });

//             cb(matches);
//         };
//     };

//     function parseTags(id) {
//         var setTags = $('#' + id).text();
//         setTags = setTags.replace(/\s\s+/g, '');

//         if (!setTags.length) {
//             return [];
//         }

//         setTags = setTags.replace(/(^\s*)|(,\s*$)/g, '');
//         setTags = setTags.split(',');
//         return setTags;
//     }

//     $(document).ready(function () {
//         if (document.getElementById('tags')) {
//             new Taggle('tags', {
//                 hiddenInputName: 'tags[]',
//                 placeholder: '',
//                 tags: parseTags('tag-data'),
//                 duplicateTagClass: 'bounce',
//                 onTagAdd: function () {
//                     $(this).val('');
//                     $('.tt-suggestion').remove();
//                 }
//             });
//         }
//     });
//     return (

//         <div className="   bg-zinc-200/60 opacity-100 fixed inset-0  z-50  ">

//             <div className="flex h-screen justify-center items-center ">

//                 <div className="flex-col items-center bg-white py-12 px-24 shadow-lg rounded-xl ">

//                     <div className="flex  text-2xl font-bold	 mb-10" >Check Free Slots</div>
//                     <div className="flex  text-xs mb-10" >Enter the reg. no. or name of the members</div>
//                     {/* <textarea class=" rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium focus:outline-none focus:bg-white" >
//                         <div id="example1"></div>
//                     </textarea> */}
//                     {/* <div id="example1" className="input textarea" ></div>
//                     <p id="log"></p> */}

//                     <div class="form-group">

//                         <div id="tags" class="tag-container"></div>
//                     </div>

//                     <div className="flex">
//                         <button onClick={handleOKClickNew} className=" rounded px-4 py-2 text-black hover:underline bg-white ">Cancel</button>
//                         <button onClick={handleCancelClickNew} className="rounded px-4 py-2 ml-4 text-white bg-blueTheme text-xs">Find Slots!</button>
//                     </div>

//                 </div>
//             </div>
//         </div>

//     );
// }

// export default ModalNewTeam

import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";
import { useState } from "react";
const FreeSlot = () => {
=======
import React from "react";
import Circle from "../assets/circle.svg";
import Cross from "../assets/Cross.svg";
import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const FreeSlotAdd = () => {
>>>>>>> origin/merge-trial-2
  var regex = /([0-9]{2})([A-Za-z]{3})([0-9]{4})/;
  const [tags, setTags] = useState([]);
  const [tagNote, setTagNote] = useState("Add a tag");
  const [saveTeam, setSaveTeam] = useState(true);
<<<<<<< HEAD
=======
  const ToastMessageContainer = (props) => {
    return (
      <div>
        <h1 className="mb-2">{props.error}</h1>
        {props.type && <h3>{props.type}:</h3>}
        {props.description && <p>{props.description}</p>}
      </div>
    );
  };
>>>>>>> origin/merge-trial-2
  function handleKeyDown(e) {
    if (e.key !== "Enter") return;
    else {
      setTagNote("Click a tag to remove.");
      const value = e.target.value;
      if (value.includes(",")) {
<<<<<<< HEAD
        const duplicates = [];
        const invalid = [];
        e.target.value = "";
        let newTag = [];
        var tag = value.split(",");
        tag.forEach((element) => {
          if (regex.test(element)) {
            if (
              tags.find((tag) => tag.toLowerCase() === element.toLowerCase())
            ) {
              duplicates.push(element);
              return;
            }
=======
        const invalid = [];
        e.target.value = "";
        let newTag = [];
        let tag = value.split(",");
        if (new Set(tag).size < tag.length) {
          toast.error(
            <ToastMessageContainer
              error="Duplicate tags found!"
              description="Duplicate tags inserted only once."
            />
          );
        }
        tag = new Set(tag);
        tag.forEach((element) => {
          if (regex.test(element)) {
>>>>>>> origin/merge-trial-2
            newTag.push(element);
          } else {
            invalid.push(element);
            return;
          }
        });
<<<<<<< HEAD
        if (duplicates.length > 0) {
          alert("Duplicate tags: " + duplicates.join(", "));
        }
        if (invalid.length > 0) {
          alert("Invalid tags: " + invalid.join(", "));
=======
        if (invalid.length > 0) {
          const invalidTags = invalid.join(", ");
          toast.error(
            <ToastMessageContainer
              error="Invalid tags found!"
              type="Invalid tags"
              description={invalidTags}
            />
          );
>>>>>>> origin/merge-trial-2
        }
        setTags([...tags, ...newTag]);
      } else {
        if (!value.trim()) return;
        else if (!regex.test(value) || value.length > 9) {
          setTagNote("Please enter a valid tag.");
<<<<<<< HEAD
          e.target.value = "";
          return;
        } else if (tags.includes(value.toUpperCase())) {
          alert(value + " already exists!");
=======
          toast.error(
            <ToastMessageContainer
              error="Invalid tag found!"
              type="Invalid tag"
              description={value}
            />
          );
          e.target.value = "";
          return;
        } else if (tags.includes(value.toUpperCase())) {
          toast.error(
            <ToastMessageContainer
              error={`${value.toUpperCase()} exists already!`}
            />,
            {
              position: toast.POSITION.TOP_RIGHT,
              // icon: <RiFileCopyLine size={25} color="green" />,
            }
          );
>>>>>>> origin/merge-trial-2
          e.target.value = "";
          return;
        }
        setTags([...tags, value.toUpperCase()]);
        e.target.value = "";
      }
    }
  }

  function removeTag(index) {
    setTags(tags.filter((el, i) => i !== index));
    if (tags.length === 0) setTagNote("Add a tag!");
  }
  const removeAll = () => {
    setTags([]);
    setTagNote("Add a tag");
  };

  //this is what you need in backend @Saarim
  const submitFreeSlot = () => {
    console.log(tags);
    console.log(saveTeam);
  };
<<<<<<< HEAD

  return (
    <div>
      <div>asdasd</div>
      <div className="grid grid-cols-12 bg-gray-300/70 backdrop-blur-sm absolute top-0 z-50 items-center ">
        <div className="col=span-1 md:col-span-3"></div>
        <div className="flex justify-center flex-col gap-y-3 drop-shadow-xl bg-white rounded-md p-3 col-span-10 md:col-span-6">
          <h1 className="text-center font-bold text-2xl">Check Free Slot</h1>
          <div>
            <div className="flex flex-col gap-y-3 justify-center items-start px-2 py-6">
              <div>
                Enter the reg no. or name of the members:
                <br />
                <i>Press Enter to seperate tags.</i>
                <br />
                <b>
                  *Note: Paste a string having registration numbers seperated by
                  commas to add all at once.
                </b>
              </div>
              <div className="self-center">{tagNote}</div>
              <div className="flex flex-col items-center  w-3/4 rounded-md justify-center gap-2 border self-center">
                <div className="flex flex-wrap md:flex-row overflow-x-scroll max-h-[200px] md:h-full items-center justify-center gap-3">
                  {tags.map((tag, index) => (
                    <button
                      onClick={() => removeTag(index)}
                      className="p-2 bg-[#CFDBE6] rounded-md hover:text-red-400 hover:line-through h hover:scale-110"
                      key={index}
                    >
                      <span className="text">{tag}</span>
                    </button>
                  ))}
                  <input
                    onKeyDown={handleKeyDown}
                    type="text"
                    className="w-fit text-center border rounded-md py-2"
                    placeholder="21XXX0000"
                  />
                </div>
              </div>
            </div>
            <button
              className="underline decoration-dotted underline-offset-2 font-semibold"
              onClick={removeAll}
            >
              Clear all
            </button>
          </div>
          <div
            className="flex gap-x-3 items-center font-bold cursor-pointer"
            onClick={() => {
              setSaveTeam(!saveTeam);
            }}
          >
            {saveTeam ? <CheckBox /> : <CheckBoxOutlineBlank />}
            Save this team
          </div>
          <div className="self-center flex w-3/4 md:w-2/4 justify-between gap-x-3">
            <button
              type="cancel"
              class="text-black bg-white border-none font-medium rounded-lg underline-offset-2 text-sm w-60 outline text-center underline decoration-dotted"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={submitFreeSlot}
              class="text-white bg-blue-700 font-medium rounded-lg text-sm w-60 py-2.5 text-center dark:bg-blue-600 "
            >
              Find Free Slot!
            </button>
          </div>
        </div>
        <div className="col-span-1 md:col-span-3"></div>
=======
  const [confirmationOpen, setConfirmationOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className={`absolute ${
          confirmationOpen ? "flex" : "hidden"
        } items-center bg-gray-800/50 backdrop-blur  h-full w-full justify-center z-50`}
      >
        <div className="bg-white rounded-md flex flex-col w-3/4">
          <div className="bg-blueTheme rounded-t-md border-b-2 py-2 text-white text-center">
            Are you Sure?
          </div>
          <div className="flex justify-evenly py-5">
            <button>Yes</button>
            <button>No</button>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col gap-y-3 drop-shadow-xl bg-white rounded-md p-3 md:col-span-6">
        <h1 className="text-center font-bold text-2xl">Check Free Slot</h1>
        <div>
          <div className="flex flex-col gap-y-3 justify-center items-start px-2 py-6">
            <div>
              Enter the reg no. or name of the members:
              <br />
              <i>Press Enter to seperate tags.</i>
              <br />
              <b>
                *Note: Paste a string having registration numbers seperated by
                commas to add all at once.
              </b>
            </div>
            <div className="self-center">{tagNote}</div>
            <div className="flex flex-col items-center w-full rounded-md justify-center gap-2 border self-center">
              <div className="flex flex-wrap md:flex-row overflow-x-scroll lg:overflow-hidden max-h-[200px] md:h-full items-center justify-center gap-3 py-4">
                {tags.map((tag, index) => (
                  <button
                    onClick={() => removeTag(index)}
                    className="p-2 bg-[#CFDBE6] rounded-md hover:text-red-400 hover:line-through h hover:scale-110"
                    key={index}
                  >
                    <span className="text">{tag}</span>
                  </button>
                ))}
                <input
                  onKeyDown={handleKeyDown}
                  type="text"
                  className="text-center border rounded-md py-2"
                  placeholder="21XXX0000"
                />
                <ToastContainer position="top-right" />
              </div>
            </div>
          </div>
          <button
            className="underline decoration-dotted underline-offset-2 font-semibold"
            onClick={removeAll}
          >
            Clear all
          </button>
        </div>
        <div
          className="flex gap-x-3 items-center font-bold cursor-pointer"
          onClick={() => {
            setSaveTeam(!saveTeam);
          }}
        >
          {saveTeam ? <CheckBox /> : <CheckBoxOutlineBlank />}
          Save this team
        </div>
        <div className="self-center flex w-3/4 md:w-2/4 justify-between gap-x-3">
          <button
            onClick={() => {
              setConfirmationOpen(!confirmationOpen);
            }}
            type="cancel"
            class="text-black bg-white border-none font-medium rounded-lg underline-offset-2 text-sm w-60 outline text-center underline decoration-dotted"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={submitFreeSlot}
            class="text-white bg-blue-700 font-medium rounded-lg text-sm w-60 py-2.5 text-center dark:bg-blue-600 "
          >
            Find Free Slot!
          </button>
        </div>
      </div>
    </div>
  );
};

// import '../index.css    '
const FreeSlot = ({ setModalOnNew, setChoiceNew }) => {
  const handleOKClickChoose = () => {
    setChoiceNew(true);
    setModalOnNew(false);
  };
  const handleCancelClickChoose = () => {
    setChoiceNew(false);
    setModalOnNew(false);
    console.log("cancel");
  };

  return (
    <div className="modal-container bg-zinc-200/60  opacity-100 fixed inset-0 z-10000 ">
      <div className="modal flex h-screen justify-center items-center opacity-100">
        <div className="flex-col items-center bg-white shadow-lg border rounded-xl ">
          <header className="p-4 bg-blueTheme text-white relative flex items-center rounded-t-xl">
            <img
              src={Cross}
              onClick={handleCancelClickChoose}
              alt=""
              className="cursor-pointer grid col-span-2 ml-5 mt-3 absolute top-[20%]"
            ></img>
            <h1 className="bg-blueTheme text-white col-span-4 text-xl w-full text-center">
              Create Team
            </h1>
          </header>
          <FreeSlotAdd />
        </div>
>>>>>>> origin/merge-trial-2
      </div>
    </div>
  );
};

export default FreeSlot;
