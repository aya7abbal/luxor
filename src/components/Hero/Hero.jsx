import React from "react";
import "./hero.css";
import IMG2 from "../../assets/IMG2.jpeg";
import IMG3 from "../../assets/IMG3.webp";
import IMG4 from "../../assets/IMG4.jpeg";
import HeroCarousel from "./HeroCarousel";
import "../Buttons/buttons.css";

import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage,
} from "mdb-react-ui-kit";
// import {  } from "react-bootstrap";

export default function Hero() {
  return (
    <>
      <HeroCarousel />
      <div className=" row hero w-100 h-lg-100">
        <div className="hero-col d-none d-lg-block col-lg-7  hero-img ">
          <MDBCard background="dark" className="text-white bg-img">
            <MDBCardImage
              overlay
              className="hero-img-main "
              src={IMG3}
              alt="..."
            />
            <MDBCardOverlay className="m-2 d-flex flex-column justify-content-center">
              <MDBCardTitle className="py-4 card-title ">
                Sustainable surfaces for architecture and your home.
              </MDBCardTitle>
              <MDBCardText>
                <div className=" buttons">
                  <a href="!#" class="btn mt-3 btn-2">
                    See More
                  </a>
                </div>
              </MDBCardText>
            </MDBCardOverlay>
          </MDBCard>
        </div>
        <div className="row d-none col-lg-5  d-lg-block  hero-col  mx-0">
          <div className="row-md-4 col-12 hero-col ">
            <MDBCard background="dark" className="text-white">
              <MDBCardImage overlay src={IMG4} className="hero-img" alt="..." />
              <MDBCardOverlay className="m-2 d-flex flex-column justify-content-center">
                <MDBCardTitle className="card-title py-4 ">
                  Durable Stones for your Home
                </MDBCardTitle>
                <MDBCardText>
                  <div className=" buttons">
                    <a href="!#" class="btn btn-2 mt-3">
                      {" "}
                      Shop Here
                    </a>
                  </div>
                </MDBCardText>
              </MDBCardOverlay>
            </MDBCard>
          </div>
          <div className="row-md-4 col-12 hero-col">
            <MDBCard background="dark" className="text-white ">
              <MDBCardImage overlay src={IMG2} className="hero-img" alt="..." />
              <MDBCardOverlay className="m-2 d-flex flex-column justify-content-center">
                <MDBCardTitle className="card-title py-4 ">
                  Natural Stones All The Way
                </MDBCardTitle>
                <MDBCardText>
                  <div className=" buttons">
                    <a href="!#" class="btn mt-3 btn-2">
                      See All Colors
                    </a>
                  </div>
                </MDBCardText>
              </MDBCardOverlay>
            </MDBCard>
          </div>
        </div>
      </div>
    </>
  );
}
