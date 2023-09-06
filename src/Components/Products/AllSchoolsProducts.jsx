import { NavLink, useLoaderData } from "react-router-dom"
import Sub1 from "../../assets/categories/subcategories/equipments.jpg"

import ReactPaginate from 'react-paginate';

import { BsArrowLeftCircleFill } from "react-icons/bs"
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import { useState } from "react";



const ITEMS_PER_PAGE = 8

const AllSchoolsProducts = () => {
    const { products, subCategories, categories } = useLoaderData()

    const allSubCategories = subCategories.data.data
    const allCategories = categories.data.data
    const allProducts = products.data.data

    const categoryMap = {}
    const subCategoryMap = {}
    allSubCategories.map(subCategory => {
        subCategoryMap[subCategory._id] = subCategory.slug
    })

    allCategories.forEach(category => {
        categoryMap[category._id] = category.slug
    })

    const [currentPage, setCurrentPage] = useState(0); // Use array destructuring
    const offset = currentPage * ITEMS_PER_PAGE;


    const filteredProducts = allProducts.filter(product => product.tags.includes("school"))
    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const paginatedProducts = filteredProducts.slice(offset, offset + ITEMS_PER_PAGE);
    const handleOnscroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <div className="product-section">
            {paginatedProducts.map(obj => {
                const categoryName = categoryMap[obj.category] || "unKnown Category"
                const subCategoryName = subCategoryMap[obj.subCategory] || "unKnown Category"

                return <NavLink key={obj._id} to={subCategoryName === "unKnown Category" ?
                    `/allProducts/${categoryName}/all/${obj.name}`
                    :
                    `/allProducts/${categoryName}/${subCategoryName}/${obj.name}`} target="_blank" rel="noopener noreferrer">
                    <div className='products-container'>
                        <img src={Sub1} alt="microscope" />
                        <div className="product-details">
                            <p className="category">{categoryName}</p>
                            <p className="sub-category">{obj.name}</p>
                            <button className="view-product">View Product</button>
                        </div>
                    </div>
                </NavLink>
            })}

            {filteredProducts.length > ITEMS_PER_PAGE && (
                <div className="paginate">
                    <ReactPaginate
                        previousLabel={<BsArrowLeftCircleFill />}
                        nextLabel={<BsFillArrowRightCircleFill />}
                        pageCount={Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)}
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

export default AllSchoolsProducts