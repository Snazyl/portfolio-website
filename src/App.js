import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Body from "./components/Body";

function App() {
  return (
    <BrowserRouter>
      <div className="content-wrap">
        <Navbar />
        <Route exact path="/" component={Body} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
