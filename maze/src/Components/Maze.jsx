import React, { useState, useEffect } from "react";
import "../maze.css"

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
    return 50;
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column", // To display the command below the maze
        alignItems: "center",
      }}
    >
      <p style={{ fontSize: "20px" }}>Recent Command: {recentCommand}</p>
      <div
        style={{
          position: "relative",
          width: "30%",
          height: "50vh",
          border: "1px solid black",
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
<div className="mazeBox"></div>

        <div
          style={{
            border: "1px solid red",
            width: "69px",
            height: "69px",
            position: "absolute",
            top: `${position.y}px`,
            left: `${position.x}px`,
            transition: "all 0.1s ease",
          }}
        ></div>
      </div>
    </div>
  );
};
