import React, { useState } from "react";

import "./theme.css";
const Theme = () => {
  const [changeBg, setChangeBg] = useState("white");
  const [changeText, setChangeText] = useState("#1b1b1b");
  const [changeBtn, setChangeBtn] = useState("white");

  function handleClick() {
    setChangeBg(changeBg === "white" ? "#1b1b1b" : "white");
    setChangeText(changeText === "#1b1b1b" ? "yellow" : "#1b1b1b");
    setChangeBtn(changeBtn === "white" ? "#1b1b1b" : "white");
  }
  return (
    <div style={{ background: changeBg, color: changeText }}>
      <button
        onClick={handleClick}
        style={{ color: changeText, border: `2px solid ${changeText}` }}
      >
        {" "}
        {changeBg === "#1b1b1b" ? "Black Theme" : "White Theme"}{" "}
      </button>

      <section className="content">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vitae
          eos sint.
        </h1>
      </section>
    </div>
  );
};

export default Theme;
