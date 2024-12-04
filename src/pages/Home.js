import React, { useState } from "react";
import "./Home.css";
import PopupMenu from "../components/PopupMenu";
import Workspace from "./Workspace";
import { FiMaximize, FiMinimize } from "react-icons/fi"; // Import icons

function MainContent() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen((prevState) => !prevState);
  };

  return (
    <main className="main-content">
      <h2>Welcome to open-boards!</h2>
      <PopupMenu />
      <p>Start your learning journey with interactive simulations in various subjects.</p>

      {/* Workspace */}
      <div
        className={`workspace ${isFullscreen ? "fullscreen" : ""}`}
      >
       <Workspace window={isFullscreen} />
      </div>

      {/* Button to toggle fullscreen */}
      <button className="fullscreen-toggle" onClick={toggleFullscreen}>
        {isFullscreen ? <FiMinimize /> : <FiMaximize />}
      </button>
    </main>
  );
}

export default MainContent;
