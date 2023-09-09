import { useState } from "react";
import { NavLink, useRouteLoaderData } from "react-router-dom"
import SearchAndFilter from "../Common/SearchAndFilter";

import ReactPaginate from 'react-paginate';
import { BsArrowLeftCircleFill } from "react-icons/bs"
import { BsFillArrowRightCircleFill } from "react-icons/bs"

import { useSearch } from "../../Hooks/UseSearch";

import "./AllProducts.scss"


const ITEMS_PER_PAGE = 8

const AllProducts = () => {


    const { data } = useRouteLoaderData("root")
    const { products, categories, subCategories } = data
    const allProducts = products
    const allSubCategories = subCategories
    const allCategories = categories

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
    const { searchText, handleSearch } = useSearch("");


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
            <div className="all-product-wrapper">
                <SearchAndFilter onSearch={handleSearch} />
                <div className="product-wrapper">
                    {searchText === "" ? (
                        // Display all paginated products
                        paginatedProducts.map(product => {
                            const categoryName = categoryMap[product.category] || "unknown Category";
                            const subCategoryName = subCategoryMap[product.subCategory] || "unknown Category";
                            const imageUrl = `https://awful-erin-bandanna.cyclic.app/${product.productImage}`;

                            return (
                                <NavLink
                                    key={product._id}
                                    to={
                                        subCategoryName === "unknown Category"
                                            ? `/allProducts/${categorySlugs[product.category]}/all/${product.slug}`
                                            : `/allProducts/${categorySlugs[product.category]}/${subCategorySlugs[product.subCategory]}/${product.slug}`
                                    }
                                    className="all-products-container"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="product-image">
                                        <img src={imageUrl} alt="microscope" crossOrigin="anonymous" />
                                    </div>
                                    <div className="product-detail">
                                        <p className="category">{categoryName}</p>
                                        <p className="sub-category">{product.name}</p>
                                    </div>
                                </NavLink>
                            );
                        })
                    ) : (
                        // Display filtered products based on the search text
                        filteredProduct.length > 0 ? (
                            filteredProduct.map(product => {
                                const categoryName = categoryMap[product.category] || "unknown Category";
                                const subCategoryName = subCategoryMap[product.subCategory] || "unknown Category";
                                const imageUrl = `https://awful-erin-bandanna.cyclic.app/${product.productImage}`;

                                return (
                                    <NavLink
                                        key={product._id}
                                        to={
                                            subCategoryName === "unknown Category"
                                                ? `/allProducts/${categorySlugs[product.category]}/all/${product.slug}`
                                                : `/allProducts/${categorySlugs[product.category]}/${subCategorySlugs[product.subCategory]}/${product.slug}`
                                        }
                                        className="all-products-container"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="product-image">
                                            <img src={imageUrl} alt={product.name} crossOrigin="anonymous" />
                                        </div>
                                        <div className="product-detail">
                                            <p className="category">{categoryName}</p>
                                            <p className="sub-category">{product.name}</p>
                                        </div>
                                    </NavLink>
                                );
                            })
                        ) : (
                            <p className="nothing-found">No product with that name <br /> try <a href="/contact-us">contacting</a> us for more info</p>
                        )
                    )}
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