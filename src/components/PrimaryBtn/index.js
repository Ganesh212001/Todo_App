import React from "react";
import "./PrimaryBtn.css";

const PrimaryBtn = ({ className, onClick }) => {
  return (
    <button className={`${className} primary-button`} onClick={onClick}>
     <span>Start</span>
    </button>
  );
};

export default PrimaryBtn;
