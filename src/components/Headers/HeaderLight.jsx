import React from "react";
import "./header.css";
export default function HeaderLight(props) {
  return (
    <>
      <div className="header-light">
        <p>{props.title}</p>
      </div>
    </>
  );
}
