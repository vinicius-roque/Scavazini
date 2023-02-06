import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "../providers/AppContext";
import StartPage from "../pages/StartPage";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

export default function Router() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />

          <Route path="*" element={<h1>This page doesn't exists</h1>} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}