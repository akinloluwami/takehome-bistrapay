import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import ".././style.scss";
import { Link } from "react-router-dom";

function Home() {
  const [isLoading, setIsLoading] = useState(false);

  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify([]));
  }

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("https://randomuser.me/api/");
      setIsLoading(false);
      const userData = response.data.results[0];
      userData.account_balance = Math.floor(Math.random() * 100000);
      userData.id = Math.random().toString(36).substr(2, 6);
      toast.success(
        `${userData.name.first} ${userData.name.last} have been added to the list!`
      );
      const users = JSON.parse(localStorage.getItem("users"));
      users.push(userData);
      localStorage.setItem("users", JSON.stringify(users));
    } catch (error) {
      setIsLoading(false);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="home">
      <ToastContainer />
      <h1>User Account Management Software</h1>
      <div className="ctas">
        <button onClick={fetchUsers}>Add New User</button>
        <Link to="/users">View All Users</Link>
      </div>
    </div>
  );
}

export default Home;
