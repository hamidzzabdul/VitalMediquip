import { createBrowserRouter, RouterProvider } from "react-router-dom"

import RootLayout from "./pages/RootLayout"
import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
import ContactPage from "./pages/ContactPage"
import AboutPage from "./pages/AboutPage"
import Faq from "./Components/Faq/Faq"
import AllSubcategories from "./Components/Products/AllSubcategories"
import { loader as productLoader } from "./pages/ProductsPage"
import { loadedData as LoadedProducts } from "./pages/ProductsPage"
import ProductDetails from "./Components/Products/SingleProducts/ProductDetails"
import AllSubCategoryProducts from "./Components/Products/AllSubCategoryProducts"
import AllProducts from "./Components/Products/AllProducts"
import AllHospitalProducts from "./Components/Products/AllHospitalProducts"
import AdminPage from "./pages/Admin/AdminPage"
import AddProducts from "./Components/Admin panel/features/AddProducts"
import { action as AddProductAction } from "./Components/Admin panel/features/AddProducts"
import { action as AddCategoryAction } from "./Components/Admin panel/features/AddCategories"
import { action as AddSubCategoryAction } from "./Components/Admin panel/features/AddSubCategories"
import AddCategories from "./Components/Admin panel/features/AddCategories"
import AddSubCategories from "./Components/Admin panel/features/AddSubCategories"
import AllCategoryProducts from "./Components/Products/AllCategoryProucts"
import NoSubDetails from "./Components/Products/SingleProducts/NoSubDetails"
import AllSchoolsProducts from "./Components/Products/AllSchoolsProducts"
import Services from "./Components/Products/Services"
import EditProducts from "./Components/Admin panel/features/EditProducts"
import EditProductPage from "./pages/Admin/EditProductPage"

import { action as ProductUpdate } from "./Components/Admin panel/features/SingleProductEdit"
const router = createBrowserRouter([
  {
    path: "/admin",
    element: <AdminPage />,
    id: "product-loader",
    loader: LoadedProducts,
    children: [
      {
        index: true,
        element: <AddProducts />,
        loader: LoadedProducts,
        action: AddProductAction
      },
      {
        path: "/admin/add-categories",
        element: <AddCategories />,
        action: AddCategoryAction
      },
      {
        path: "/admin/add-sub-categories",
        loader: LoadedProducts,
        element: <AddSubCategories />,
        action: AddSubCategoryAction
      },
      {
        path: "/admin/edit",
        loader: LoadedProducts,
        element: <EditProducts />,
      },
      {
        path: "/admin/edit/:id",
        element: <EditProductPage />,
        action: ProductUpdate
      }
    ]
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/allProducts",
        element: <ProductsPage />,
        id: "root",
        loader: productLoader,
        children: [
          {
            index: true,
            element: <AllProducts />,
            loader: LoadedProducts,
          },
          {
            path: "allproducts/services-&-maitenance",
            element: <Services />
          },
          {
            path: "/allProducts/:category",
            element: <AllSubcategories />,
            loader: LoadedProducts,
          },
          {
            path: "/allProducts/:category/all",
            element: <AllCategoryProducts />,
            loader: LoadedProducts,
          },
          {
            path: "/allProducts/:category/all/:name",
            element: <NoSubDetails />,
            loader: LoadedProducts
          },
          {
            path: "/allProducts/:category/:subCategory",
            element: <AllSubCategoryProducts />,
            loader: LoadedProducts
          },
          {
            path: "/allProducts/Hospitality",
            element: <AllHospitalProducts />,
            loader: LoadedProducts,
          },
          {
            path: "/allProducts/schools&universities",
            element: <AllSchoolsProducts />,
            loader: LoadedProducts,
          },
          {
            path: "/allProducts/:category/:subCategory/:name",
            element: <ProductDetails />,
            loader: LoadedProducts
          },
        ]
      },
      {
        path: "/contact-us",
        element: <ContactPage />
      },
      {
        path: "/about",
        element: <AboutPage />
      },
      {
        path: "/Faqs",
        element: <Faq />
      },
    ]
  }
])
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App


