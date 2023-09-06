/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom"
import { useContext } from "react"

import EnquireContext from "../../store/EnquireContext"

import "./Products.scss"

import Categories from "./Categories"
import NavRoutes from "./NavRoutes"
import EnquireForm from "../Common/EnquireForm"


const Products = ({ categories, subCategories }) => {
    const allCategories = categories.data.data
    const allSubCategories = subCategories.data.data

    const { showEnquire, toggleModal } = useContext(EnquireContext);

    return (
        <>
            {showEnquire && <EnquireForm onEnquire={toggleModal} />}
            <div className="products">
                <h1>Our Products</h1>
                <NavRoutes />
                <div className="products-section">
                    <Categories categories={allCategories} subCategories={allSubCategories} />
                    <div className="left-product-section" >
                        <Outlet />
                    </div>
                </div>
            </div>
        </>

    )
}
export default Products
