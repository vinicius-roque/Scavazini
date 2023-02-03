import { BrowserRouter, Routes, Route } from "react-router-dom";

import StartPage from "../pages/StartPage";
import Login from "../pages/Login";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/sign-in" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}