import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import User from "./pages/User";
import Users from "./pages/Users";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
