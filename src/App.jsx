import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import "./App.css";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        Layout
        <div className="routes">
          <Routes>
            <Route path="/" element={"Home"} />
            <Route path="/exchanges" element={"Exchanges"} />
            <Route path="/cryptocurrencies" element={"Cryptos"} />
            <Route path="/crypto/:coinId" element={"CryptoDetails"} />
            <Route path="/news" element={"News"} />
          </Routes>
        </div>
        Layout
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Copyright © 2022 <Link to="/">CryptoMonitor</Link>
            <br />
            All Rights Reserved.
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
