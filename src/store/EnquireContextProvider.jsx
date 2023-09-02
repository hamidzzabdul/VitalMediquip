import { useState } from "react";
import EnquireContext from "./EnquireContext";

export const EnquireProvider = ({ children }) => {
    const [showEnquire, setShowEnquire] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const toggleModal = () => {
        setShowEnquire(prevstate => !prevstate)
        console.log("modal closed")
    }
    const selectProduct = (product) => {
        setSelectedProduct(product),
            toggleModal()
    }

    const contextValue = {
        showEnquire,
        toggleModal,
        selectedProduct,
        selectProduct
    }

    return (
        <EnquireContext.Provider value={contextValue}>
            {children}
        </EnquireContext.Provider>
    );
};

export default EnquireProvider