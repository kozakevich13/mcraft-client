import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Profile = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="profile">
      <h1>{currentUser.username}</h1>
      <p>{currentUser.email}</p>
    </div>
  );
};

export default Profile;
