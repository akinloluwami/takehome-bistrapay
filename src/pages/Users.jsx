import React, { useState, useEffect } from "react";
import UserCard from "../components/UserCard";
import { Link } from "react-router-dom";
function Users() {
  const users = localStorage.getItem("users");
  return (
    <div className="users">
      {JSON.parse(users).map((user) => (
        <div>
          <UserCard
            key={user.id}
            name={user.name.first + " " + user.name.last}
            picture={user.picture.medium}
            acct_bal={user.account_balance}
            id={user.id}
          />
        </div>
      ))}
      <Link to="/" className="back">
        {" "}
        Back to Home
      </Link>
    </div>
  );
}

export default Users;
