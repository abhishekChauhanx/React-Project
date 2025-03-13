import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Notes from "./Components/Notes";
import View from "./Components/View";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Nav />
          <Home />
        </div>
      ),
    },
    {
      path: "/notes",
      element: (
        <div>
          <Nav />
          <Notes />
        </div>
      ),
    },
    {
      path: "/notes/:id",
      element: (
        <div>
          <Nav />
          <View />
        </div>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
