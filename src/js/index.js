//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Jumbotron from "./component/jumbotron.jsx";
import Cards from "./component/cards.jsx";
//TIP -  Webpack expect you to import components in uppercase (var name), also remember to add the .jsx extension


//TIP -  make a parent compoent (function) that stores all components
// this instead of an ordinary variable like var Total
const Total = () => {

    return (   
   //ANYTHING IN THIS LINE IS NOT WORKING ex- <div></div> OR <Jumbotron />
   //it wants everything in a main element like a <section> or a <div>
   <div>
        <Jumbotron/>
        <div class="album py-5 bg-light\">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <Cards /><Cards /><Cards /><Cards /><Cards /><Cards /><Cards /><Cards /><Cards />
                </div>
            </div>
        </div>
    </div>
    )};



ReactDOM.render(<Total />, document.querySelector("#app")); 
/* TIP render only once cant call ReactDOM again and again */

