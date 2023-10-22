import React, { useState, useEffect } from "react";
import "../maze.css";
import queen from "../images/queen.png";

export const Maze = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [recentCommand, setRecentCommand] = useState("");

  const [keypressEnabled, setKeypressEnabled] = useState(true);

  useEffect(() => {
    // Register the voice command event listener
    const handleVoiceCommandRecognized = (event) => {


      const VoiceConditionMap = {
        "0,0,Left": true,
        "0,0,Up": true,
        "0,0,Down": true,
        "70,0,Right": true,
        "70,0,Up": true,
        "70,70,Left": true,
        "70,70,Down": true,
        "140,70,Right": true,
        "140,70,Up": true,
        "140,140,Left": true,
        "140,140,Right": true,
        "140,210,Right": true,
        "140,210,Down": true,
        "70,210,Up": true,
        "70,210,Left": true,
        "70,280,Down": true,
        "140,280,Down": true,
        "140,280,Up": true,
        "210,280,Up": true,
        "210,280,Down": true,
        "280,280,Right": true,
        "280,280,Down": true,
        "280,210,Left": true,
        "280,210,Up": true,
        "350,210,Up": true,
        "350,210,Right": true,
        "350,280,Left": true,
        "350,280,Down": true,
        "420,280,Up": true,
        "420,280,Right": true,
        "420,350,Right": true,
        "420,350,Down": true,
        "350,350,Up": true,
        "350,420,Left": true,
        "350,420,Down": true,
        "420,420,Right": true,
        "420,420,Down": true,
        "420,420,Up": true,
      };


      // Check if the condition exists in the map
      
      
      const recognizedCommand = event.detail;
      
      
      const conditionKey = `${position.x},${position.y},${recognizedCommand}`;
      
      if (VoiceConditionMap[conditionKey]) {
        return;
      }
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
  }, [position]);

  console.log("check Position", position);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!keypressEnabled) {
        return;
      }

      // if (position.x === 0 && position.y === 0 && event.key === "ArrowLeft") {
      //   return;
      // }

      // if (position.x === 0 && position.y === 0 && event.key === "ArrowUp") {
      //   return;
      // }

      // if (position.x === 70 && position.y === 0 && event.key === "ArrowRight") {
      //   return;
      // }

      // if (position.x === 70 && position.y === 0 && event.key === "ArrowUp") {
      //   return;
      // }

      

      const conditionMap = {
        "0,0,ArrowLeft": true,
        "0,0,ArrowUp": true,
        "0,0,ArrowDown": true,
        "70,0,ArrowRight": true,
        "70,0,ArrowUp": true,
        "70,70,ArrowLeft": true,
        "70,70,ArrowDown": true,
        "140,70,ArrowRight": true,
        "140,70,ArrowUp": true,
        "140,140,ArrowLeft": true,
        "140,140,ArrowRight": true,
        "140,210,ArrowRight": true,
        "140,210,ArrowDown": true,
        "70,210,ArrowUp": true,
        "70,210,ArrowLeft": true,
        "70,280,ArrowDown": true,
        "140,280,ArrowDown": true,
        "140,280,ArrowUp": true,
        "210,280,ArrowUp": true,
        "210,280,ArrowDown": true,
        "280,280,ArrowRight": true,
        "280,280,ArrowDown": true,
        "280,210,ArrowLeft": true,
        "280,210,ArrowUp": true,
        "350,210,ArrowUp": true,
        "350,210,ArrowRight": true,
        "350,280,ArrowLeft": true,
        "350,280,ArrowDown": true,
        "420,280,ArrowUp": true,
        "420,280,ArrowRight": true,
        "420,350,ArrowRight": true,
        "420,350,ArrowDown": true,
        "350,350,ArrowUp": true,
        "350,420,ArrowLeft": true,
        "350,420,ArrowDown": true,
        "420,420,ArrowRight": true,
        "420,420,ArrowDown": true,
        "420,420,ArrowUp": true,
      };
      
      // Create a condition key based on the current position and event key
      const conditionKey = `${position.x},${position.y},${event.key}`;
      
      // Check if the condition exists in the map
      if (conditionMap[conditionKey]) {
        return;
      }



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

  console.log(redDivSize);

  console.log(position);

  return (
    <div
      style={{
        width: "100%",
        height: "85vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Mario Maze</h1>
      <p style={{ fontSize: "20px" }}>Mario Moves: {recentCommand}</p>
      <div
        style={{
          position: "relative",
          width: "30%",
          height: "50vh",
          border: "6px double brown",
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="mazeBox"
        >
          <img
            style={{ height: "50px" }}
            src="https://mario.wiki.gallery/images/6/65/Goomba_-_Mario_Party_Superstars.png"
            alt=""
          />
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRight: "none",
          }}
          className="mazeBox"
        >
          <img
            style={{ height: "50px" }}
            src="https://mario.wiki.gallery/images/6/65/Goomba_-_Mario_Party_Superstars.png"
            alt=""
          />
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRight: "none",
          }}
          className="mazeBox"
        >
          <img
            style={{ height: "50px" }}
            src="https://mario.wiki.gallery/images/6/65/Goomba_-_Mario_Party_Superstars.png"
            alt=""
          />
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
          <img style={{ height: "65px" }} src={queen} alt="" />
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // transform: "translate(20%, 20%)",
          }}
        >
          <img
            style={{ height: "85%" }}
            src="https://freepngimg.com/thumb/categories/1130.png"
            alt=""
          />
        </div>
      </div>
      <div style={{ fontSize: "40px", marginTop: "40px" }}>
        Teachable Machine Audio Model
      </div>
      <div>
      x = {position.x}  
      </div>
    
      <div>
      y = {position.y}  
      </div>
      
    </div>
  );
};
