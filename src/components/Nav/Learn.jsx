import "./nav.css";
import { React } from "react";
import IMG from "../../assets/who.jpeg";

import IMG1 from "../../assets/process.webp";
import IMG2 from "../../assets/work.jpeg";
// import IMG3 from "../../assets/innovation.jpeg";
import IMG4 from "../../assets/sustainability.webp";
import IMG5 from "../../assets/FAQs.jpeg";
import {
  MDBContainer,
  MDBCol,
  MDBDropdownMenu,
  MDBRow,
  MDBRipple,
} from "mdb-react-ui-kit";

const megaMenuArray = [
  {
    title2: "About Us",
    title3: "Know More About Luxor",
    title4: "Edge Profiles",
    link: "Man-made Stones",
    text: "Granite",
  },
];

export default function About(props) {
  return (
    <>
      {megaMenuArray.map((element) => (
        <MDBDropdownMenu
          className="mt-0 justify-content-center megamenu"
          style={{
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
          data-mdb-toggle="show"
        >
          <MDBContainer>
            <MDBRow className="mt-3 mb-1 ">
              <MDBCol xs="12" md="6" lg="4" className="mb-1 mb-xl-0">
                <div className="pt-2 ">
                  {/* <p className="text-uppercase font-weight-bold">
                    {element.title2}
                  </p> */}
                  <MDBRipple
                    rippleTag="div"
                    rippleColor="light"
                    className=" bg-image hover-overlay shadow-1-strong rounded mb-4"
                  >
                    <img src={IMG} className="img-fluid" alt="" />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{
                          backgroundColor: " rgba(251,251,251, 0.15",
                        }}
                      ></div>
                    </a>
                  </MDBRipple>

                  <a href="!#" className="text-dark">
                    <h5>Who We Are</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Odit, iste aliquid. Sed id nihil magni, sint vero
                      provident esse numquam perferendis ducimus dicta adipisci
                      iusto nam temporibus modi animi laboriosam?
                    </p>
                  </a>
                </div>
              </MDBCol>

              <MDBCol xs="12" md="6" lg="4" className="mb-1 mb-xl-0">
                <div className="pt-2">
                  <a href="!#" className="text-dark know-more">
                    <MDBRow className="mb-4  pb-2">
                      <MDBCol col="3">
                        <img
                          src={IMG1}
                          className="img-fluid shadow-1-strong rounded"
                          alt="Hollywood Sign on The Hill"
                        />
                      </MDBCol>
                      <MDBCol col="9">
                        <p className="mb-2">
                          <strong>Our Process</strong>
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </MDBCol>
                    </MDBRow>
                  </a>
                  <a href="!#" className="text-dark">
                    <MDBRow className="mb-4   pb-2">
                      <MDBCol col="3">
                        <img
                          src={IMG2}
                          alt="Palm Springs Road"
                          className="img-fluid"
                        />
                      </MDBCol>
                      <MDBCol col="9">
                        <p className="mb-2">
                          <strong>Work With Us</strong>
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </MDBCol>
                    </MDBRow>
                  </a>
                </div>
              </MDBCol>
              <MDBCol
                xs="12"
                lg="4"
                className="mb-1 d-block mb-xl-0 d-md-none d-lg-block"
              >
                <div className="pt-2">
                  <a href="!#" className="text-dark">
                    <MDBRow className="mb-4   pb-2">
                      <MDBCol col="3">
                        <img
                          src={IMG4}
                          className="img-fluid shadow-1-strong rounded"
                          alt="Los Angeles Skyscrapers"
                        />
                      </MDBCol>
                      <MDBCol col="9">
                        <p className="mb-2">
                          <strong>Sustainability</strong>
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </MDBCol>
                    </MDBRow>
                  </a>
                  <a href="!#" className="text-dark">
                    <MDBRow className="mb-4 ">
                      <MDBCol col="3">
                        <img
                          src={IMG5}
                          className="img-fluid shadow-1-strong rounded"
                          alt="Skyscrapers"
                        />
                      </MDBCol>
                      <MDBCol col="9">
                        <p className="mb-2">
                          <strong>FAQs</strong>
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </MDBCol>
                    </MDBRow>
                  </a>
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow sm="12">
              <div className=" buttons d-flex justify-content-center">
                <a href="!#" class="btn btn-2">
                  View More
                </a>
              </div>
            </MDBRow>
          </MDBContainer>
        </MDBDropdownMenu>
      ))}
    </>
  );
}
