/* eslint-disable react/prop-types */
import "./RelatedProducts.scss"


import Sub1 from "../../../assets/categories/subcategories/equipments.jpg"
import { NavLink, useParams } from "react-router-dom";

const RelatedProduct = ({ products, categories, id }) => {
    const { category } = useParams()
    const filteredProduct = products.filter(product => product._id !== id)
    const relatedProduct = filteredProduct.slice(0, 4)
    const handleOnscroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <>
            <div></div>
            <div className="related-container">
                <div className="col"></div>
                <div className="col">
                    <h2>Related Products</h2>
                    <div className="related-wrapper">
                        {

                            relatedProduct.map(obj => {
                                const imageUrl = `http://localhost:3000/${obj.productImage}`;
                                return <NavLink key={obj._id} to={`/allProducts/${category}/all/${obj.name}`} onClick={handleOnscroll}>
                                    <div className='related-product'>
                                        <div className="product-image">
                                            <img src={imageUrl} alt="product image" />
                                        </div>
                                        <div className="related-details">
                                            <p className="category">{category}</p>
                                            <p className="sub-category">{obj.name}</p>
                                            <button className="view-product">View product</button>
                                        </div>
                                    </div>
                                </NavLink>
                            }
                            )
                        }
                    </div>
                </div>
            </div >
        </>
    )
}

export default RelatedProduct
