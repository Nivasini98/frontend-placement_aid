import React from 'react'
import Aptitude from '../QuizPage/aptitude';
import Coding from "../QuizPage/coding";
import RB from "../QuizPage/rb";
import TechnicalAptitude from "../QuizPage/technicalaptitude";
import DBMS from "../QuizPage/dbms";
import Ds from "../QuizPage/ds";
import { BrowserRouter as Router,Route, Link } from "react-router-dom";
import "../../courses.css" 


const Courses = () =>
{
    return (
      <div class="container courses">
      <div class="courses">
        <div class="row">
          <div class="col-sm-3">
            <div class="card">
              <Route exact path="/aptitude" component={Aptitude} />
              <Link to="/aptitude">
             
                <img
                  class="card-img-top"
                  src="https://www.iaccse.com/wp-content/uploads/2015/10/k2-sito.png"
                  alt="Card image cap"
                ></img>
              </Link>
              

              <div class="card-footer">
                <span class="card-text">APTITUDE</span>
              </div>
            </div>
          </div>

          <div class="col-sm-3">
            <div class="card">
              <Route exact path="/dbms" component={DBMS} />
              <Link to="/dbms">
                <img
                  class="card-img-top"
                  src="https://thumbs.dreamstime.com/b/dbms-database-management-system-computer-data-symbol-vector-illustration-concept-73668263.jpg"
                  alt="Card image cap"
                ></img>
              </Link>

              <div class="card-footer">
                <span class="text-muted">DBMS</span>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <Route exact path="/ds" component={Ds} />
              <Link to="/ds">
                <img
                  class="card-img-top"
                  src="https://5.imimg.com/data5/TK/YX/MK/SELLER-1943297/data-structures-training-in-gurgaon-500x500.png"
                  alt="Card image cap"
                ></img>
              </Link>
              <div class="card-footer">
                <span class="text-muted">DATA STRUCTURES</span>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
               <Route
                exact
                path="/technicalaptitude"
                component={TechnicalAptitude}
              /> 
              <Link to="/technicalaptitude">
                <img
                  class="card-img-top"
                  src="https://cdn4.iconfinder.com/data/icons/popicon-bluetone-education/256/14-512.png"
                  alt="Card image cap"
                ></img>
              </Link>
              <div class="card-footer">
                <span class="text-muted">TECHNICAL APTITUDE</span>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-3">
            <div class="card">
              <div class="card-img-top">
                <Route exact path="/coding" component={Coding} /> 
                <Link to="/coding">
                  <img
                    src="https://cdn0.iconfinder.com/data/icons/education-outline-17/24/laptop-coding1-512.png"
                    alt="Card image cap"
                  ></img>
                </Link>
              </div>
              <div class="card-footer">
                <span class="card-text">CODING</span>
              </div>
            </div>
          </div>

          <div class="col-sm-3">
            <div class="card">
              <Route exact path="/rb" component={RB} />
              <Link to="/rb">
                <img
                  class="card-img-top"
                  src="https://store-images.s-microsoft.com/image/apps.3625.14515189813978401.2fe0ee43-bb16-44fd-8dd9-18049837b2f5.c86e10e8-6a09-4aee-b837-7c067de2ace3"
                  alt="Card image cap"
                ></img>
              </Link>
              <div class="card-footer">
                <span class="text-muted">RESUME BUILDING</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Courses;