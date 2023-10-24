import React, { useState, useEffect } from "react";
import "../maze.css";
import queen from "../images/queen.png";

export const Maze2 = () => {
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

      const conditionMap = {
        "0,0,ArrowLeft": true,
        "0,0,ArrowUp": true,
        "0,74,ArrowRight": true,
        "0,74,ArrowLeft": true,
        "74,0,ArrowUp": true,
        "74,0,ArrowDown": true,
        "148,0,ArrowRight": true,
        "74,148,ArrowUp": true,
        "74,148,ArrowRight": true,
        "148,0,ArrowUp": true,
        "148,148,ArrowLeft": true,
        "148,148,ArrowUp": true,
        "0,148,ArrowLeft": true,
        "0,148,ArrowDown": true,
        "148,74,ArrowLeft": true,
        "148,74,ArrowDown": true,
        "222,74,ArrowUp": true,
        "222,148,ArrowRight": true,
        "222,148,ArrowDown": true,
        "296,74,ArrowUp": true,
        "296,74,ArrowRight": true,
        "296,74,ArrowDown": true,
        //4th row
        "74,222,ArrowRight": true,
        "74,222,ArrowLeft": true,
        "148,222,ArrowLeft": true,
        "148,222,ArrowDown": true,
        "222,222,ArrowUp": true,
        "222,222,ArrowRight": true,
        "444,222,ArrowLeft": true,
        "518,222,ArrowUp": true,
        "518,222,ArrowDown": true,
        "592,222,ArrowUp": true,
        "592,222,ArrowRight": true,
        //5th Row
        "74,296,ArrowLeft": true,
        "74,296,ArrowDown": true,
        "148,296,ArrowUp": true,
        "148,296,ArrowRight": true,
        "148,296,ArrowDown": true,
        "222,296,ArrowLeft": true,
        "222,296,ArrowRight": true,
        "370,296,ArrowUp": true,
        "370,296,ArrowLeft": true,
        "444,296,ArrowDown": true,
        "518,296,ArrowUp": true,
        "518,296,ArrowRight": true,
        "592,296,ArrowLeft": true,
        "592,296,ArrowRight": true,
        // 6th Row
        "148,370,ArrowUp": true,
        "148,370,ArrowLeft": true,
        "148,370,ArrowDown": true,
        "296,370,ArrowDown": true,
        "296,370,ArrowUp": true,
        "370,370,ArrowDown": true,
        "370,370,ArrowRight": true,
        "518,370,ArrowRight": true,
        "518,370,ArrowLeft": true,
        "592,370,ArrowLeft": true,
        "592,370,ArrowRight": true,
        // 7th Row
        "222,444,ArrowRight": true,
        "222,444,ArrowLeft": true,
        "444,444,ArrowLeft": true,
        "444,444,ArrowDown": true,
        "444,444,ArrowUp": true,
        "518,444,ArrowRight": true,
        "518,444,ArrowDown": true,
        "592,444,ArrowLeft": true,
        "592,444,ArrowRight": true,
        // 8th Row
        "148,518,ArrowUp": true,
        "148,518,ArrowLeft": true,
        "148,518,ArrowDown": true,
        "222,518,ArrowDown": true,
        "222,518,ArrowRight": true,
        "444,518,ArrowLeft": true,
        "444,518,ArrowUp": true,
        "518,518,ArrowUp": true,
        "518,518,ArrowDown": true,
        "592,518,ArrowDown": true,
        "592,518,ArrowRight": true,
        // 9th Row
        "444,592,ArrowLeft": true,
        "444,592,ArrowDown": true,
        "518,592,ArrowDown": true,
        "518,592,ArrowUp": true,
        "592,592,ArrowUp": true,
        "592,592,ArrowDown": true,
        "592,592,ArrowRight": true,
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
    return 74;
  }

  const numRows = 9;
  const numCols = 9;

  const redDivSize = {
    width: `${(100 / numCols).toFixed(2)}%`,
    height: `${(100 / numRows).toFixed(2)}%`,
  };

  console.log(redDivSize, "divsize");

  console.log(position);

  const numDivs = 81; // Set the total number of divs you want

  const divs = [];
  for (let i = 1; i <= numDivs; i++) {
    divs.push(<div key={i} className="maze2Box"></div>);
  }

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
      <div>
        {position.x} {position.y}
      </div>
      <p style={{ fontSize: "20px" }}>Mario Moves: {recentCommand}</p>
      <div
        // style={{
        //   position: "relative",
        //   width: "40%",
        //   height: "70vh",
        //   border: "6px double brown",
        //   display: "grid",
        //   gridTemplateColumns: "repeat(9,1fr)",
        //   gridTemplateRows: "repeat(9,1fr)",
        // }}
        className="mainDiv"
      >
        {divs}

        <div
          style={{
            ...redDivSize,
            width: "11.11%",
            height: "11.11%",
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
      {/* <div style={{ fontSize: "40px", marginTop: "40px" }}>
        Teachable Machine Audio Model
      </div> */}
      {/* <div>
      x = {position.x}  
      </div>
    
      <div>
      y = {position.y}  
      </div> */}
    </div>
  );
};
