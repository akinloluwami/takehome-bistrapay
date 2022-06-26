import React from "react";
import { MdLocationPin } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
function User() {
  const id = window.location.pathname.split("/")[2];
  const users = localStorage.getItem("users");
  const user = JSON.parse(users).find((user) => user.id === id);
  const { name, picture, account_balance, location, nat, email } = user;

  return (
    <div className="single_user">
      <img src={picture.large} alt="" />
      <h1>
        {name.title} {name.first} {name.last}
      </h1>
      <p>
        <MdLocationPin />
        {location.street.number} {location.street.name}, {user.location.city}
      </p>
      <p>
        {location.state} {location.country}
        <img
          src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${nat}.svg`}
          alt=""
        />
      </p>
      <p>
        {" "}
        <a href={`mailto:${email}`}>{email}</a>{" "}
      </p>
      <div className="acct_bal">
        <p>
          Account Balance:{" "}
          {account_balance.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
          })}{" "}
        </p>
        <Link to={`/edit/${id}`}>
          <FaRegEdit />
        </Link>
      </div>
      <Link to="/users"> Back to all Users</Link>
    </div>
  );
}

export default User;
