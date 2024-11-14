import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import IconEmail from "../src/assets/phone.png"; // Đảm bảo bạn đã đặt đúng đường dẫn
import IconZalo from '../src/assets/zalo.png'; // Đảm bảo bạn đã đặt đúng đường dẫn

const App = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleSidebarToggle = (collapsed) => {
    setIsSidebarCollapsed(collapsed);
  };

  return (
    <Router>
      <div className="flex">
        <Sidebar onToggle={handleSidebarToggle} />
        <MainContent />
      </div>

      {/* Fixed icons at the bottom right */}
      <div className="fixed bottom-4 md:bottom-12 right-1 md:right-20 space-y-4 flex flex-col items-center">
        <div className="p-4 motion-translate-x-in-[156%] motion-translate-y-in-[5%]  rounded-full bg-blue-500">
          <a href="https://zalo.me/0946602982" target="_blank" rel="noopener noreferrer">
            <img
              src={IconZalo}
              alt="Zalo Icon"
              className="w-4 md:w-8 rounded-full shake-effect"
            />
          </a>
        </div>
        <div className="p-4 motion-translate-x-in-[156%] motion-translate-y-in-[5%] rounded-full bg-red-500">
          <a href="tel:0946602982">
            <img
              src={IconEmail}
              alt="Email Icon"
              className="w-4 md:w-8 rounded-full shake-effect"
            />
          </a>
        </div>
      </div>
    </Router>
  );
};

export default App;
