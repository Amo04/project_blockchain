import React from "react";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Transactions from "./components/Transactions";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Welcome />
      <Transactions />
    </div>
  );
};

export default App;