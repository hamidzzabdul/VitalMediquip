/* eslint-disable react/prop-types */
import "./Sidebar.scss"

const SideBar = ({ className }) => {
    return (
        <>
            < div className={`side-bar ${className === "active" ? "active" : ""}`}>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Products</li>
                    <li>Faq</li>
                    <li>Contact us</li>
                    <li>
                        <button>Get Quote</button>
                    </li>
                </ul>
            </div >
        </>
    )
}

export default SideBar