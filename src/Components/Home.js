import React from "react";
import "../CSS/Home.css";
import { Outlet, useNavigate, Navigate } from "react-router-dom";
import Particles from "react-particles";

function Home() {
  let Navigate = useNavigate();

  return (
    <div className="ACert1">
      <div>
        <div className="AdminCertCont">
          <div className="AdminCert">
            <h2 className="ACert2">ADMIN CERTIFICATES</h2>

            <div className="ACert">
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
                <span class="button-82-front text">
                  Verification Certificate
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="RFQDocs">
          <h2 className="Admin">RFQ Docs</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
