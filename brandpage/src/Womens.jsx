import React from "react";
import Nike from "./images/Nike.jpeg";
import "./Home.css";
import Card from "./Card";
import "./Card.css";
import flipkart from "./images/flipkart.jpg";
import wnike1 from "./images/wnike1.png";
import wnike2 from "./images/wnike2.png";
import wnike3 from "./images/wnike3.png";
import wnike4 from "./images/wnike4.png";
import wnike5 from "./images/wnike5.png";
import wnike6 from "./images/wnike6.png";
import wnike7 from "./images/wnike7.png";
import wnike8 from "./images/wnike8.png";


function mens() {
    

    return (
        <div className="container">
            <header className="head">
                <div className="Nav">
                    <img src={Nike} alt="Nike" />
                    <ul>
                        <li><a href="/">HOME</a></li>
                        <li><a href="mens">MENS</a></li>
                        <li><a href="womens">WOMENS</a></li>
                        <li><a href="about">ABOUT</a></li>
                        <li><a href="contact">CONTACT</a></li>
                    </ul>
                </div>
            </header>
          
         <div className="card-container">
             <Card 
               image={wnike1}
               title="causal"
               price="15"

             />

           <Card 
               image={wnike2}
               title="sports"
               price="12"

             />
             <Card 
               image={wnike3}
               title="causal air"
               price="22"

             />
             <Card 
               image={wnike4}
               title="fancy"
               price="25"

             />
             <Card 
               image={wnike5}
               title="birbe"
               price="26"

             />
             <Card 
               image={wnike6}
               title="causal"
               price="24"

             />
             <Card 
               image={wnike7}
               title="causal"
               price="27"

             />
             <Card 
               image={wnike8}
               title="Air jordon"
               price="30"

             />

            
             

             

         </div>






            <footer className="foot1">
                <table className="maxwidth">
                    <thead>
                        <tr>
                            <th>HELP</th>
                            <th>COMPANY</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Get Help</td>
                            <td>About Nike</td>
                        </tr>
                        <tr>
                            <td>Order Status</td>
                            <td>News</td>
                        </tr>
                        <tr>
                            <td>Delivery</td>
                            <td>Careers</td>
                        </tr>
                        <tr>
                            <td>Payment Options</td>
                            <td>Investors</td>
                        </tr>
                        <tr>
                            <td>Contact Us</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Inquiries</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <h3 className='mid'>2024 Nike Terms & Conditions Privacy Policy</h3>
            </footer>
        </div>
    );
}

export default mens;
