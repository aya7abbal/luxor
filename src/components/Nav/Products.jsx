import "./nav.css";
import { React } from "react";
import IMG3 from "../../assets/IMG3.webp";
import IMG1 from "../../assets/kitchen-sq-gr.jpeg";
import IMG2 from "../../assets/kitchen-sq-gr2.jpeg";
import IMG4 from "../../assets/sinks-faucets.jpeg";
import IMG5 from "../../assets/egde-profile.jpeg";
import IMG6 from "../../assets/egde-profile2.webp";
import IMG7 from "../../assets/egde-profile3.webp";

import {
  MDBContainer,
  MDBCol,
  MDBDropdownMenu,
  MDBRow,
  MDBRipple,
  MDBDropdownToggle,
  MDBNavbarItem,
  MDBDropdown,
} from "mdb-react-ui-kit";

const megaMenuArray = [
  {
    title: "Products",
    title2: "Stones",
    img: IMG3,
    title3: "Sinks & Faucets",
    title4: "Edge Profiles",
    link: "Man-made Stones",
    text: "Granite",
  },
];

export default function Products(props) {
  return (
    <>
      {" "}
      <MDBNavbarItem className="position-static">
        <MDBDropdown>
          <MDBDropdownToggle tag="a" className="nav-link">
            Products
          </MDBDropdownToggle>
          {megaMenuArray.map((element) => (
            <MDBDropdownMenu
              className="mt-0 justify-content-center megamenu megamenu-open products"
              style={{
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
              data-mdb-toggle="show"
            >
              <MDBContainer>
                <MDBRow className="mt-3 mb-1 ">
                  <MDBCol xs="12" className="mb-1 stones">
                    <div className="pt-2">
                      <p className="text-uppercase font-weight-bold">
                        {element.title2}{" "}
                      </p>
                      <a href="!#" className="text-dark">
                        <MDBRow className="mb-4 pb-2">
                          <MDBCol col="3">
                            <img
                              src={IMG1}
                              className=" img-fluid shadow-1-strong rounded"
                              alt="Hollywood Sign on The Hill"
                            />
                          </MDBCol>
                          <MDBCol col="9">
                            <p className="mb-2">
                              <strong>Marble</strong>
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
                              className=" img-fluid  shadow-1-strong rounded"
                              alt="Palm Springs Road"
                            />
                          </MDBCol>
                          <MDBCol col="9">
                            <p className="mb-2">
                              <strong>Quartz</strong>
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
                              src={IMG1}
                              className=" img-fluid  shadow-1-strong rounded"
                              alt="Los Angeles Skyscrapers"
                            />
                          </MDBCol>
                          <MDBCol col="9">
                            <p className="mb-2">
                              <strong>Granite</strong>
                            </p>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit.
                            </p>
                          </MDBCol>
                        </MDBRow>
                      </a>
                      <a href="!#" className="text-dark">
                        <MDBRow className="mb-4  pb-2">
                          <MDBCol col="3">
                            <img
                              src={IMG2}
                              className="img-fluid   shadow-1-strong rounded"
                              alt="Skyscrapers"
                            />
                          </MDBCol>
                          <MDBCol col="9">
                            <p className="mb-2">
                              <strong>Quartzite</strong>
                            </p>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit.
                            </p>
                          </MDBCol>
                        </MDBRow>
                      </a>
                      <MDBRow className="mb-4   border-bottom pb-5">
                        <div className=" buttons d-flex justify-content-center">
                          <a href="!#" class="btn btn-2">
                            View More
                          </a>
                        </div>
                      </MDBRow>
                    </div>
                  </MDBCol>

                  <MDBCol
                    xs="12"
                   
                    className="mb-1 mb-xl-0 edge-profiles"
                  >
                    <div className="pt-2">
                      <p className="text-uppercase font-weight-bold">
                        {element.title4}{" "}
                      </p>

                      <a href="!#" className="text-dark ">
                        <MDBRow className="mb-4   pb-2">
                          <MDBCol col="3">
                            <img
                              src={IMG3}
                              className="img-fluid shadow-1-strong rounded"
                              alt="Hollywood Sign on The Hill"
                            />
                          </MDBCol>
                          <MDBCol col="9">
                            <p className="mb-2">
                              <strong>Flat/Straight Eased Edge</strong>
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
                              src={IMG5}
                              className="img-fluid   shadow-1-strong rounded"
                              alt="Palm Springs Road"
                            />
                          </MDBCol>
                          <MDBCol col="9">
                            <p className="mb-2">
                              <strong>Quarter Bevel</strong>
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
                              src={IMG6}
                              className=" img-fluid  shadow-1-strong rounded"
                              alt="Los Angeles Skyscrapers"
                            />
                          </MDBCol>
                          <MDBCol col="9">
                            <p className="mb-2">
                              <strong>Quarter Inch Round</strong>
                            </p>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit.
                            </p>
                          </MDBCol>
                        </MDBRow>
                      </a>

                      <a href="!#" className="text-dark">
                        <MDBRow className="mb-4 pb-2">
                          <MDBCol col="3">
                            <img
                              src={IMG7}
                              className=" img-fluid  shadow-1-strong rounded"
                              alt="Skyscrapers"
                            />
                          </MDBCol>
                          <MDBCol col="9">
                            <p className="mb-2">
                              <strong>Half Bullnose</strong>
                            </p>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit.
                            </p>
                          </MDBCol>
                        </MDBRow>
                      </a>
                      <MDBRow className="mb-4   border-bottom pb-5 ">
                        <div className=" buttons d-flex justify-content-center">
                          <a href="!#" class="btn btn-2">
                            View More
                          </a>
                        </div>
                      </MDBRow>
                    </div>
                  </MDBCol>

                  <MDBCol
                    xs="12"
                    
                    className="my-1 mb-xl-0 d-flex flex-column align-items-center"
                  >
                    <div className="pt-2">
                      <p className="text-uppercase font-weight-bold">
                        {element.title3}
                      </p>
                      <MDBRipple
                        rippleTag="div"
                        rippleColor="light"
                        className="bg-image hover-overlay shadow-1-strong rounded mb-4"
                      >
                        <img src={IMG4} className=" img-fluid " alt="" />
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
                        <h5>This is title of the news</h5>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Odit, iste aliquid. Sed id nihil magni, sint
                          vero provident esse numquam perferendis ducimus dicta
                          adipisci iusto nam temporibus modi animi laboriosam?
                        </p>
                      </a>
                    </div>
                    <MDBRow className="m-4 pb-2 ">
                      <div className=" buttons d-flex justify-content-center">
                        <a href="!#" class="btn btn-2">
                          View More
                        </a>
                      </div>
                    </MDBRow>
                  </MDBCol>
                </MDBRow>
               
              </MDBContainer>
            </MDBDropdownMenu>
          ))}
        </MDBDropdown>
      </MDBNavbarItem>
    </>
  );
}
