import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Accordion from "../components/Accordion";

const HowToBegin = () => {
  return (
    <div className="container-fluid howto_begin_main">
      <div className="row">
        <div className="col-md-12">
          <h2>
            Create Your Online Course <br />
            in 3 Easy Steps
          </h2>
        </div>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-8">
              <p>
                We provide a wealth of materials for developing your first
                course. In addition, our teacher dashboard and curriculum pages
                help you stay organized.
              </p>
            </div>
            <div className="col-md-4">
              <button>Become Author</button>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-6">
              <div className="howtobeginimg"></div>
            </div>
            <div className="col-md-6">
              <Accordion />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBegin;
