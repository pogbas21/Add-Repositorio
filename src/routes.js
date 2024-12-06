import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Repositorio from "./pages/repositorio";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/repositorio/:repositorio" element={<Repositorio />} />
      </Routes>
    </BrowserRouter>
  );
}
