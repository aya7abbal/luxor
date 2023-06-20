import React from "react";
import "../Buttons/buttons.css";
import "./footer.css";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";

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
        <MDBRow >
          <div className="footer-social d-flex justify-content-end">
            <AiOutlineInstagram className="fs-3 social-link" />
            <AiOutlineFacebook className="fs-3 social-link" />
            <AiOutlineTwitter className="fs-3 social-link" />
          </div>
        </MDBRow>
        <MDBRow
          className=" text-white row-cols-1
    row-cols-sm-2 row-cols-lg-4 row-cols-xl-5 g-4 d-flex justify-content-center"
        >
          <MDBCol>
            <ul className="col-footer">
              <h3 className="col-footer-title my-3">Products</h3>
              <li>Marble</li>
              <li>Quartz</li>
              <li>Granite</li>
              <li>Quartzite</li>
              <li>Fixtures</li>
            </ul>
          </MDBCol>
          <MDBCol>
            <ul className="col-footer">
              <h3 className="col-footer-title my-3">Products</h3>
              <li>Marble</li>
              <li>Quartz</li>
              <li>Granite</li>
              <li>Quartzite</li>
              <li>Fixtures</li>
            </ul>
          </MDBCol>
          <MDBCol>
            <ul className="col-footer">
              <h3 className="col-footer-title my-3">Products</h3>
              <li>Marble</li>
              <li>Quartz</li>
              <li>Granite</li>
              <li>Quartzite</li>
              <li>Fixtures</li>
            </ul>
          </MDBCol>
          <MDBCol>
            <ul className="col-footer">
              <h3 className="col-footer-title my-3">Products</h3>
              <li>Marble</li>
              <li>Quartz</li>
              <li>Granite</li>
              <li>Quartzite</li>
              <li>Fixtures</li>
            </ul>
          </MDBCol>
          <MDBCol>
            <ul className="col-footer">
              <h3 className="col-footer-title my-3">Products</h3>
              <li>Marble</li>
              <li>Quartz</li>
              <li>Granite</li>
              <li>Quartzite</li>
              <li>Fixtures</li>
            </ul>
          </MDBCol>
          <MDBCol>
            <ul className="col-footer">
              <h3 className="col-footer-title my-3">Products</h3>
              <li>Marble</li>
              <li>Quartz</li>
              <li>Granite</li>
              <li>Quartzite</li>
              <li>Fixtures</li>
            </ul>
          </MDBCol>
        </MDBRow>

        <div className="footer-head d-flex justify-content-md-start justify-content-center px-5 align-items-center">
          <div className="footer__copyright d-flex justify-self-start ">
            <small>&copy; Luxor, All rights reserved</small>
          </div>
        </div>
      </div>
    </>
  );
}
