import React, { useState, useEffect } from "react";
import "../maze.css";
import queen from "../images/queen.png"

export const Maze = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [recentCommand, setRecentCommand] = useState(""); // State to store the recent command

  useEffect(() => {
    // Register the voice command event listener
    const handleVoiceCommandRecognized = (event) => {
      const recognizedCommand = event.detail;
      console.log("Recognized Command:", recognizedCommand);

      // Update the recent command state
      setRecentCommand(recognizedCommand);

      switch (recognizedCommand) {
        case "Left":
          left();
          break;
        case "Right":
          right();
          break;
        case "Down":
          down();
          break;
        case "Up":
          up();
          break;
        default:
          break;
      }
    };

    document.addEventListener(
      "voiceCommandRecognized",
      handleVoiceCommandRecognized
    );

    return () => {
      document.removeEventListener(
        "voiceCommandRecognized",
        handleVoiceCommandRecognized
      );
    };
  }, []);


  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          left();
          break;
        case "ArrowRight":
          right();
          break;
        case "ArrowUp":
          up();
          break;
        case "ArrowDown":
          down();
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [position, recentCommand]);
  



  function right() {
    setPosition((prevPos) => ({
      ...prevPos,
      x: prevPos.x + getStepSize(),
    }));
  }

  function left() {
    setPosition((prevPos) => ({
      ...prevPos,
      x: prevPos.x - getStepSize(),
    }));
  }

  function down() {
    setPosition((prevPos) => ({
      ...prevPos,
      y: prevPos.y + getStepSize(),
    }));
  }

  function up() {
    setPosition((prevPos) => ({
      ...prevPos,
      y: prevPos.y - getStepSize(),
    }));
  }

  function getStepSize() {
    return 70;
  }


  const numRows = 7;
  const numCols = 7;

  const redDivSize = {
    width: `${(100 / numCols).toFixed(2)}%`,
    height: `${(100 / numRows).toFixed(2)}%`,
  };

  console.log(redDivSize)

  return (
    <div
      style={{
        width: "100%",
        height: "85vh",
        display: "flex",
        flexDirection: "column", 
        alignItems: "center",
        justifyContent : "center",
      }}
    >
      <h1>Mario Maze</h1>
      <p style={{ fontSize: "20px" }}>Mario Moves: {recentCommand}</p>
      <div
        style={{
          position: "relative",
          width: "30%",
          height: "50vh",
          border: "1px solid blue",
          display: "grid",
          gridTemplateColumns: "repeat(7,1fr)",
          gridTemplateRows: "repeat(7,1fr)",
        }}
      >
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div style={{display : "flex", justifyContent : "center", alignItems : "center"}} className="mazeBox">
          <img style={{height : "50px"}} src="https://mario.wiki.gallery/images/6/65/Goomba_-_Mario_Party_Superstars.png" alt="" />
        </div>
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div style={{display : "flex", justifyContent : "center", alignItems : "center", borderRight : "none"}} className="mazeBox">
          <img style={{height : "50px"}} src="https://mario.wiki.gallery/images/6/65/Goomba_-_Mario_Party_Superstars.png" alt="" />
        </div>
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div style={{display : "flex", justifyContent : "center", alignItems : "center", borderRight : "none"}} className="mazeBox">
          <img style={{height : "50px"}} src="https://mario.wiki.gallery/images/6/65/Goomba_-_Mario_Party_Superstars.png" alt="" />
        </div>
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div className="mazeBox"></div>
        <div className="mazeBox">
          <img style={{ height : "65px"}} src={queen} alt="" />
        </div>

        <div
          style={{
            ...redDivSize,
            width: "14.29%",
            height: "14.29%",
            position: "absolute",
            // border : "1px solid red",
            top: `${position.y}px`,
            left: `${position.x}px`,
            transition: "all 0.1s ease",
            display : "flex",
            justifyContent:"center",
            alignItems : "center",
            // transform: "translate(20%, 20%)",
          }}
        >
          <img style = {{height : "85%"}} src="https://freepngimg.com/thumb/categories/1130.png" alt="" />
        </div>
      </div>
      <div style={{fontSize : "40px", marginTop : "40px"}} >Teachable Machine Audio Model</div>
    </div>
  );
};
