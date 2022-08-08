import React from "react";

const Card = ({ id, image, name, type }) => {
  const style = type + " thumb-container";
  return (
    <div className={style}>
      <img src={image} alt={name} />
      <div className="number">
        <small>#0{id}</small>
      </div>
      <div className="detail-wrapper">
        <h3>{name}</h3>
        <small>{type}</small>
      </div>
      <div >

      </div>
    </div>
  );
};

export default Card;
