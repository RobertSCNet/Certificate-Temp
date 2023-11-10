import React, { Component, useState } from "react";
import { saveAsPng } from "save-html-as-image";
import verificationCert1 from "../Img/VerificationCert.png";
import "../CSS/VerificationC.css";

function VerificationCert() {
  const [Name, setName] = useState("");
  const [Date1, setDate1] = useState("");
  const [Date2, setDate2] = useState("");
  const [TrainedBy, setTrainedBy] = useState("");

  return (
    <div className="TC">
      <div className="Meta">
        <div>
          <h1>Training Certificates</h1>

          <p className="CN">Please enter the Comapny Name</p>
          <input
            type="text"
            placeholder="Please enter the Comapny Name"
            value={Name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <p className="CN1">Please enter the Issue Date</p>
          <input
            type="date"
            value={Date1}
            onChange={(e) => {
              setDate1(e.target.value);
            }}
          />

          <p className="CN2">Please enter the Expiry Date</p>
          <input
            type="date"
            value={Date2}
            onChange={(e) => {
              setDate2(e.target.value);
            }}
          />

          <p className="CN">Please enter Trained By Name</p>
          <input
            type="text"
            placeholder="Please enter Trained By Name"
            value={TrainedBy}
            onChange={(e) => {
              setTrainedBy(e.target.value);
            }}
          />
          <div className="TButton">
            <button
              class="button-82-pushable"
              role="button"
              onClick={(e) => {
                e.preventDefault();
                saveAsPng(document.querySelector("#certificateWrapper"), {
                  filename: Name,
                  printDate: true,
                });
              }}
            >
              <span class="button-82-shadow"></span>
              <span class="button-82-edge"></span>
              <span class="button-82-front text">Download Certificate</span>
            </button>
          </div>
        </div>
      </div>

      <div id="certificateWrapper">
        <div id="CName">
          <p>
            <a>{Name}</a>
          </p>
        </div>

        <div id="CName1">
          <p>{Name}</p>
        </div>

        <div id="Date1">
          <p>{Date1}</p>
        </div>

        <div id="Date2">
          <p>{Date2}</p>
        </div>

        <div id="TrianedBy">
          <p>{TrainedBy}</p>
        </div>

        <img src={verificationCert1} alt="Certificate" />
      </div>
    </div>
  );
}

export default VerificationCert;
