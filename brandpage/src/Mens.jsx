import React from "react";
import Nike from "./images/Nike.jpeg";
import "./Home.css";
import Card from "./Card";
import "./Card.css";
import flipkart from "./images/flipkart.jpg";
import shoes from "./images/shoes.jpeg";
import nikk from "./images/nikk.jpg";
import nike2 from "./images/nike2.png";
import nike3 from "./images/nike3.png";
import nike4 from "./images/nike4.png";
import nike5 from "./images/nike5.png";
import nike6 from "./images/nike6.png";

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
               image={shoes}
               title="NiK sho"
               price="12"

             />

           <Card 
               image={nikk}
               title="seankers"
               price="12"

             />
              <Card 
               image={nike2}
               title="causal"
               price="18"

             /> 
             <Card 
               image={nike3}
               title="sports shoe"
               price="16"

             /> 
             <Card 
               image={nike4}
               title="causal"
               price="12"

             /> 
             <Card 
               image={nike5}
               title="sports"
               price="22"

             /> 
             <Card 
               image={nike6}
               title="causal"
               price="22"

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
