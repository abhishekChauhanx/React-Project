import React, { useState } from "react";
import { accordionData } from "./content";
import Accordian from "./Accordian";

const App = () => {
  const [oneActive, setOneActivew] = useState(null);
  return (
    <div className="accordian">
      {accordionData.map(({ title, content }, index) => (
        <Accordian
          title={title}
          content={content}
          key={index}
          isActive={oneActive === index}
          setActivew={() =>
            setOneActivew(oneActive === index ? null : index)
          }
        />
      ))}
    </div>
  );
};

export default App;
