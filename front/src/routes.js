import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import React from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import AppHeader from "./components/AppHeader/AppHeader";
import Error from "./pages/Error/Error";
import Kanban from "./pages/Kanban/Kanban";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Pomodoro from "./components/AppPomodoro/AppPomodoro";

export default function Router() {
  return (
    <BrowserRouter>
      <AppHeader />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/services"} element={<Services />} />
        <Route path={"/kanban/:id"} element={<Kanban />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/pomodoro"} element={<Pomodoro />} />

        <Route path={"*"} element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
