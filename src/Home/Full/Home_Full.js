import React, { Component } from "react";

import Navbar from "./Navbar/Navbar.js";
import About from "./About.js";
import Facts from "./Facts.js";
import Achievment from "./Achievment.js";

import "./Home_Full.css";

import RandyProfiel from "C:/Users/Berkk/Desktop/Programmieren/randy_website/src/image/Randy_Profiel.jpg";
import Ronaldo from "C:/Users/Berkk/Desktop/Programmieren/randy_website/src/image/Ronaldo2.jpg";

import Fade from "react-reveal/Fade";

import ScrollableAnchor from "react-scrollable-anchor";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <img src={Ronaldo} alt="Ronaldo Background" />
        <Navbar></Navbar>
        <div className="bodyContainer">
          <About></About>
          <Facts></Facts>
          <Achievment></Achievment>

          <div className="Galerie"></div>
        </div>
        <div className="Contact"></div>
        <div className="Footer"></div>
      </div>
    );
  }
}

export default Home;
