import React from "react";
import { useState, useContext } from "react";
import UserContext from "../Context/UserContext";
const Login = () => {
  const [info, setInfo] = useState({
    username: "",
    password: "",
  });

  const { setUser } = useContext(UserContext);

  //handle Change

  function handleChange(e) {
    const {name, value }= e.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    setUser(info);
  }

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter Username"
        value={info.username}
        onChange={handleChange}
        name="username"
      />
      <input
        type="password"
        placeholder="Enter Username"
        value={info.password}
        onChange={handleChange}
        name="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
