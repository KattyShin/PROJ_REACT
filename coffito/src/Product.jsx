import React, { useEffect, useState } from "react";
import axios from "axios";
import AddProductModal from "./Modal/AddProductModal";
import DateTime from "./DateTime";
import { IoSearch } from "react-icons/io5";
import { RiAddCircleLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import Successfully from "./Modal/Successfully";
import ConfirmModal from "./Modal/ConfirmModal";
import UpdateProductModal from "./Modal/UpdateProdModal";

function Product() {
  const [products, setProducts] = useState([]);
  const [productToDelete, setProductToDelete] = useState(null);

  // DELETE MODAL
  const [isConfirmModal, setConfirmModalVisible] = useState(false);
  const showConfirmModal = (product) => {
    setProductToDelete(product); // Set the product to delete
    setConfirmModalVisible(true); // Show the confirmation modal
  };

  const closeModalConfirmModal = () => setConfirmModalVisible(false);

  // UPDATE MODALS
  const [isUpdateProd, setIsModalVisible] = useState(false);
  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  // SUCCESFULLY MODAL
  const [isSuccessfullydModal, setSaveModal] = useState(false);
  const showSuccessfullySaveModal = () => setSaveModal(true);
  const closeSuccessfullySaveModal = () => setSaveModal(false);
  const handleConfirm = () => {
    console.log("Product deleted successfully");
    closeSuccessfullySaveModal(); // Close the success modal
  };

  // ADD PROD MODAL
  const [isAddProdModalVisible, setIsAddProdModalVisible] = useState(false);
  const openAddProdModal = () => setIsAddProdModalVisible(true);
  const closeAddProdModal = () => setIsAddProdModalVisible(false);

  // Function to DELETE a product
  const deleteProduct = async () => {
    try {
      // Perform the API call to delete the product
      await axios.delete(
        `http://localhost:5000/api/products/${productToDelete._id}`
      );
      // Remove the deleted product from the state
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== productToDelete._id)
      );
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  // DISPLAY TABLE DATA
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      console.log(response.data); // This should log the products array
      setProducts(Array.isArray(response.data) ? response.data : []);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  return (
    <div className="main">
      
      <div className="topbar-con">
        <h2>Product</h2>
        <DateTime />
      </div>

      <div className="details">
        <div className="flex flex-col">
          <div className="flex justify-between mt-5 mb-3 items-center">
            {/* Search Bar */}
            <div className="search w-[250px]">
              <label>
                <IoSearch className="text-gray-400 mr-2" />
                <input type="text" placeholder="Search" />
              </label>
            </div>
            {/* Add Product Button */}
            <button className="button" onClick={openAddProdModal}>
              Add Product <RiAddCircleLine className="button-icon" />
            </button>
          </div>

          {/* Table Section */}
          <div className="con-table daily-table p-1 rounded-lg bg-border-color w-full overflow-hidden h-full">
            <div className="table-wrapper-prod table-con bg-card-bg border border-border-color">
              <table>
                <thead>
                  <tr>
                    <th className="hidden">Product ID</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(products) ? (
                    products.map((product) => (
                      <tr key={product._id}>
                        <td className="hidden">{product._id}</td>
                        <td>{product.prod_name}</td>
                        <td>{product.prod_price}</td>
                        <td>{product.prod_category}</td>
                        <td>
                          <div className="action-btn">
                            <button onClick={() => showConfirmModal(product)}>
                              <MdDelete className="del" />
                            </button>
                            <button onClick={openModal}>
                              <MdModeEdit className="update" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5">No products available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* SHOW DELETE MODAL */}
      {isConfirmModal && (
        <ConfirmModal
          closeModalConfirmModal={closeModalConfirmModal}
          showSuccessfullySaveModal={showSuccessfullySaveModal} // Show success modal after deletion
          deleteProduct={deleteProduct} // Pass deleteProduct function to ConfirmModal
        />
      )}
      {/*SHOW UPDATE MODAL*/}
      {isUpdateProd && (
        <UpdateProductModal
          closeModal={closeModal}
          showSuccessfullySaveModal={showSuccessfullySaveModal}
        />
      )}
      {/* ADD PROD MODALl */}
      {isAddProdModalVisible && (
        <AddProductModal
          closeModal={closeAddProdModal}
          showSuccessfullySaveModal={showSuccessfullySaveModal} // Trigger success message
          addProductToTable={(newProduct) =>
            setProducts([...products, newProduct])
          } // Add product to list
        />
      )}
      {/* SUCCDULLY MODAL */}
      {isSuccessfullydModal && <Successfully onConfirm={handleConfirm} />}
    </div>
  );
}

export default Product;
