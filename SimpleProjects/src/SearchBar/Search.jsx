import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  function handleClick(e) {
    setBgColor("#1a1a1a");
    if (e.target.className === "container") {
      setShowInput(false);
      setBgColor('white')
    }
  }
  return (
    <section
      className="container"
      style={{ backgroundColor: bgColor }}
      onClick={handleClick}
    >
      {showInput ? (
        <input type="text" placeholder="Search" />
      ) : (
        <IoSearch onClick={() => setShowInput(true)} />
      )}
    </section>
  );
};

export default Search;
