import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import RecipeDetails from "./Components/RecipeDetails";
import React from "react";
import Sidebar from "./Components/Sidebar";



function App() {
  
  return (
    <div className="flex w-full gap-4">
      

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meal/:id" element={<RecipeDetails />} />
        </Routes>
      
      
      </div>
  );
}

export default App;
