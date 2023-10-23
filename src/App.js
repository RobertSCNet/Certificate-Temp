import React, { Component } from "react";
import { saveAsPng } from "save-html-as-image";
import certificatetemp from "../src/Img/certificatetemp.jpg";

class App extends Component {
  certificateWrapper = React.createRef();
  state = {
    Name: "Supply Chain Network",
    Date: "",
    TrainedBy: "Robert"
  };

  render() {
    return (
      <div className="App">
        <div className="Meta">
          <div>
            <h1>Training Certificates</h1>

            <p className="CN">Please enter the Comapny Name</p>
            <input
              type="text"
              placeholder="Please enter the Comapny Name"
              value={this.state.Name}
              onChange={(e) => {
                this.setState({ Name: e.target.value });
              }}
            />

            <p className="CN">Please enter the Date Trained</p>
            <input
              type="date"
              value={this.state.Date}
              onChange={(e) => {
                this.setState({ Date: e.target.value });
              }}
            />

            <p className="CN">Please enter Trained By Name</p>
            <input
              type="text"
              placeholder="Please enter Trained By Name"
              value={this.state.TrainedBy}
              onChange={(e) => {
                this.setState({ TrainedBy: e.target.value });
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
            <p>{this.state.Name}</p>
          </div>

          <div id="Date">
            <p>{this.state.Date}</p>
          </div>

          <div id="TrianedBy">
            <p>{this.state.TrainedBy}</p>
          </div>

          <img src={certificatetemp} alt="Certificate" />
        </div>
      </div>
    );
  }
}

export default App;
