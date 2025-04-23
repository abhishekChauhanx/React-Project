import { FaUserCircle } from "react-icons/fa";

type UserCardProps = {
    person: string;
    setData:()=> void
}

const UserCard = ({ person ,setData}:UserCardProps) => {
    function handleFellowing(){
       setData(prevData=> prevData.map(p=> p.name=== person.name ? {...p,following:!p.following}: p))
      }
    return (
        <div className="flex items-center justify-between">
            <section className="flex items-center">
                <FaUserCircle className="text-3xl mr-3 text-gray-500" />
                <span>{person.name}</span>
            </section>
            <button className={`px-4 py-1 text-sm rounded-full cursor-pointer ${
          person.following ? "bg-black text-white" : "bg-gray-200 text-gray-700"
        }`}   onClick={handleFellowing}  >{person.following  ?"Following" :"Fellow"  }</button>
        </div>
    )
}

export default UserCard
