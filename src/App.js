import React, { Component, useEffect, useState } from "react";
import TrainingCert from "./Components/TrainingCert";
import VerificationCert from "./Components/VerificationCert";
import Home from "./Components/Home";
import { Route, Routes } from "react-router";
import Nav from "./Components/Nav";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Footer from "./Components/Footer";
import "./CSS/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import api from "./AxiosRest";
import Swal from 'sweetalert2'

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const[username,setUsername]=useState("");
  const [password,setPassword] = useState("");
  const [show,setShow] = useState(false);
  const handleClose= () => setShow(false);
  const handleShow = () => setShow(true); 
  
  let LoginUser = () =>{
    let user ={
      username:username,
      password:password
    }

    api.post('/system/CertificateGenerator/LoginCertificateUser',user).then((response)=>{
      if(response.data =="Login Successful"){
        Swal.fire(
          'Login',
         response.data,
          'Success'
        )
        setIsLoggedIn(true);
        handleClose();
      }else{
        Swal.fire(
          'Login',
         response.data,
          'error'
        )
      }

    });
  }
  return (
    <>
    <div className="btnLogin">
      <div hidden={isLoggedIn== true? true:false}>
      <button
          class="button-82-pushable"
          role="button"
          onClick={

           handleShow
          }
        >
          <span className="button-82-shadow"></span>
          <span className="button-82-edge"></span>
          <span className="button-82-front text">Login</span>
        </button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>
              <label>username :</label>
            </div>
            <div>
                <input placeholder="Enter Username" type="text"onChange={(e)=>{
                  setUsername(e.target.value)
                }}></input>
            </div>
           </div>
           <div>
            <div>
              <label>Password :</label>
            </div>
            <div>
                <input placeholder="Enter password" type="password" onChange={(e)=>{

                  setPassword(e.target.value)
                }}></input>
            </div>
           </div>
           </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={LoginUser}>
           Login
          </Button>
        </Modal.Footer>
      </Modal>

      
      <div hidden={isLoggedIn==false ? true:false}>
      <Nav></Nav>

      <Routes>
        <Route index element={<Home />} />
        <Route path="/TrainingCert" element={<TrainingCert />} />
        <Route path="/VerificationCert" element={<VerificationCert />} />
      </Routes>
      </div>
    </div>
    </>
  );
}

export default App;
