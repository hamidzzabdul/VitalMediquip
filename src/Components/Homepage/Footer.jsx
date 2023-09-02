import Contact from "./Contact"
import "./Footer.scss"

import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { SlSocialTwitter } from "react-icons/sl"
import { FaLinkedinIn } from "react-icons/fa6"
import { NavLink } from "react-router-dom"
import Logo from "../../../public/logo.svg"


const Footer = () => {

    const handleOnclick = () => {
        window.scrollTo({
            top: 0,
        })
    }
    return (
        <>
            <Contact />
            <footer>
                <div className="footer-items">
                    <div className="logo">
                        <NavLink to="/">
                            <img src={Logo} alt="" />
                        </NavLink>
                        <span>Performance , Reliability , Accuracy</span>
                        <p>Premier medical supplier for top-quality healthcare solutions.</p>
                    </div>
                    <ul className="footer-links">
                        <li>
                            <h3>Our Products</h3>
                            <ul>
                                <li>
                                    <NavLink to="/allproducts/laboratory" onClick={handleOnclick}>
                                        Laboratory
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/allproducts/general-hospital" onClick={handleOnclick}>
                                        General Hospital
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/allproducts/theatre-and-icu/all" onClick={handleOnclick}>
                                        Theater & ICU
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/allproducts/physiotherapy-and-orthopedic/all" onClick={handleOnclick}>
                                        Physiotherapy
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/allproducts/dental/all" onClick={handleOnclick}>
                                        Dental
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/allproducts/imaging/all" onClick={handleOnclick}>
                                        Imaging
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/allproducts/maternity/all" onClick={handleOnclick}>
                                        Maternity
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/allproducts/Hospitality" onClick={handleOnclick}>
                                        Hospitality
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/allproducts/schools&universities" onClick={handleOnclick}>
                                        Schools and Universities
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h3>Service & maintainance</h3>
                            <ul>
                                <li>Laboratory machines</li>
                                <li>Dental machines</li>
                                <li>Theatre & ICU machines</li>
                                <li>Radiology machines</li>

                            </ul>
                        </li>
                        <li>
                            <h3>Quick links</h3>
                            <ul>
                                <li>
                                    <NavLink to="/">
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about">
                                        About us
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/products">
                                        Products
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact-us">
                                        Contacts
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Faq">
                                        FAQ
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="socials">
                            <h3>Get in touch</h3>
                            <ul>
                                <li>
                                    <FaFacebookF className="social-icon" />
                                    <span>Facebook</span>
                                </li>
                                <li>
                                    <FaInstagram className="social-icon" />
                                    <span>instagram</span>
                                </li>
                                <li>
                                    <SlSocialTwitter className="social-icon" />
                                    <span>Twitter</span>
                                </li>
                                <li>
                                    <FaLinkedinIn className="social-icon" />
                                    <span>linkedIn</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </footer>
            <div className="copyrights">
                <p>Copyright © 2023 Vitalmediquip</p>
                <p>All right Reservered Vitalmediquip</p>
            </div>
        </>
    )
}

export default Footer