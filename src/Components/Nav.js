import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "../CSS/Nav.css";
import logo from "../Img/SCNetLogo.png";

function Nav() {
  let Navigate = useNavigate();
  return (
    <div id="nav">
      <img className="SCNetLogo" width="20%" src={logo} alt="SCNet Log" />
      <nav>
        <button
          class="button-82-pushable"
          role="button"
          onClick={(e) => {
            Navigate("/");
          }}
        >
          <span class="button-82-shadow"></span>
          <span class="button-82-edge"></span>
          <span class="button-82-front text">Home</span>
        </button>

        <button
          class="button-82-pushable"
          role="button"
          onClick={(e) => {
            Navigate("/TrainingCert");
          }}
        >
          <span class="button-82-shadow"></span>
          <span class="button-82-edge"></span>
          <span class="button-82-front text">Training Certificate</span>
        </button>

        <button
          class="button-82-pushable"
          role="button"
          onClick={(e) => {
            Navigate("/VerificationCert");
          }}
        >
          <span class="button-82-shadow"></span>
          <span class="button-82-edge"></span>
          <span class="button-82-front text">Verification Certificate</span>
        </button>
      </nav>
    </div>
  );
}

export default Nav;
