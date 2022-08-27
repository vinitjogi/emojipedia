import React from "react";

 

function Card(props) {
  return (
    // <div className="container">
      <div className="card">
        <div className="emoji">
          <p>{props.emoji}</p>
        </div>
        <div className="emoji-name">
          <p>{props.name}</p>
        </div>
        <div className="description">
          <p>{props.description}</p>
        </div>
      </div>

      
      
    // </div>

  );
}

export default Card;
