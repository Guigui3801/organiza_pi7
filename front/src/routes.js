import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import AppHeader from "./components/AppHeader/AppHeader";
import Error from "./pages/Error/Error";
import Kanban from "./pages/Kanban/Kanban";

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

        <Route path={"*"} element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
