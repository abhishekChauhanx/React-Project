import { useEffect, useState } from "react";
import CreateNotes from "./CreateNotes";
import "./Notes.css";
import Note from "./Note";
const Notes = () => {
  const [text, setText] = useState("");
  const [notes, setNotes] = useState([]);
  const [edit, setEdit] = useState(null);

  function editHandler(id, text) {
    setEdit(id);
  }
  function saveHandle() {
    setNotes((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: text,
      },
    ]);
    setText("");
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"));
    if (data) {
      setNotes(notes);
    }
  }, []);
  useEffect(() => {
    window.localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);
  return (
    <div className="notes">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          editHandler={editHandler}
        ></Note>
      ))}
      <CreateNotes text={text} setText={setText} saveHandle={saveHandle} />
    </div>
  );
};

export default Notes;
