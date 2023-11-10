import React, { Component } from "react";
import TrainingCert from "./Components/TrainingCert";
import VerificationCert from "./Components/VerificationCert";
import Home from "./Components/Home";
import { Route, Routes } from "react-router";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import "./CSS/App.css";

function App() {
  return (
    <div>
      <Nav></Nav>

      <Routes>
        <Route index element={<Home />} />
        <Route path="/TrainingCert" element={<TrainingCert />} />
        <Route path="/VerificationCert" element={<VerificationCert />} />
      </Routes>
    </div>
  );
}

export default App;
