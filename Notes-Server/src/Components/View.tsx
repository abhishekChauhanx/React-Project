import { useSelector } from "react-redux";
import { useParams } from "react-router";

const View = () => {
    const {id} =useParams();
    const allNotes = useSelector(state=> state.note.notes)

    const note = allNotes.filter(p=> p._id === id)[0]

  return (
    <div className="mt-4">
      <input
        className="p-4 mr-4 rounded-lg outline-none border-none text-black"
        type="text"
        value={note.title}
        disabled
      />

      <div className="mt-4">
        <textarea
          disabled
          value={note.content}
          rows="20"
          className="min-w-[500px] p-4 rounded-lg outline-none border-none text-black "
          placeholder="Enter Content"
        ></textarea>
      </div>
    </div>
  );
};

export default View;
