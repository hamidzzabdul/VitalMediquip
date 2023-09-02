import "./AllsubCategories.scss"
import Sub1 from "../../assets/categories/subcategories/equipments.jpg"
import { NavLink, useLoaderData, useParams } from "react-router-dom";

const AllSubcategories = () => {
    const { subCategories, categories, products } = useLoaderData()
    const allSubCategories = subCategories.data.data
    const allCategories = categories.data.data
    const allProducts = products.data.data
    const { category } = useParams()

    const selectedCategory = allCategories.find(cat => cat.slug === category)

    if (!selectedCategory) {
        return console.log("category not found")
    }
    // filter subcategories based on the selected category
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
                                <img src={Sub1} alt="microscope" />
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

