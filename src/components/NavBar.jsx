import React from "react";
import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            My App 
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="navbar-collapse collapse show"
            id="navbarColor01"
            style={{}}
          >
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="#">
                  Home
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      <CartWidget/>
      </nav>
  );
};
