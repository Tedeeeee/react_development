import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPageComponent from "./main";
import ProductPage from "./product";
import UploadPage from "./upload";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPageComponent />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/upload" element={<UploadPage />} />
      </Routes>
    </Router>
  );
}

export default App;
