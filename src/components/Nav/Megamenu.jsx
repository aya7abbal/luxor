import "./nav.css";
import { React, useState } from "react";
import Products from "./Products";
import Projects from "./Projects";
import Learn from "./Learn";
// import ProductDrawer from "./Products/ProductsDrawer";

import {
  MDBNavbarItem,
  MDBDropdown,
  MDBDropdownToggle,
} from "mdb-react-ui-kit";
const navTitles = [
  // { title: "Products" },
  { title: "Projects" },
  { title: "Know More" },
  { title: "Contact Us" },
];
export default function MegaMenu(props) {


  return (
    <>
      {navTitles.map((element) => (
        <MDBNavbarItem className="position-static">
          <MDBDropdown className="">
            <MDBDropdownToggle tag="a" className="nav-link" onClick={props.toggleColor} >
              {element.title}
            </MDBDropdownToggle>
            {element.title === "Products" ? (
              <Products/>
            ) : (
              ""
            )}
            {element.title === "Projects" ? <Projects /> : ""}
            {element.title === "Know More" ? <Learn /> : ""}
          </MDBDropdown>
        </MDBNavbarItem>
      ))}
    </>
  );
}
