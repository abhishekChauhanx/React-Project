import React from "react";
import Todo from "./Todos/Todo";
import Meals from "./Meals/Meals";
import Cal from "./Calculator/Cal";
import Theme from "./ChangeTheme/Theme";
import Search from "./SearchBar/Search";
import Testimonials from "./Testimonials/Testimonials";
import Accordion from "./Accordion/Accordion";
import { accordionData } from "./Accordion/content";

const App = () => {
  return (
    <div>
      {/* <Todo/> */}
      {/* <Meals/> */}
      {/* <Cal/> */}
      {/* <Theme/> */}
      {/* <Search/> */}
      {/* <Testimonials/> */}

      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default App;
