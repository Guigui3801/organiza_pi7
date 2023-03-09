import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Head from "./head/head";
import Nav from "./body/nav/Nav";
import Carousel from "./body/carousel";
import Footer from "./body/footer/footer";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Head />
    <Nav />
    <Carousel />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
