import "./nav.css";
import { React } from "react";
import IMG from "../../assets/project1.jpeg";
import IMG1 from "../../assets/project2.jpeg";
import IMG2 from "../../assets/project3.jpeg";
import IMG3 from "../../assets/project4.jpeg";
import {
  MDBContainer,
  MDBCol,
  MDBDropdownMenu,
  MDBRow,
  MDBRipple,
} from "mdb-react-ui-kit";

const megaMenuArray = [
  {
    title: "Project 1",
    title2: "Project 2",
    title3: "Project 3",
    title4: "Project 4",
  },
];

export default function Projects(props) {
  return (
    <>
      {megaMenuArray.map((element) => (
        <MDBDropdownMenu
          className="mt-0 justify-content-center megamenu d-none d-md-block"
          style={{
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
          data-mdb-toggle="show"
        >
          <MDBContainer>
            <MDBRow className="my-4 projects d-flex justify-content-center">
              <MDBCol xs="12" md="4" lg="3" className="mb-lg-3 mb-0 mb-xl-0">
                <div className="pt-2">
                  <p className="text-uppercase font-weight-bold">
                    {element.title}
                  </p>
                  <MDBRipple
                    rippleTag="div"
                    rippleColor="light"
                    className="bg-image hover-overlay shadow-1-strong rounded mb-4"
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
                    <h5>This is title of the news</h5>
                    <p>
                     Lorem ipsum dolor sit amet.
                    </p>
                  </a>
                </div>
              </MDBCol>
              <MDBCol xs="12" md="4" lg="3" className="mb-lg-3 mb-0 mb-xl-0">
                <div className="pt-2">
                  <p className="text-uppercase font-weight-bold">
                    {element.title2}
                  </p>
                  <MDBRipple
                    rippleTag="div"
                    rippleColor="light"
                    className="bg-image hover-overlay shadow-1-strong rounded mb-4"
                  >
                    <img src={IMG1} className="img-fluid" alt="" />
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
                      Lorem ipsum dolor sit amet.
                    </p>
                  </a>
                </div>
              </MDBCol>
              <MDBCol xs="12" md="4" lg="3" className="mb-lg-3 mb-0 mb-xl-0">
                <div className="pt-2">
                  <p className="text-uppercase font-weight-bold">
                    {element.title3}
                  </p>
                  <MDBRipple
                    rippleTag="div"
                    rippleColor="light"
                    className="bg-image hover-overlay shadow-1-strong rounded mb-4"
                  >
                    <img src={IMG2} className="img-fluid" alt="" />
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
                      Lorem ipsum dolor sit amet.
                    </p>
                  </a>
                </div>
              </MDBCol>
              <MDBCol xs="12" md="4" lg="3" className="mb-lg-3 mb-0  mb-xl-0 d-none d-lg-block">
                <div className="pt-2">
                  <p className="text-uppercase font-weight-bold">
                    {element.title4}
                  </p>
                  <MDBRipple
                    rippleTag="div"
                    rippleColor="light"
                    className="bg-image hover-overlay shadow-1-strong rounded mb-4"
                  >
                    <img src={IMG3} className="img-fluid" alt="" />
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
                     Lorem ipsum dolor sit amet.
                    </p>
                  </a>
                </div>
              </MDBCol>
              <MDBRow
                sm="12"
                className="mb-4 "
              >
                <div className=" buttons d-flex justify-content-center">
                  <a href="!#" class="btn btn-2">
                    View More
                  </a>
                </div>
              </MDBRow>
            </MDBRow>
          </MDBContainer>
        </MDBDropdownMenu>
      ))}
    </>
  );
}
