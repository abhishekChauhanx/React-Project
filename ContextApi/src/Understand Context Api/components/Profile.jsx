import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user.username) return <div>Please Login</div>;
  return (
    <div>
      Name : - {user.username}
      Password : - {user.password}
    </div>
  );
};

export default Profile;
