import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Instgram from "./Instgram";
import Whatsap from "./Whatsap";

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whatsapp" element={<Whatsap />} />
        <Route path="/instagram" element={<Instgram />} />
      </Routes>
    </div>
  );
}
