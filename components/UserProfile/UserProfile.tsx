import React from "react";

const UserProfile = ({ user }) => (
    <div className="box-center">
      <img
        src={user?.photoURL || "/hacker.png"}
        className="card-img-center"
        alt=""
      />
      <p>
        <i>@{user.username}</i>
      </p>
      <h1>{user.displayName || "Anonymous User"}</h1>
    </div>
  );

export default UserProfile;
