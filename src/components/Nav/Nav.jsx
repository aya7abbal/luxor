import "./nav.css";
// import Highlight from "./Highlight";
import { React, useState, useEffect } from "react";
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

  //navbar scroll when active state
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeBackground);
  });

  const [color, setColor] = useState(false);

  function toggleColor() {
    setColor(!color);
  }
  console.log(color)

  // const scroll = ()=>{
  //   (color === true)?(document.body.style.scrollY="hidden"):(document.body.style.scrollY="auto")

  // }

  return (
    <>
      {/* <Highlight /> */}
      <MDBNavbar
        expand="md"
        sticky="top"
        className={navbar ? "active" : "navbar"}
        dark
        style={color?{backgroundColor:"#1c1c29"}:{backgroundColor:"transparent"}}
      >
        <MDBContainer fluid>
          <div className="px-2">
            <MDBNavbarToggler
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShowBasic(!showBasic)}
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
