import "./nav.css";
// import Highlight from "./Highlight";
import { React, useState, useEffect } from "react";
import Highlight from "./Highlight"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../Buttons/buttons.css";
import Logo from "../../assets/Logo.png";
import ProductDrawer from "./Products/ProductsDrawer";
import Products from "./Products";
import MegaMenu from "./Megamenu"; // import "../Buttons/button.css"
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarBrand,
  MDBCollapse,
  MDBNavbarToggler,
} from "mdb-react-ui-kit";

export default function Navigation() {
  const [showBasic, setShowBasic] = useState(false);



  const [color, setColor] = useState(false);
  function toggleColor(){
    setColor(!color)
  }

    // useEffect(() => {
    // window.addEventListener("click" , ()=>{showBasic? setColor(true):setColor(false) }) 
        // adding the event when scroll change Logo
      
    // })
    

  return (
    <>
      <Highlight />
      <MDBNavbar
        expand="md"
        sticky="top"
        // className={navbar ? "active" : "navbar"}
        dark
      // onClick={toggleColor()}
        style={color?{backgroundColor:"#1c1c29"}:{backgroundColor:"#1c1c2949"}}
      >
        <MDBContainer fluid>
          <div className="px-2">
            <MDBNavbarToggler
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onMouseEnter={() => setShowBasic(!showBasic)}
                          className="mx-1"
            >
              <FontAwesomeIcon icon={faBars} />{" "}
            </MDBNavbarToggler>
            <MDBNavbarBrand href="#" className="mx-3">
              <img src={Logo} height="40" alt="" loading="lazy" />
            </MDBNavbarBrand>
          </div>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav
              className="me-auto ps-lg-0"
              style={{ paddingLeft: "0.15rem" }}
            >
              <div className="d-md-none">
                <Products />
              </div>


              

              <ProductDrawer />
              <MegaMenu toggleColor={toggleColor} />
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
