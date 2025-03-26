import React from "react";
import "./accord.css";
const Accordian = ({ title, content ,isActive , setActivew }) => {

  return (
    <section className="accordion-card" >
      <div className="header" onClick={setActivew}>
        <div>{title}</div>
        <p className="icon"> {isActive ? "-" : "+"} </p>
      </div>
      <div className="content">
        {isActive && <p className="card-info">{content}</p>}
      </div>
    </section>
  );
};

export default Accordian;
