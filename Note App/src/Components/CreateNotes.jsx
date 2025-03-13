import React from "react";

const CreateNotes = ({ text, setText, saveHandle }) => {
  const char = 100;
  const charLimit = char - text.length;
  return (
    <div className="note">
      <textarea
        maxLength={100}
        onChange={(e) => setText(e.target.value)}
        cols={10}
        rows={5}
        placeholder="Type...."
      ></textarea>
      <div className="note-footer">
        <span className="label">
          {charLimit} Left
          <button onClick={saveHandle} className="note-save-btn">
            Save
          </button>
        </span>
      </div>
    </div>
  );
};

export default CreateNotes;
