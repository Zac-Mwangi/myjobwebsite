import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ jobname, logo, company, location, salary, id }) {
  return (
    <div className="col-md-4 my-2  ">
      <div className="Card card p-2">
        <div className="text-right">
          {" "}
          <small>Full Time</small>{" "}
        </div>
        <div
          className="text-center mt-3 p-3
            "
        >
          {" "}
          <img src={logo} width="60" alt="Logo" />{" "}
          <span className="d-block font-weight-bold">{jobname}</span>
          <hr /> <span>{company}</span>
          <div className="d-flex flex-row align-items-center justify-content-center">
            {" "}
            <i className="fa fa-map-marker"></i>
            <small className="ml-1 px-2"> {location}</small>{" "}
          </div>
          <div className="d-flex justify-content-between mt-3">
            {" "}
            <span className="text-dark">${salary}</span>
            <Link to={"/jobs/" + id}>
              <button className="btn btn-primary btn-sm active">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
