import React from "react";
import IMG2 from "../../assets/IMG2.jpeg";
import IMG3 from "../../assets/IMG3.webp";
import IMG4 from "../../assets/IMG4.jpeg";
import "../Buttons/buttons.css";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export default function HeroCarousel() {
  return (
    <MDBCarousel
      showIndicators
      showControls
      fade
      className="d-lg-none carousel"
    >
      <MDBCarouselItem
        className="w-100 d-block "
        itemId={1}
        src={IMG2}
        alt="..."
      >
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, ullam!
        </p>
        <div className=" buttons">
          <a href="!#" class="btn mt-3 btn-2">
            See More
          </a>
        </div>
      </MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        itemId={2}
        src={IMG4}
        alt="..."
      >
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, ullam!
        </p>
        <div className=" buttons">
          <a href="!#" class="btn mt-3 btn-2">
            See More
          </a>
        </div>
      </MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src={IMG3}
        alt="..."
      >
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, ullam!
        </p>
        <div className=" buttons">
          <a href="!#" class="btn btn-2 mt-3">
            See More
          </a>
        </div>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
