import { Link } from "react-router-dom"

import "./BusinessHours.scss"
import { BsFillCalendar2EventFill } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa6"
import { FaLinkedinIn } from "react-icons/fa6"
import { FaTwitter } from "react-icons/fa6"

const BusinessHours = () => {
    return (
        <div className="working-hours">
            <div className="title">
                <BsFillCalendar2EventFill className="bs-icons" />
                <h2>Business Hours</h2>
            </div>
            <div className="hours-wrapper">

                <div className="hours">
                    <p>Monday - Friday : 8:00 AM - 5:00 PM</p>
                    <p>Saturday : 9:00 AM - 2:00 PM</p>
                    <p>Sunday : Closed</p>
                </div>
                <div className="social">
                    <h3>Follow us</h3>
                    <label>

                        <Link to="https://www.facebook.com/VitalMediquip/" target="_blank" >
                            <FaFacebookF className="social-icon" />
                        </Link>
                        <Link>
                            <FaInstagram className="social-icon" />
                        </Link>
                        <Link>
                            <FaLinkedinIn className="social-icon" />
                        </Link>
                        <Link>
                            <FaTwitter className="social-icon" />
                        </Link>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default BusinessHours