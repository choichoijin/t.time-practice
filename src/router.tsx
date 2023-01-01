import { Route, Routes } from "react-router-dom";
import React from "react";
import MyResult from "./pages/myResult";
import TeamResult from "./pages/teamResult";

function Router() {
  return (
    <Routes>
      <Route path="/myResult" element={<MyResult />} />
      <Route path="/teamResult" element={<TeamResult />} />
    </Routes>
  );
}

export default Router;
