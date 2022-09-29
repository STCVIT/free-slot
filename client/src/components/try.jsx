import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";
import { useState } from "react";

function TagsInput() {
  const [tags, setTags] = useState([]);
  const [tagNote, setTagNote] = useState("Add a tag");
  function handleKeyDown(e) {
    if (e.key !== "Enter") return;
    else {
      setTagNote("Click a tag to remove.");
    }
    const value = e.target.value;
    if (!value.trim()) return;
    setTags([...tags, value]);
    e.target.value = "";
  }

  function removeTag(index) {
    setTags(tags.filter((el, i) => i !== index));
    if (tags.length === 0) setTagNote("Add a tag!");
  }
  const removeAll = () => {
    setTags([]);
    setTagNote("Add a tag");
  };

  const submitTags = () => [console.log(tags)];
  return (
    <div className="flex flex-col gap-y-3 justify-center items-start px-2 py-6">
      <div>
        Enter the reg no. or name of the members:
        <br />
        <i>Press Enter to seperate tags.</i>
      </div>
      <div className="self-center">{tagNote}</div>
      <div className="flex flex-col items-center w-[30rem] p-2 rounded-md justify-center gap-2 border">
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
        <button onClick={submitTags}>Submit</button>
      </div>
        <button className="self-center px-3 py-2 bg-red-400 rounded-md text-white font-semibold" onClick={removeAll}>Clear all</button>
    </div>
  );
}

const FreeSlot = () => {
  const [saveTeam, setSaveTeam] = useState(false)

  return (
    <div className="h-screen w-screen bg-gray-300">
      <div className="flex z-50 top-[25vh] left-[35vw] absolute justify-center flex-col gap-y-3 drop-shadow-xl bg-white rounded-md py-3 px-10">
        <h1 className="text-center font-bold text-2xl">Check Free Slot</h1>
        <TagsInput />
        <div className="flex gap-x-3 items-center font-bold cursor-pointer" onClick={()=>{
          setSaveTeam(!saveTeam)
          console.log(saveTeam)
          }}>
          {saveTeam ?  <CheckBoxOutlineBlank /> : <CheckBox />}
          Save this team
        </div>
        <div className="self-center flex w-2/4 justify-between gap-x-3">
              <button
                type="cancel"
                class="text-black bg-white border-none font-medium rounded-lg text-sm w-60 outline text-center underline decoration-dotted outline-offset-0"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="text-white bg-blue-700 font-medium rounded-lg text-sm w-60 py-2.5 text-center dark:bg-blue-600 "
              >
                Find Free Slot!
              </button>
            </div>
      </div>
    </div>
  );
};

export default FreeSlot;
