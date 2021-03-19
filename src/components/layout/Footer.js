import React from 'react'
//import logo from "../../logo.jpg";


const Footer = () => {
  return (
    <div class="p-3 my-3 bg-dark text-white">
      <div class="container-fluid text-center text-md-left">
        <div class="row">
          <div className="col-md-6">
            <p> </p>
            <p> </p>

            <h5 class="text-uppercase">
              {" "}
              PLACEMENT AID
              <img src="/images/logo.jpg" /> 
            </h5>
            <span>
              PSG College Of Technology <br />
              Avanashi Road
              <br />
              Coimbatore - 641 004
              <br />
              Tamil Nadu
              <br />
              INDIA
              <br />
              Email : placementaid@gmail.com
              <br />
            </span>
          </div>

          <div class="col-md-3">
            <h5 class="text-uppercase">COURSES</h5>

            <ul class="list-unstyled">
              <li>
                <a href="http://localhost:3000/aptitude">APTITUDE</a>
              </li>
              <li>
                <a href="http://localhost:3000/dbms">DBMS</a>
              </li>
              <li>
                <a href="http://localhost:3000/ds">DATA STRUCTURES</a>
              </li>
              <li>
                <a href="http://localhost:3000/technicalaptitude">
                  TECHNICAL APTITUDE
                </a>
              </li>
              <li>
                <a href="http://localhost:3000/coding">CODING</a>
              </li>
              <li>
                <a href="http://localhost:3000/rb">RESUME BUILDING</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright text-center py-3">
        {" "}
        Copyright © 2021 :
        <a href="http://localhost:3000/"> PSG PLACEMENT TRAINING </a>
      </div>
    </div>
  );
};

export default Footer;