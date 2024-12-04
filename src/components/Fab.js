import React, { useState } from "react";
import "./Fab.css";

import { CiEraser } from "react-icons/ci";
import { BsPen } from "react-icons/bs";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { VscClearAll } from "react-icons/vsc";
import { FaRegEdit } from "react-icons/fa";
import { useTool } from "../contexts/ToolContext"; // Import context hook

function Fab() {
  const [isOpen, setIsOpen] = useState(false);
  const { setSelectedTool } = useTool(); // Access context setter

  const toggleFabMenu = () => setIsOpen(!isOpen);

  const handleToolSelect = (tool) => {
    setSelectedTool(tool);
    setIsOpen(false); // Optionally close the menu after selection
  };

  return (
    <div className="fab-container">
      {/* FAB Menu */}
      <div className={`fab-menu ${isOpen ? "open" : ""}`}>
        <button className="fab-option" title="Pen" onClick={() => handleToolSelect("pen")}>
          <BsPen />
        </button>
        <button className="fab-option" title="Brush" onClick={() => handleToolSelect("brush")}>
          <HiOutlinePaintBrush />
        </button>
        <button className="fab-option" title="Eraser" onClick={() => handleToolSelect("eraser")}>
          <CiEraser />
        </button>
        <button className="fab-option" title="Clear" onClick={() => handleToolSelect("clear")}>
          <VscClearAll />
        </button>
      </div>

      {/* Main FAB */}
      <button className="fab-main" onClick={toggleFabMenu}>
        <FaRegEdit />
      </button>
    </div>
  );
}

export default Fab;
