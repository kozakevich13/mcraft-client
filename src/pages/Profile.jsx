import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const userContext = useContext(UserContext);
  const user = userContext.user;
  console.log(user);
  return (
    <div>
      <h1>profile</h1>
      <h1>Welcome, {user.name}!</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
