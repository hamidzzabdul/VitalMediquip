import { Suspense, } from "react"
import { Await, defer, json, useRouteLoaderData } from "react-router-dom"
import Products from "../Components/Products/Products"
import EnquireProvider from "../store/EnquireContextProvider"

const ProductsPage = () => {
    // const { data } = useLoaderData()
    const { data } = useRouteLoaderData("root")

    return (
        <EnquireProvider>
            <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
                <Await resolve={data}>
                    {
                        (loadedData) => <Products categories={loadedData.categories} products={loadedData.products} subCategories={loadedData.subCategories} />
                    }
                </Await>
            </Suspense >
        </EnquireProvider>
    )
}



export default ProductsPage

export const loadedData = async () => {
    const products = await fetch("http://127.0.0.1:3000/api/v1/products")
    const categories = await fetch("http://127.0.0.1:3000/api/v1/products/category")
    const subCategories = await fetch("http://127.0.0.1:3000/api/v1/products/subCategory")
    if (!products.ok, !categories.ok) {
        throw json({ message: "Could not fetch documents.." })
    } else {
        const productResponse = await products.json()
        const categoryResponse = await categories.json()
        const subCategoryResponse = await subCategories.json()
        return { products: productResponse, categories: categoryResponse, subCategories: subCategoryResponse }
    }

}

export const loader = async () => {
    return defer({
        data: loadedData(),
    });
}