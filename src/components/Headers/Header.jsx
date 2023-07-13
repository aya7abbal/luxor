import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./header.css";

export default function Header(props) {
  return (
    <>
    <ScrollAnimation animateIn='wobble' >
      <div className="header">
        <p>{props.title}</p>
      </div>
      </ScrollAnimation>
    </>
  );
}
