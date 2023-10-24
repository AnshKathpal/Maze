import logo from "./logo.svg";
import "./App.css";
import { Maze } from "./Components/Maze";
import { Maze2 } from "./Components/Maze2";
import { useState } from "react";
import { AllRoutes } from "./Routes/AllRoutes";

function App() {



  return (
    <div className="App">
      <AllRoutes/>
    </div>
  );
}

export default App;
