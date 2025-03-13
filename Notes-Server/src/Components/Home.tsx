import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToNotes, updateToNotes } from "../Feature/NoteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const allNotes = useSelector((state) => state.note.notes);

  function createBtn() {
    const notes = {
      title: title,
      content: content,
      _id: noteId || Date.now().toString(36),
      date: new Date().toISOString(),
    };
    if (noteId) {
      //update
      dispatch(updateToNotes(notes));
    } else {
      //create

      dispatch(addToNotes(notes));
    }
    setContent("");
    setTitle("");
    searchParams({});
  }
  const noteId = searchParams.get("noteId");
  useEffect(() => {
    if (noteId) {
      const note = allNotes.find((n) => n._id === noteId);
      setTitle(note.title);
      setContent(note.content);
    }
  }, [noteId]);
  return (
    <div className="mt-4">
      <input
        className="p-4 mr-4 rounded-lg outline-none border-none text-black"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Title"
      />
      <button onClick={createBtn}>
        {" "}
        {noteId ? "Update Note" : "Add Note"}{" "}
      </button>

      <div className="mt-4">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="20"
          className="min-w-[500px] p-4 rounded-lg outline-none border-none text-black "
          placeholder="Enter Content"
        ></textarea>
      </div>
    </div>
  );
};

export default Home;
