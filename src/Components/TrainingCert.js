import React, { Component, useState } from "react";
import { saveAsPng } from "save-html-as-image";
import certificatetemp from "../Img/certificatetemp.jpg";

function TrainingCert() {
  const [Name, setName] = useState("");
  const [Date, setDate] = useState("");
  const [TrainedBy, setTrainedBy] = useState("");

  return (
    <div className="App">
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

          <p className="CN">Please enter the Date Trained</p>
          <input
            type="date"
            value={Date}
            onChange={(e) => {
              setDate(e.target.value);
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
          <div>
            <button
              class="button-82-pushable"
              role="button"
              onClick={(e) => {
                e.preventDefault();
                saveAsPng(document.querySelector("#certificateWrapper"));
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
          <p>{Name}</p>
        </div>

        <div id="Date">
          <p>{Date}</p>
        </div>

        <div id="TrianedBy">
          <p>{TrainedBy}</p>
        </div>

        <img src={certificatetemp} alt="Certificate" />
      </div>
    </div>
  );
}

export default TrainingCert;
