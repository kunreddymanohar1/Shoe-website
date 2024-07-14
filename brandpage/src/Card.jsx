import React from "react";

function Card({ image, title, price }) {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <div className="card-details">
                <h2 className="card-title">{title}</h2>
                <p className="card-price">${price}</p>
                <button className="card-button">Add to Cart</button>
            </div>



            {/* <img src={image} alt={title} className="card-image" />
            <div className="card-details">
                <h2 className="card-title">{title}</h2>
                <p className="card-price">${price}</p>
                <button className="card-button">Add to Cart</button>
            </div>  */}

            

            
            

            
            

            
               
            
        </div>
    );
}

export default Card;
