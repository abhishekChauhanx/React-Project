import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
const Github = () => {
    const data = useLoaderData()
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/AbhishekChauhan")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Data Updated");
//         setData(data);
//       });
//   }, []);
  return (
    <div className="p-4 m-4 text-3xl text-center text-white bg-gray-400">
      {data?.login}
    </div>
  );
};

export default Github;

export const GithubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/AbhishekChauhan");

  return res.json();
};
