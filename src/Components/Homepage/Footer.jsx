import Contact from "./Contact"
import "./Footer.scss"

import { FaFacebookF, FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { SlSocialTwitter } from "react-icons/sl"
import { FaLinkedinIn } from "react-icons/fa6"
import { Link, NavLink } from "react-router-dom"
import Logo from "../../../public/logo.svg"


const Footer = () => {

    const handleOnclick = () => {
        window.scrollTo({
            top: -100,
            behavior: "smooth"
        })
    }
    return (
        <>
            <Contact />
            <footer>
                <div className="footer-items">
                    <div className="logo">
                        <NavLink to="/" onClick={handleOnclick}>
                            <img src={Logo} alt="" />
                        </NavLink>
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
                            <h3>Service & maintenance</h3>
                            <ul>
                                <li>
                                    <NavLink to="/allproducts/services-&-maintenace">Laboratory machines</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/allproducts/services-&-maintenace">Dental machines</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/allproducts/services-&-maintenace">Theatre & ICU machines</NavLink>

                                </li>
                                <li>
                                    <NavLink to="/allproducts/services-&-maintenace">Radiology machines</NavLink>
                                </li>

                            </ul>
                        </li>
                        <li>
                            <h3>Quick links</h3>
                            <ul>
                                <li>
                                    <NavLink to="/" onClick={handleOnclick}>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" onClick={handleOnclick}>
                                        About us
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/allproducts" onClick={handleOnclick}>
                                        Products
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact-us" onClick={handleOnclick}>
                                        Contacts
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/faqs" onClick={handleOnclick}>
                                        FAQ
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="socials">
                            <h3>Get in touch</h3>
                            <ul>
                                <Link to="https://www.facebook.com/VitalMediquip/" target="_blank" rel="noopener noreferrer">
                                    <li>
                                        <FaFacebookF className="social-icon" />
                                        <span>Facebook</span>
                                    </li>
                                </Link >
                                <Link to="https://www.instagram.com/vital_mediquip/" target="_blank" rel="noopener noreferrer">
                                    <li>
                                        <FaInstagram className="social-icon" />
                                        <span>instagram</span>
                                    </li>
                                </Link>
                                <Link to="https://twitter.com/Vital_Mediquip" target="_blank" rel="noopener noreferrer">
                                    <li>
                                        <FaTwitter className="social-icon" />
                                        <span>Twitter</span>
                                    </li>
                                </Link>
                                <Link to="https://www.linkedin.com/company/vital-mediquip/" target="_blank" rel="noopener noreferrer">
                                    <li>
                                        <FaLinkedinIn className="social-icon" />
                                        <span>LinkedIn</span>
                                    </li>
                                </Link>
                            </ul>
                        </li>
                    </ul>
                </div >
            </footer >
            <div className="copyrights">
                <p>Copyright © 2023 Vitalmediquip</p>
                <p>All right Reservered Vitalmediquip</p>
            </div>
        </>
    )
}

export default Footer