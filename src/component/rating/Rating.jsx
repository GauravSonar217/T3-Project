import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa6";

function Rating({ star }) {
  const ratingStar = Array.from({ length: 5 }, (curEle, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {star >= index + 1 ? (
          <FaStar style={{ color: "ffcc13", fontSize: "1.5rem" }} />
        ) : star >= number ? (
          <FaStarHalf style={{ color: "ffcc13", fontSize: "1.5rem" }} />
        ) : (
          <FaRegStar style={{ color: "ffcc13", fontSize: "1.5rem" }} />
        )}
      </span>
    );
  });
  return <React.Fragment>{ratingStar}</React.Fragment>;
}

export default Rating;
