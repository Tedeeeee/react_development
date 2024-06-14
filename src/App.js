import "./App.css";
import React from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import MainPageComponent from "./main";
import ProductPage from "./product";
import UploadPage from "./upload";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="/images/icons/logo.png" />
          </Link>
          <Button
            size="large"
            onClick={() => {
              navigate("/upload");
            }}
            icon={<DownloadOutlined />}
          >
            상품 업로드
          </Button>
        </div>
      </div>
      <div id="body">
        <Routes>
          <Route path="/" element={<MainPageComponent />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
