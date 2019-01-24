import React from 'react';
import Logo from '../Assets/images/logo.png'
import {Link}  from 'react-router-dom';
const Footer = () => {
    return (
  <div className='footer'>
<footer class="footer footer-light is-tainted">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <div class="footer-column">
                            <div class="footer-header">
                                <h3>Product</h3>
                            </div>
                            <ul class="link-list">
                                <li className="nav-item"><Link className="nav-link" to="/">Discover features</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/">CMS integration</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/">Customers</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/">Weekly sessions</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/">Free trials and demo</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/">What's next ?</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="footer-column">
                            <div class="footer-header">
                                <h3>Company</h3>
                            </div>
                            <ul class="link-list">
                                <li className="nav-item"><Link className="nav-link" to="/">About us</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/">About security</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/">User guide</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/">Terms of service</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/">Terms of website use</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/">Privacy policy</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="footer-column">
                            <div class="footer-header">
                                <h3>Learning</h3>
                            </div>
                            <ul class="link-list">
                                <li className="nav-item"><Link className="nav-link" to="/">Resources</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/">Blog</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/">FAQ</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/">API documentation</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/">Admin guide</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="footer-column">
                            <div class="footer-logo">
                                <img src={Logo} alt=""/>
                                <h5>Tech Security Protocol</h5>
                            </div>
                            <div class="footer-header">
                                <nav class="level is-mobile">
                                    <div class="level-left level-social">
                                        <a href="#" class="level-item">
                                            <span class="icon"><i class="fab fa-facebook"></i></span>
                                        </a>
                                        <a href="#" class="level-item">
                                            <span class="icon"><i class="fab fa-twitter"></i></span>
                                        </a>
                                        <a href="#" class="level-item">
                                            <span class="icon"><i class="fab fa-linkedin"></i></span>
                                        </a>
                                    </div>
                                </nav>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </footer>  
  </div>
      );
}
 
export default Footer;
