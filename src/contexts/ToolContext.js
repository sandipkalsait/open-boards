import React, { createContext, useContext, useState } from "react";

// Create the context
const ToolContext = createContext();

// Custom hook for accessing the context
export const useTool = () => useContext(ToolContext);

// Context provider
export const ToolProvider = ({ children }) => {
  const [selectedTool, setSelectedTool] = useState(null);

  return (
    <ToolContext.Provider value={{ selectedTool, setSelectedTool }}>
      {children}
    </ToolContext.Provider>
  );
};
