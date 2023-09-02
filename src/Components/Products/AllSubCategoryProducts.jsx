import { useState } from "react"
import { NavLink, useLoaderData, useParams } from "react-router-dom"


import ReactPaginate from 'react-paginate';
import { BsArrowLeftCircleFill } from "react-icons/bs"
import { BsFillArrowRightCircleFill } from "react-icons/bs"

import "./AllsubCategories.scss"

const ITEMS_PER_PAGE = 8

const AllSubCategoryProducts = () => {
    const { subCategories, categories, products } = useLoaderData()

    const allSubCategories = subCategories.data.data
    const allCategories = categories.data.data
    const allProducts = products.data.data

    const { subCategory, category } = useParams()

    const selectedSubCategory = allSubCategories.find(subCat => subCat.slug === subCategory)
    const selectedCategory = allCategories.find(cat => cat.slug === category)

    const [currentPage, setCurrentPage] = useState(0); // Use array destructuring

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const offset = currentPage * ITEMS_PER_PAGE;

    const productsForSubcategory = allProducts.filter(product => {
        return product.subCategory === selectedSubCategory._id;
    });
    const paginatedProducts = productsForSubcategory.slice(offset, offset + ITEMS_PER_PAGE);

    const handleOnscroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (

        <div className="product-section">
            {
                paginatedProducts.map(obj => {
                    const imageUrl = `http://localhost:3000/${obj.productImage}`;
                    console.log(obj)
                    return <NavLink key={obj._id} to={`/allProducts/${selectedCategory.slug}/${selectedSubCategory.slug}/${obj.slug}`}>
                        <div className='products-container'>
                            <img src={imageUrl} alt="microscope" />
                            <div className="product-details">
                                <p className="category">{selectedCategory.name}</p>
                                <p className="sub-category">{obj.name}</p>
                                <button className="view-product">View Product</button>
                            </div>
                        </div>
                    </NavLink>
                }
                )
            }

            {productsForSubcategory.length > ITEMS_PER_PAGE && (
                <div className="paginate">
                    <ReactPaginate
                        previousLabel={<BsArrowLeftCircleFill />}
                        nextLabel={<BsFillArrowRightCircleFill />}
                        pageCount={Math.ceil(productsForSubcategory.length / ITEMS_PER_PAGE)}
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

export default AllSubCategoryProducts