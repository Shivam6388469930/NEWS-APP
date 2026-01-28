


import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  handleSearchChange = (e) => {
    this.setState({ search: e.target.value })
  }

  handleSearchSubmit = (e) => {
    e.preventDefault()
    this.fetchNews()
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
        <div className="container-fluid container-lg">
          {/* Brand with improved styling */}
          <Link className="navbar-brand fw-bold fs-4 d-flex align-items-center" to="/">
            <span className="bg-primary bg-gradient px-2 py-1 rounded me-2">📰</span>
            NEWS-WALA
          </Link>
          
          {/* Toggle button with better styling */}
          <button 
            className="navbar-toggler border-0" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          {/* Collapsible menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Navigation links with improved layout */}
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
              <li className="nav-item mx-1">
                <Link className="nav-link px-3 py-2 rounded" aria-current="page" to="/">
                  <span className="d-lg-none d-inline-block me-2">🏠</span>
                  Home
                </Link>
              </li>
              
              <li className="nav-item mx-1">
                <Link className="nav-link px-3 py-2 rounded" to="/business">
                  <span className="d-lg-none d-inline-block me-2">💼</span>
                  Business
                </Link>
              </li>
              
              <li className="nav-item mx-1">
                <Link className="nav-link px-3 py-2 rounded" to="/entertainment">
                  <span className="d-lg-none d-inline-block me-2">🎬</span>
                  Entertainment
                </Link>
              </li>
              
              <li className="nav-item mx-1">
                <Link className="nav-link px-3 py-2 rounded" to="/general">
                  <span className="d-lg-none d-inline-block me-2">📰</span>
                  General
                </Link>
              </li>
              
              <li className="nav-item mx-1">
                <Link className="nav-link px-3 py-2 rounded" to="/health">
                  <span className="d-lg-none d-inline-block me-2">🏥</span>
                  Health
                </Link>
              </li>
              
              <li className="nav-item mx-1">
                <Link className="nav-link px-3 py-2 rounded" to="/sports">
                  <span className="d-lg-none d-inline-block me-2">⚽</span>
                  Sports
                </Link>
              </li>
              
              <li className="nav-item mx-1">
                <Link className="nav-link px-3 py-2 rounded" to="/science">
                  <span className="d-lg-none d-inline-block me-2">🔬</span>
                  Science
                </Link>
              </li>
              
              <li className="nav-item mx-1">
                <Link className="nav-link px-3 py-2 rounded" to="/technology">
                  <span className="d-lg-none d-inline-block me-2">💻</span>
                  Technology
                </Link>
              </li>
            </ul>
            
           
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar