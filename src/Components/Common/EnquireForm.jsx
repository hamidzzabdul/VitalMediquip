import Modal from "../UI/Modal"
import Form from "../Contact/Form"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import EnquireContext from "../../store/EnquireContext"
import { useContext } from "react"

const EnquireForm = ({ onEnquire }) => {
    const { selectedProduct } = useContext(EnquireContext)
    return (
        <>
            <Modal onClose={onEnquire}>
                <Form product={selectedProduct} />
            </Modal>
            <ToastContainer />
        </>
    )
}

export default EnquireForm