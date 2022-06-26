import React from "react";
import ".././style.scss";
import { Link } from "react-router-dom";
function UserCard({ name, picture, acct_bal, id }) {
  return (
    <Link className="user_card" to={`/user/${id}`}>
      <img src={picture} alt={name} />
      <h2>{name}</h2>
      <p>
        {acct_bal.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2,
        })}
      </p>
    </Link>
  );
}

export default UserCard;
