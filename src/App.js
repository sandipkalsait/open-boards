import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./pages/Home";
import Footer from "./components/Footer";
import "./App.css"; // Global styles
import Fab from "./components/Fab";
import { ToolProvider } from "./contexts/ToolContext";
// https://open-boards.web.app/
function App() {
  return (
    <div className="app-container">
      <ToolProvider>
        <Header />
        <div className="main-container">
          <Sidebar />
          <MainContent />
        </div>
        <Fab />
      </ToolProvider>
      <Footer />
    </div>
  );
}

export default App;
