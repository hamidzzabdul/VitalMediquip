import { useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom"

import Input from "../UI/Inputs"
import ReactPaginate from 'react-paginate';
import { FaSearch } from "react-icons/fa"
import { BsArrowLeftCircleFill } from "react-icons/bs"
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import { BsSliders } from "react-icons/bs"

import "./AllProducts.scss"


const ITEMS_PER_PAGE = 8

const AllProducts = () => {

    const { products, categories, subCategories } = useLoaderData()
    const allProducts = products.data.data
    const allSubCategories = subCategories.data.data
    const allCategories = categories.data.data

    const categoryMap = {}
    const subCategoryMap = {}
    const categorySlugs = {}
    const subCategorySlugs = {}


    allCategories.forEach(category => {
        categoryMap[category._id] = category.name
    })

    allCategories.forEach(category => {
        categorySlugs[category._id] = category.slug
    })

    allSubCategories.forEach(subCategory => {
        subCategoryMap[subCategory._id] = subCategory.name
    })
    allSubCategories.forEach(subCategory => {
        subCategorySlugs[subCategory._id] = subCategory.slug
    })

    const [currentPage, setCurrentPage] = useState(0);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const [searchText, setSearchText] = useState("")
    const handleOnchange = (e) => {
        const text = e.target.value.trim();

        setSearchText(text)
    }
    const offset = currentPage * ITEMS_PER_PAGE;
    const paginatedProducts = allProducts.slice(offset, offset + ITEMS_PER_PAGE);

    const filteredProduct = paginatedProducts.filter(product =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
    );

    const handleOnscroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    return (
        <div className="all-products-section">
            <div className="category-section">
                <div className="search-bar">
                    <Input type="text" placeholder="search..." onChange={handleOnchange} />
                    <FaSearch className="search-icon" />
                </div>
                <div className="sort">
                    <div className="line"></div>
                    <select name="" id="">
                        <option value="">Sort by</option>
                        <option value="">New-Old</option>
                        <option value="">Alphabetically</option>
                    </select>
                </div>
                <div className="filters">
                    <BsSliders className="icons" />
                    <p> More Filters</p>
                </div>
            </div>
            <div className="all-product-wrapper">

                <div className="product-wrapper">

                    {filteredProduct.map(product => {
                        const categoryName = categoryMap[product.category] || "unkown Category"
                        const subCategoryName = subCategoryMap[product.subCategory] || "unKnown Category"

                        const imageUrl = `http://localhost:3000/${product.productImage}`;

                        return (
                            filteredProduct.length > 0 ?


                                <NavLink key={product._id} to={subCategoryName === "unKnown Category" ?
                                    `/allProducts/${categorySlugs[product.category]}/all/${product.slug}`
                                    :
                                    `/allProducts/${categorySlugs[product.category]}/${subCategorySlugs[product.subCategory]}/${product.slug}`}
                                    className="all-products-container" target="_blank" rel="noopener noreferrer">
                                    <div className="product-image">
                                        <img src={imageUrl} alt="microscope" />
                                    </div>
                                    <div className="product-detail">
                                        <p className="category">{categoryName}</p>
                                        <p className="sub-category">{product.name}</p>
                                        <button className="view-product">View product</button>
                                    </div>
                                </NavLink>
                                :
                                <p>No product here 😔</p>
                        )
                    })}

                </div>
            </div>
            {allProducts.length > ITEMS_PER_PAGE && (
                <div className="paginate">
                    <ReactPaginate
                        previousLabel={<BsArrowLeftCircleFill />}
                        nextLabel={<BsFillArrowRightCircleFill />}
                        pageCount={Math.ceil(allProducts.length / ITEMS_PER_PAGE)}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                        onClick={handleOnscroll}
                    />
                </div>
            )}
        </div>
    )
}

export default AllProducts