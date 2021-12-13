import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Login from "./Login";
import Feed from "./Feed";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

function App() {
  const user = null;
  return (
    <div className="app">
        <Header />
        <div className="app__body">
        <Sidebar />
        <Feed />
        {/*widget*/}
        </div>
      )
    </div>
  )
};

export default App;
