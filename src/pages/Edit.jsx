import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
function Edit() {
  const id = window.location.pathname.split("/")[2];
  const users = localStorage.getItem("users");
  const user = JSON.parse(users).find((user) => user.id === id);
  const { name, account_balance } = user;
  const [acct_bal, setAcct_bal] = useState(account_balance);
  const navigate = useNavigate();
  const changeAccountBalance = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.find((user) => user.id === id);
    user.account_balance = parseFloat(acct_bal);
    localStorage.setItem("users", JSON.stringify(users));
    toast.success(
      `${name.first} ${name.last}'s account balance has been updated!`
    );
    setTimeout(() => {
      toast.warning("Redirecting...");
    }, 1000);
    setTimeout(() => {
      navigate(`/user/${id}`);
    }, 3000);
  };

  return (
    <div className="edit">
      <ToastContainer />
      <h1>Edit {name.first}'s balance </h1>
      <form onSubmit={changeAccountBalance}>
        <div className="input">
          $
          <input
            type="number"
            value={acct_bal}
            onChange={(e) => {
              setAcct_bal(e.target.value);
            }}
          />
        </div>
        <button>Save Changes</button>
      </form>
    </div>
  );
}

export default Edit;
