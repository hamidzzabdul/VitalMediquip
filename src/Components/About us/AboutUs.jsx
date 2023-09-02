import "./AboutUs.scss"
import History from "./History"
import Banner from "../../assets/banner.jpg"
import HowItBegan from "./HowItBegan"
import Team from "../../assets/Team.jpg"
import WhoWeServe from "./WhoWeServe"
import Partners from "../Common/Partners"
import { BsFillMapFill } from "react-icons/bs"
import { FaBullseye } from "react-icons/fa"
import { IoPeople } from "react-icons/io5"


const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="hero-container">
                <img src={Banner} alt="banner" />
                <h1 className="title">About us</h1>
            </div>
            <div className="sections">
                <div className="mission-section">
                    <div className="vision col-1">
                        <div className="heading">
                            <BsFillMapFill className="icon" />
                            <h2>Vision</h2>
                        </div>
                        <p>
                            At VitalMediQuip, Our mission is to ensure that healthcare professionals have access to essential tools.
                        </p>
                    </div>
                    <div className="mission col-1">
                        <label>
                            <div className="heading">
                                <FaBullseye className="icon" />
                                <h2>Mission</h2>
                            </div>
                            <div className="line"></div>
                        </label>
                        <p>
                            At VitalMediQuip, Our mission is to ensure that
                        </p>
                    </div>

                    <div className="values col">
                        <div className="heading">
                            <IoPeople className="icon" />
                            <h2>Core Values</h2>
                        </div>
                        <ul>
                            <li>At VitalMediQuip, Our mission is to ensure that</li>
                            <li>At VitalMediQuip, Our mission is to ensure that</li>
                            <li>At VitalMediQuip, Our mission is to ensure that</li>
                            <li>At VitalMediQuip, Our mission is to ensure that</li>
                        </ul>
                    </div>
                </div>
                <HowItBegan />
                <History />
                <div className="team-members">
                    <h2>Our Team</h2>
                    <div className="our-team-image">
                        <img src={Team} alt="team members" />
                    </div>
                </div>
                <WhoWeServe />
                <Partners />
            </div>
        </div>
    )
}

export default AboutUs