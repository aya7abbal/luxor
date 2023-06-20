import React from "react";
import "./header.css";
export default function Header(props) {
  return (
    <>
      <div className="header">
        <p>{props.title}</p>
      </div>
    </>
  );
}
