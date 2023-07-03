import * as React from "react";
import { styled } from "@mui/material/styles";
// import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import IMG3 from "../../../assets/IMG3.webp";
import IMG1 from "../../../assets/kitchen-sq-gr.jpeg";
import IMG2 from "../../../assets/kitchen-sq-gr2.jpeg";
import IMG4 from "../../../assets/sinks-faucets.jpeg";
import IMG5 from "../../../assets/egde-profile.jpeg";
import IMG6 from "../../../assets/egde-profile2.webp";
import IMG7 from "../../../assets/egde-profile3.webp";
import Logo from "../../../assets/Logo-light.png";

import { MDBCol, MDBRow, MDBRipple } from "mdb-react-ui-kit";

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
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    // expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  // backgroundColor:
  //   theme.palette.mode === 'dark'
  //     ? 'rgba(255, 255, 255, .05)'
  //     : 'rgba(0, 0, 0, .03)',
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));




export default function AccordionMenu() {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="products-acc mt-5">
      <img
        src={Logo}
        height="60"
        alt=""
        loading="smooth"
        className="accordion-logo my-5 m-auto"
      />
      {/* Stones */}
      <Accordion className="accordion"  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography className="light-link">Stones</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="accordion-details">
            <div className="d-flex flex-column">
              <span>
                <Accordion className="accordion-within w-100">
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className="light-link">Natural Stones</Typography>
                  </AccordionSummary>
                  <AccordionDetails className="accordion-details-within">
                    <Typography className="accordion-details">
                      <MDBRow className="px-1 d-flex justify-content-center ">
                        <MDBCol xs="12" className="mb-3 mb-xl-0 stones">
                          <div className="pt-2">
                            <p className="text-uppercase font-weight-bold">
                              {megaMenuArray.title2}{" "}
                            </p>

                            <a href="!#" className="text-dark">
                              <MDBRow className="mb-4   pb-2 ">
                                <MDBCol col="12">
                                  <img
                                    src={IMG1}
                                    className=" img-fluid  shadow-1-strong rounded"
                                    alt="Palm Springs Road"
                                  />
                                </MDBCol>
                                <MDBCol col="12">
                                  <p className="mb-2">
                                    <strong>Marble</strong>
                                  </p>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                  </p>
                                </MDBCol>
                              </MDBRow>
                            </a>
                            <a href="!#" className="text-dark">
                              <MDBRow className="mb-4   pb-2">
                                <MDBCol col="12">
                                  <img
                                    src={IMG2}
                                    className=" img-fluid  shadow-1-strong rounded"
                                    alt="Palm Springs Road"
                                  />
                                </MDBCol>
                                <MDBCol col="12">
                                  <p className="mb-2">
                                    <strong>Quartz</strong>
                                  </p>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                  </p>
                                </MDBCol>
                              </MDBRow>
                            </a>
                            <a href="!#" className="text-dark">
                              <MDBRow className="mb-4   pb-2">
                                <MDBCol col="12">
                                  <img
                                    src={IMG1}
                                    className=" img-fluid  shadow-1-strong rounded"
                                    alt="Los Angeles Skyscrapers"
                                  />
                                </MDBCol>
                                <MDBCol col="12">
                                  <p className="mb-2">
                                    <strong>Granite</strong>
                                  </p>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                  </p>
                                </MDBCol>
                              </MDBRow>
                            </a>
                            <a href="!#" className="text-dark">
                              <MDBRow className="mb-4  pb-2">
                                <MDBCol col="12">
                                  <img
                                    src={IMG2}
                                    className="img-fluid   shadow-1-strong rounded"
                                    alt="Skyscrapers"
                                  />
                                </MDBCol>
                                <MDBCol col="12">
                                  <p className="mb-2">
                                    <strong>Quartzite</strong>
                                  </p>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                  </p>
                                </MDBCol>
                              </MDBRow>
                            </a>
                            <MDBRow>
                              <div className=" buttons d-flex justify-content-center mt-3">
                                <a href="!#" class="btn btn-2 btn-light">
                                  View More
                                </a>
                              </div>
                            </MDBRow>
                          </div>
                        </MDBCol>
                      </MDBRow>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </span>
              <span>
                <Accordion className="accordion-within">
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className="light-link">Man-Made Stones</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="accordion-details">
                      <MDBRow className="px-1 d-flex justify-content-center">
                        <MDBCol xs="12" className="mb-3 mb-xl-0 stones">
                          <div className="pt-2">
                            <p className="text-uppercase font-weight-bold">
                              {megaMenuArray.title2}{" "}
                            </p>
                            <a href="!#" className="text-dark">
                              <MDBRow className="mb-4 pb-2">
                                <MDBCol col="12">
                                  <img
                                    src={IMG1}
                                    className=" img-fluid shadow-1-strong rounded"
                                    alt="Hollywood Sign on The Hill"
                                  />
                                </MDBCol>
                                <MDBCol col="12">
                                  <p className="mb-2">
                                    <strong>Marble</strong>
                                  </p>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                  </p>
                                </MDBCol>
                              </MDBRow>
                            </a>
                            <a href="!#" className="text-dark">
                              <MDBRow className="mb-4   pb-2">
                                <MDBCol col="12">
                                  <img
                                    src={IMG2}
                                    className=" img-fluid  shadow-1-strong rounded"
                                    alt="Palm Springs Road"
                                  />
                                </MDBCol>
                                <MDBCol col="12">
                                  <p className="mb-2">
                                    <strong>Quartz</strong>
                                  </p>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                  </p>
                                </MDBCol>
                              </MDBRow>
                            </a>
                            <a href="!#" className="text-dark">
                              <MDBRow className="mb-4   pb-2">
                                <MDBCol col="12">
                                  <img
                                    src={IMG1}
                                    className=" img-fluid  shadow-1-strong rounded"
                                    alt="Los Angeles Skyscrapers"
                                  />
                                </MDBCol>
                                <MDBCol col="12">
                                  <p className="mb-2">
                                    <strong>Granite</strong>
                                  </p>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                  </p>
                                </MDBCol>
                              </MDBRow>
                            </a>
                            <a href="!#" className="text-dark">
                              <MDBRow className="mb-4  pb-2">
                                <MDBCol col="12">
                                  <img
                                    src={IMG2}
                                    className="img-fluid   shadow-1-strong rounded"
                                    alt="Skyscrapers"
                                  />
                                </MDBCol>
                                <MDBCol col="12">
                                  <p className="mb-2">
                                    <strong>Quartzite</strong>
                                  </p>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                  </p>
                                </MDBCol>
                              </MDBRow>
                            </a>
                            <MDBRow>
                              <div className=" buttons d-flex justify-content-center mt-3">
                                <a href="!#" class="btn btn-2 btn-light">
                                  View More
                                </a>
                              </div>
                            </MDBRow>
                          </div>
                        </MDBCol>
                      </MDBRow>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </span>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Edges and Profiles */}
      <Accordion className="accordion" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2a-content" id="panel2a-header">
          <Typography className="light-link">Edges & Profiles</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <MDBCol xs="12" className="mb-3 mb-xl-0 edge-profiles">
              <div className="pt-2">
                <p className="text-uppercase font-weight-bold">
                  {megaMenuArray.title4}{" "}
                </p>

                <a href="!#" className="text-dark ">
                  <MDBRow className="mb-4   pb-2">
                    <MDBCol col="12">
                      <img
                        src={IMG3}
                        className="img-fluid shadow-1-strong rounded"
                        alt="Hollywood Sign on The Hill"
                      />
                    </MDBCol>
                    <MDBCol col="12">
                      <p className="mb-2">
                        <strong>Flat/Straight Eased Edge</strong>
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </MDBCol>
                  </MDBRow>
                </a>
                <a href="!#" className="text-dark">
                  <MDBRow className="mb-4   pb-2">
                    <MDBCol col="12">
                      <img
                        src={IMG5}
                        className="img-fluid   shadow-1-strong rounded"
                        alt="Palm Springs Road"
                      />
                    </MDBCol>
                    <MDBCol col="12">
                      <p className="mb-2">
                        <strong>Quarter Bevel</strong>
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </MDBCol>
                  </MDBRow>
                </a>
                <a href="!#" className="text-dark">
                  <MDBRow className="mb-4 pb-2">
                    <MDBCol col="12">
                      <img
                        src={IMG6}
                        className=" img-fluid  shadow-1-strong rounded"
                        alt="Los Angeles Skyscrapers"
                      />
                    </MDBCol>
                    <MDBCol col="12">
                      <p className="mb-2">
                        <strong>Quarter Inch Round</strong>
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </MDBCol>
                  </MDBRow>
                </a>

                <a href="!#" className="text-dark">
                  <MDBRow className="mb-4 pb-2">
                    <MDBCol>
                      <img
                        src={IMG7}
                        className=" img-fluid  shadow-1-strong rounded"
                        alt="Skyscrapers"
                      />
                    </MDBCol>
                    <MDBCol col="12">
                      <p className="mb-2">
                        <strong>Half Bullnose</strong>
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </MDBCol>
                  </MDBRow>
                </a>
                <MDBRow>
                  <div className=" buttons d-flex justify-content-center mt-3">
                    <a href="!#" class="btn btn-2 btn-light">
                      View More
                    </a>
                  </div>
                </MDBRow>
              </div>
            </MDBCol>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Sinks & Faucets */}
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className="accordion">
        <AccordionSummary aria-controls="panel3a-content" id="panel3a-header">
          <Typography className="light-link">Sinks & Faucets</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <MDBCol
              xs="12"
              className="my-5 mb-xl-0 d-flex flex-column align-items-center"
            >
              <div className="pt-2">
                <p className="text-uppercase font-weight-bold">
                  {megaMenuArray.title3}
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit, iste aliquid. Sed id nihil magni, sint vero provident
                    esse numquam perferendis ducimus dicta adipisci iusto nam
                    temporibus modi animi laboriosam?
                  </p>
                </a>
              </div>
            </MDBCol>
            <MDBRow>
              <div className=" buttons d-flex justify-content-center ">
                <a href="!#" class="btn btn-2 btn-light">
                  View More
                </a>
              </div>
            </MDBRow>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
