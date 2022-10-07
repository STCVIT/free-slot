import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";
import { useState } from "react";
const FreeSlot = () => {
  var regex = /([0-9]{2})([A-Za-z]{3})([0-9]{4})/;
  const [tags, setTags] = useState([]);
  const [tagNote, setTagNote] = useState("Add a tag");
  const [saveTeam, setSaveTeam] = useState(true);
  function handleKeyDown(e) {
    if (e.key !== "Enter") return;
    else {
      setTagNote("Click a tag to remove.");
      const value = e.target.value;
      if (value.includes(",")) {
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
            newTag.push(element);
          } else {
            invalid.push(element);
            return;
          }
        });
        if (duplicates.length > 0) {
          alert("Duplicate tags: " + duplicates.join(", "));
        }
        if (invalid.length > 0) {
          alert("Invalid tags: " + invalid.join(", "));
        }
        setTags([...tags, ...newTag]);
      } else {
        if (!value.trim()) return;
        else if (!regex.test(value) || value.length > 9) {
          setTagNote("Please enter a valid tag.");
          e.target.value = "";
          return;
        } else if (tags.includes(value.toUpperCase())) {
          alert(value + " already exists!");
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

  return (
    <div>
      <div>asdasd</div>
      <div className="grid grid-cols-12 bg-gray-300/70 backdrop-blur-sm absolute w-screen top-0 z-50 items-center h-screen">
        <div className="col=span-1 md:col-span-3"></div>
        <div className="flex justify-center flex-col gap-y-3 drop-shadow-xl bg-white rounded-md p-3 col-span-10 md:col-span-6">
          <h1 className="text-center font-bold text-2xl">Check Free Slot</h1>
          <div>
            <div className="flex flex-col gap-y-3 justify-center items-start px-2 py-6">
              <div>
                Enter the reg no. or name of the members:
                <br />
                <i>Press Enter to seperate tags.</i>
              </div>
              <div className="self-center">{tagNote}</div>
              <div className="flex flex-col items-center w-3/4 p-2 rounded-md justify-center gap-2 border self-center">
                <div className="flex flex-wrap items-center justify-center gap-3">
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
      </div>
    </div>
  );
};

export default FreeSlot;
