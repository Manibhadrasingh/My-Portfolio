import "./PricingCardStyles.css";
 import React from "react";
 import { Link } from "react-router-dom";

 const PricingCard = () =>{
    return <div className="pricing">
      <div className="card-container">
         <div className="card">
            <h3>- Basic -</h3>
            <span className="bar"></span>
            <p className="btc"> $ 100</p>
            <p>- 3 Days -</p>
            <p>- 3 Pages-</p>
            <p>- 3 Featured-</p>
            <p>- 3 Responsive Design-</p>
            <Link to= "/contact" className ="btn">PURCHASE NOW</Link>
         </div>
         <div className="card">
            <h3>- Premium -</h3>
            <span className="bar"></span>
            <p className="btc"> $ 200</p>
            <p>- 5 Days -</p>
            <p>- 7 Pages-</p>
            <p>- 5 Featured-</p>
            <p>- 3 Responsive Design-</p>
            <Link to= "/contact" className ="btn">PURCHASE NOW</Link>
         </div>
         <div className="card">
            <h3>- Business -</h3>
            <span className="bar"></span>
            <p className="btc"> $ 300</p>
            <p>- 5 Days -</p>
            <p>- 9 Pages-</p>
            <p>- 9 Featured-</p>
            <p>- 3 Responsive Design-</p>
            <Link to= "/contact" className ="btn">PURCHASE NOW</Link>
         </div>
      </div>
    </div>
 }

 export default PricingCard;