import React, { Component, useState, size } from "react";
import { saveAsPng } from "save-html-as-image";
import certificatetemp from "../Img/certificatetemp.png";
import "../CSS/TrainingC.css";

function TrainingCert() {
  const [Name, setName] = useState("");
  const [Date, setDate] = useState("");
  const [PTrained, setPTrained] = useState("");
  const [TrainedBy, setTrainedBy] = useState("");

  return (
    <div className="TC">
      <div className="Meta">
        <div>
          <h1>Training Certificates</h1>

          <p className="CN">Please enter the comapny name</p>
          <input
            type="text"
            placeholder="Please enter the Comapny Name"
            value={Name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <p className="CN">Please enter the date trained</p>
          <input
            type="date"
            value={Date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />

          <p className="CN">Please enter that was trained's name</p>
          <input
            type="text"
            placeholder="Please enter that was trained's name"
            value={PTrained}
            onChange={(e) => {
              setPTrained(e.target.value);
            }}
          />

          <p className="CN">Please enter trained by name</p>
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
        <div id="TC_CName">
          <p>{Name}</p>
        </div>

        <div id="TC_Date">
          <p>{Date}</p>
        </div>

        <div id="TC_PTrained">
          <p>{PTrained}</p>
        </div>

        <div id="TC_TrianedBy">
          <p>{TrainedBy}</p>
        </div>

        <img src={certificatetemp} alt="Certificate" />
      </div>
    </div>
  );
}

export default TrainingCert;
