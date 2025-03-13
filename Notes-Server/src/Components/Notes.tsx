import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromNote } from "../Feature/NoteSlice";
import toast from "react-hot-toast";
import { NavLink } from "react-router";

const Notes = () => {
  const note = useSelector((state) => state.note.notes);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const filterData = note.filter((i) => {
    return i.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
  function handleDelete(noteId) {
    console.log(noteId);
    dispatch(removeFromNote(noteId));
  }

  function handleCopy(content) {
    navigator.clipboard.writeText(content);
    toast.success("Copied in Clipboard");
  }
  return (
    <div>
      <h1>All Notes</h1>
      <input
        className="p-4 outline-none text-black border-none rounded-lg"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex flex-col mt-10">
        {filterData.length > 0 &&
          filterData.map((i) => {
            return (
              <div
                className="border-blue-600 border-[2px] mt-8 p-5"
              >
                {/* <h1>{i._id}</h1> */}
                <div>{i.title}</div>
                <div>{i.content}</div>
                <div className="flex  justify-evenly">
                  <button>
                    <NavLink to={`/?noteId=${i?._id}`}>
                    Edit
                    </NavLink>
                  </button>
                  <button onClick={() => handleDelete(i?._id)}>Remove</button>
                  <button onClick={() => handleCopy(i.content)}>Copy</button>
                  <button>
                    <NavLink to={`/notes/${i?._id}`}>
                    View
                    </NavLink>
                  </button>
                  <button>Share</button>
                </div>
                <div>{i.date}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Notes;
