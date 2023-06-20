import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBCardOverlay,
} from "mdb-react-ui-kit";
import "./fproducts.css";
import Marble from "../../../assets/marble-features.jpeg";
import Quartz from "../../../assets/quartz-features.jpg";
import Granite from "../../../assets/granite-features.png";
import Quartzite from "../../../assets/quartzite-features.jpeg";
import Fixtures from "../../../assets/fixtures-features.jpeg";

export default function FProducts() {
  return (
    <MDBRow
      className="row-cols-1
    row-cols-sm-2 row-cols-lg-3 row-cols-xl-5 g-4 features d-flex justify-content-center "
    >
      <MDBCol>
        <MDBCard>
          <MDBCardImage src={Marble} alt="..." position="top" />
          <MDBCardBody>
            <MDBCardOverlay className="d-flex-col ">
              <h2>Marble</h2>
              <p>One of the finest materials that the earth produces.</p>
              <a href="www.google.com">
                Check Out
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="material-symbols-outlined mx-2"
                />
              </a>
            </MDBCardOverlay>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage src={Quartz} alt="..." position="top" />
          <MDBCardBody>
            <MDBCardOverlay>
              <h2>Quartz</h2>
              <p>A modern and durable material that exudes quality.</p>
              <a href="www.google.com">
                Check Out
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="material-symbols-outlined mx-2"
                />
              </a>
            </MDBCardOverlay>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage src={Granite} alt="..." position="top" />
          <MDBCardBody>
            <MDBCardOverlay>
              <h2>Granite</h2>
              <p>Functional and visual, Granite can do it all for your home.</p>
              <a href="www.google.com">
                Check Out
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="material-symbols-outlined mx-2"
                />
              </a>
            </MDBCardOverlay>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage src={Quartzite} alt="..." position="top" />
          <MDBCardBody>
            <MDBCardOverlay>
              <h2>Quartzite</h2>
              <p>
                More durable than marble and a terrific stone to showcase
                quality.
              </p>
              <a href="www.google.com">
                Check Out
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="material-symbols-outlined mx-2"
                />
              </a>
            </MDBCardOverlay>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage src={Fixtures} alt="..." position="top" />
          <MDBCardBody>
            <MDBCardOverlay>
              <h2>Fixtures</h2>
              <p>
                Functional, convenient, durable and modern sinks, faucets and
                more.
              </p>
              <a href="www.google.com">
                Check Out
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="material-symbols-outlined mx-2"
                />
              </a>
            </MDBCardOverlay>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}
