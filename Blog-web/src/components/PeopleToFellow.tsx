import { useState } from "react";
import UserCard from "./UserCard";

// const peopleToFollow = [
//     { name: "Alena Gouse", following: false },
//     { name: "Ruben Bator", following: true },
//     { name: "Aspen Stanton", following: false },
//     { name: "Madelyn George", following: false },
//   ];

const PeopleToFellow = () => {
    const [data,setData] = useState([
        { name: "Alena Gouse", following: false },
        { name: "Ruben Bator", following: true },
        { name: "Aspen Stanton", following: false },
        { name: "Madelyn George", following: false },
    ])
  return (
    <div className="bg-white p-4 rounded-lg shadow">
   <h3 className="font-semibold text-lg mb-4">People to fellow</h3>
   <div className="space-y-4">
    {data.map((person,index)=>(
        <UserCard key={index} person={person} setData={setData}  />
    ))}
   </div>
    </div>
  )
}

export default PeopleToFellow
