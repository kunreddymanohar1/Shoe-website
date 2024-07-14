import React from "react";
import Nike from "./images/Nike.jpeg";
import "./Home.css";
import FOOT from "./images/FOOT.webp";
import foots from "./images/foots.jpg";
import nikk from "./images/nikk.jpg";
import showroom from "./images/showrom.jpg";
import "./About.css";


function about() {
    

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
          
          <div className="container">
             <div className="message">
                <h1>WE SERVE ATHLETES*</h1>
             </div>
            
           <div className="img">
            <img src={FOOT} alt="IMGE" />
           </div>
           <div className="passage">
            <h1><strong>Creating the Unreal: How Nike Made Its Wildest Air Footwear Yet
            </strong></h1>
            <p>The shoe looks as mind-bending as the 7’4” forward himself. Its upper is embedded with a tight, brain-like geometric pattern, inspired by the bismuth crystal Wembanyama wore around his neck on draft night last summer when he was picked No. 1 in the league. Across the lateral midfoot and down the outsole run a fissure-shaped Nike Air unit never before used in a basketball shoe, like a crack in a comet that fell to Earth. Here, the Air unit is being used not only for cushioning underfoot, but also to forgivingly contain Wembanyama’s feet for sharp movements side to side during gameplay. Much like its athlete, every feature of the prototype is subversive. Nothing quite like it has ever been made. But it still needs refining — and fast. 
 
            </p>
            </div>

            <div className="img1">
            <img src={foots} alt="IMGE" />
           </div>
           <div className="passage1">
            <p>They've always had the best gears on their team; their product is insanely good. I'm proud to be considered a member of the Nike family. Good ideas are like Nike sports shoes. They may facilitate success for an athlete who possesses them, but on their own they are nothing but an overpriced pair of sneakers.
            </p>

           </div>


           <div className="img2">
            <img src={nikk} alt="IMGE" />
           </div>
           
           <div className="passage2">
            <p>No one works harder at inspiring athletes all over the world than our team at Nike. Creating those experiences requires an amazing amount of energy, a steady flow of big ideas to excite and surprise people, and a constant dialogue that connects us on a personal level.
              </p>
           </div>

           <div className="img3">
            <img src={showroom} alt="IMGE" />
           </div>
           <div className="passage3">
            <p>Nike, Inc., is one of the largest and best-recognized global sports and athleticwear brands. Its extensive lineup includes its long-running Air Jordan, Air Force 1, and other “Air” models.
            </p>
           </div>
          
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

export default about;
