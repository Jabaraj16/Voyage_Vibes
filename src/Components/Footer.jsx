import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className=' text-bg-primary'>
      <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        {/* Social medias */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="https://www.facebook.com/" className="me-4 text-reset" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/" className="me-4 text-reset" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://plus.google.com/" className="me-4 text-reset" aria-label="Google">
              <i className="fab fa-google"></i>
            </a>
            <a href="https://www.instagram.com/" className="me-4 text-reset" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/" className="me-4 text-reset" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/" className="me-4 text-reset" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>
        {/*Links */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h4 className="text-uppercase fw-bold mb-4">
                 Voyage Vibes
                </h4>
                <p>Lorem ipsum dolor sit amet consectetur accusamus earum illo est voluptatem impedit explicabo beatae commodi.</p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Company
                </h6>
                <p>
                  <a href="" className="text-reset text-decoration-none">About us</a>
                </p>
                <p>
                  <a href="" className="text-reset text-decoration-none">News</a>
                </p>
                <p>
                  <a href="" className="text-reset text-decoration-none">FAQs</a>
                </p>
                <p>
                  <a href="" className="text-reset text-decoration-none">Report vulnerabilities</a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  links
                </h6>
                <p>
                  <Link to={'/'} style={{ textDecoration: 'none', color: 'gray' }}>Home</Link>
                </p>
                <p>
                  <Link to={'/allreview'} style={{ textDecoration: 'none', color: 'gray' }}>View All</Link>
                </p>
                <p>
                  <Link to={'/dashboard'} style={{ textDecoration: 'none', color: 'gray' }}>Dashboard</Link>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3"></i>Kakkanad, Kochi</p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  jabarajraju1590@gmail.com
                </p>
                <p><i className="fas fa-phone me-3"></i>+91 8138056696</p>
                <p><i className="fas fa-print me-3"></i>+91 9447832661</p>
              </div>
            </div>
          </div>
        </section>
        {/* Copyright */}
        <div className="text-center p-1 bg-body-tertiary" >
          © 2024 Copyright Voyage Vibes ∙ All rights reserved
        </div>
      </footer>
    </div>
  )
}

export default Footer