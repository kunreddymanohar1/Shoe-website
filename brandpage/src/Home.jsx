import React from "react";
import { Link } from "react-router-dom";
import amazonImage from "./images/amazon.jpg";
import flipkart from "./images/flipkart.jpg";
import Nike from "./images/Nike.jpeg";
import Shoes from "./images/Shoes.png";
import "./Home.css";

function Home() {
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
                    
                     <div className="login">
                        <Link to="/Login">
                            <button>Login</button>
                        </Link>
                    </div> 
                    {/* <div>
                        <p>SHOPPING</p>
                        <a href="a"><i class="fa-solid fa-cart-shopping"></i></a>
                    </div> */}
                </div>
            </header>
            <div className="para">
                <h1 className="main"><strong>YOUR FEET DESERVE THE BEST </strong></h1>
                <p className="main1">YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES</p>
            </div>
            {/* <div className="btns">
                <button className="btn1">Shop Now</button>
                <button className="btn">Category</button>
            </div> */}
            <div className="shoe">
                <img src={Shoes} alt="shoes" />
            </div>
            
            <footer className="foot">
                <p>Also Available On</p>
                <img src={amazonImage} alt="amazon" />
                <img src={flipkart} alt="flipkart" />
            </footer>
            <footer className="foot1">
                <table className="maxwidth">
                    <thead>
                        <tr>
                            <th >HELP</th>
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

export default Home;
