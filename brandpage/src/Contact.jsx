import React from "react";
import Nike from "./images/Nike.jpeg";
import "./Home.css";
import "./Contact.css";


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
         
            <div className="container1">
        <header>
        <h1>Contact Us</h1>
        <p>Feel free to get in touch with us!</p>
        </header>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      <footer>
        <p>Contact us at: Nike@email.com</p>
      </footer>
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
