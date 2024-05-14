import React from "react";
import "../assets/button.css";

export default function Button({ handleClick }) {
  return (
    <>
      <button type="submit" id="btn" className="button" onClick={handleClick}>
        Get early access
      </button>
    </>
  );
}
