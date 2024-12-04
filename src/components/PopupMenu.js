import React, { useState, useRef, useEffect } from "react";
import "./PopupMenu.css"; // Add custom styling here
import { FiPlus, FiFile, FiFolder, FiSettings } from "react-icons/fi";

function PopupMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="popup-menu">
      {/* Trigger Button */}
      <button className="menu-trigger" onClick={toggleMenu}>
        <FiPlus size={20} /> New
      </button>

      {/* Popup Menu */}
      {isOpen && (
        <div className="menu-content" ref={menuRef}>
          <ul>
            <li>
              <FiFile size={16} /> New File
            </li>
            <li>
              <FiFolder size={16} /> New Folder
            </li>
            <li>
              <FiSettings size={16} /> Settings
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default PopupMenu;
