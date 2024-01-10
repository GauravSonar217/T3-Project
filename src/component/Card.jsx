import React from "react";

function Card({ status, desc, btnText, btncolor, imgpath }) {
  return (
    <div className="successBox">
      <img src={imgpath} alt="Done mark Icon" />
      <h1 className="my-4">{status}</h1>
      <p >{desc}</p>
      <button className={btncolor}>{btnText}</button>
    </div>
  );
}

export default Card;
