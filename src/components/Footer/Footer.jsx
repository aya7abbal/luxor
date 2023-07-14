import React from "react";
// import "../Buttons/buttons.css";
import "./footer.css";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import Logo from "../../assets/Logo.png";
import "./input.css";
export default function Footer() {
  return (
    <>
      <div className=" buttons button-1">
        <a href="!#" class="btn btn-1">
          <svg>
            <rect x="0" y="0" fill="none" width="100%" height="100%" />
          </svg>
          Get A Quote
        </a>
      </div>

      <div className="footer row bottom-absolute text-white pt-3">
        <MDBRow
          className=" text-white row-cols-1
    row-cols-sm-2 row-cols-lg-4 row-cols-xl-5 g-md-2 g-lg-1 d-flex p-3 justify-content-center"
        >
          <MDBCol>
            <ul className="col-footer">
              <li className="mb-5">
                {" "}
                <img src={Logo} alt="logo" width="120px" />
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
                voluptates repellat laudantium sapiente sed eligendi debitis
                perspiciatis libero aut hic!
              </li>
            </ul>
          </MDBCol>

          <MDBCol>
            <ul className="col-footer">
              <h3 className="col-footer-title my-3">Office Location</h3>
              <li className="mb-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                dicta ratione modi praesentium. Officia, voluptatibus.
              </li>

              <li className="mb-3">email@gmail.com</li>
              <li>+91-234567890</li>
            </ul>
          </MDBCol>
          <MDBCol>
            <ul className="col-footer">
              <h3 className="col-footer-title my-3">Links</h3>
              <li className="mb-3"> Products</li>
              <li className="mb-3">Projects</li>
              <li>About Us</li>
            </ul>
          </MDBCol>
          <MDBCol>
            <ul className="col-footer pb-4 border-bottom">
              <h3 className="col-footer-title my-3">Newsletter</h3>
  

              <div className="container">
                <div className="container__item">
                  <form className="form d-flex align-items-center">
                    <input
                      type="email"
                      className="form__field"
                      placeholder="E-Mail Address"
                    />
                    <button
                      type="button"
                      className="btn-newsletter btn-newsletter--primary btn-newsletter--inside uppercase"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </ul>
            <div className="footer-social d-flex justify-content-center mt-4">
              <AiOutlineInstagram className="fs-3 social-link" />
              <AiOutlineFacebook className="fs-3 social-link" />
              <AiOutlineTwitter className="fs-3 social-link" />
            </div>
          </MDBCol>
        </MDBRow>

        <div className=" copyrights">
          <small>&copy; Luxor, All rights reserved</small>
        </div>
      </div>
    </>
  );
}
