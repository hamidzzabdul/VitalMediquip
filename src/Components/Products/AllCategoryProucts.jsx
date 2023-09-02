import { NavLink, useLoaderData, useParams } from "react-router-dom"
import Sub1 from "../../assets/categories/subcategories/equipments.jpg"
import "./AllsubCategories.scss"


const AllCategoryProucts = () => {

    const { subCategories, categories, products } = useLoaderData()
    const allCategories = categories.data.data
    const allSubCategories = subCategories.data.data
    const allProducts = products.data.data
    const { category } = useParams()

    const subCategoryMap = {}
    allSubCategories.forEach(subCategory => {
        subCategoryMap[subCategory._id] = subCategory.name
    })


    const selectedCategory = allCategories.find(cat => cat.slug === category)

    const productsForSubcategory = allProducts.filter(product => {
        return product.category === selectedCategory._id;
    });
    return (
        <div className="product-section">
            {productsForSubcategory.map(obj => {
                return (
                    <NavLink key={obj._id} to={`/allProducts/${category}/all/${obj.name}`}>
                        <div className='products-container'>
                            <img src={Sub1} alt="microscope" />
                            <div className="product-details">
                                <p className="category">{selectedCategory.name}</p>
                                <p className="sub-category">{obj.name}</p>
                                <button className="view-product">View Product</button>
                            </div>
                        </div>
                    </NavLink>
                )
            })}
        </div>
    )
}

export default AllCategoryProucts