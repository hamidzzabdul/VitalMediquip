import { NavLink } from "react-router-dom"
import PropTypes from "prop-types"
import Button from "../UI/Button"

import { HiOutlineBars3BottomRight } from "react-icons/hi2"
import { AiOutlineClose } from "react-icons/ai"
import Logo from "../../../public/logo.svg"

import "./Navigation.scss"
import { useState } from "react"
import NavDetails from "./NavDetails"

const Navigation = ({ onShowForm, onShowSide, onCloseSide }) => {

    const [isVisible, setIsVisible] = useState(false)
    const handleSideMenuVisibility = () => {
        setIsVisible(true)
        onShowSide()
    }
    const handleSideMenuHide = () => {
        setIsVisible(false)
        onCloseSide()
    }

    return (
        <div className="nav-wrapper">
            <NavDetails />
            <nav>
                <div className="nav-bar">
                    <div></div>
                    <NavLink to="/" className="logo">
                        <img src={Logo} alt="" />
                    </NavLink>
                    <div className="nav-links">
                        {!isVisible ? <HiOutlineBars3BottomRight className="hamburger" onClick={handleSideMenuVisibility} />
                            :

                            <AiOutlineClose className="hamburger hidden" onClick={handleSideMenuHide} />
                        }

                        <ul className="nav-items">
                            <li><NavLink to="/" className={({ isActive }) =>
                                isActive ? "active" : undefined
                            }>Home</NavLink></li>
                            <li><NavLink to="/allProducts">Products</NavLink></li>
                            <li><NavLink to="/about">About Us</NavLink></li>
                            <li><NavLink to="/faqs">FAQS</NavLink></li>
                            <li><NavLink to="/contact-us">Contact us</NavLink></li>
                        </ul>
                        <Button label="Get Quote" className="get-quote" onClick={onShowForm} />
                    </div>
                </div>
            </nav>
        </ div>
    )
}

Navigation.propTypes = {
    onShowForm: PropTypes.func,
};

export default Navigation