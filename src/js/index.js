//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Jumbotron from "./component/jumbotron.jsx";
import Cards from "./component/cards.jsx";
//import i uppercase (var name)

//var prepend = ("\<div class=\"album py-5 bg-light\"><div class=\"container\"><div class=\"row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3\">");

//render your react application
ReactDOM.render(<Cards/>, document.querySelector("#app"));
//ReactDOM.render( <Home />, document.querySelector("#app"));
