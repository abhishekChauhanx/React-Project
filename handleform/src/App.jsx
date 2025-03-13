import React, { useRef, useState } from "react";
import FomInput from "./Components/FomInput";

const App = () => {
  const [value, setValue] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  const input = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMess:"username should be 3-16 characters",
      label: "UserName",
      pattern:"^[A-Za-z0-9]{3,16}$",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMess:"Enter valid email",
      label: "email",
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      errorMess:'',
      label: "Birthday",
      pattern: /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4})$/

    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMess:"8-20 charcter and include atleast one letter and 1 number  and 1 special char",
      label: "Password",
      pattern:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/


    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMess:"password doesnot match",
      label: "Confirm Password",
      pattern:value.password
    },
  ];
  function handleSubmit(e) {
    e.preventDefault();
    let storedData = JSON.parse(localStorage.getItem("Form Data")) || [];
    storedData.push(value);
    localStorage.setItem("Form Data", JSON.stringify(storedData));

    console.log(value);
  }
  function onChange(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }

  return (
    <div className="container">
      <form className="box" onSubmit={handleSubmit}>
        {input.map((i) => (
          <FomInput
            key={i.id}
            {...i}
            value={value[i.name]}
            onChange={onChange}
          />
        ))}

        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
