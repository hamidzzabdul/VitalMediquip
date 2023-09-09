import "./AllsubCategories.scss"
import Sub1 from "../../assets/categories/subcategories/equipments.jpg"
import { NavLink, useParams, useRouteLoaderData } from "react-router-dom";

const AllSubcategories = () => {
    const { data } = useRouteLoaderData("root")
    const { subCategories, categories, products } = data
    const allSubCategories = subCategories
    const allCategories = categories
    const allProducts = products
    const { category } = useParams()

    const selectedCategory = allCategories.find(cat => cat.slug === category)

    if (!selectedCategory) {
        return
    }
    const filteredSubCategories = allSubCategories.filter(subcategory => subcategory.category === selectedCategory._id)

    return (
        <div className="product-section">
            {filteredSubCategories.length > 0 ? (
                filteredSubCategories.map(obj => {
                    const productsForSubcategory = allProducts.filter(product => {
                        return product.subCategory === obj._id
                    });
                    return (
                        <NavLink key={obj._id} to={`/allProducts/${selectedCategory.slug}/${obj.slug}`}>
                            <div className='products-container'>
                                <div className="product-image">
                                    <img src={Sub1} alt="microscope" />
                                </div>
                                <div className="product-details">
                                    <p className="category">{selectedCategory.name}</p>
                                    <p className="sub-category">{obj.name}<br /> <span>({productsForSubcategory.length})</span></p>
                                </div>
                            </div>
                        </NavLink>
                    );
                })
            ) : (
                <div className="product-container">
                    <h3 className="fall-back-header">Sorry for the inconvenience😥 </h3>
                    <p className="fall-back">No Products in this subcategory</p>
                </div>
            )}
        </div>

    );
}

export default AllSubcategories;

