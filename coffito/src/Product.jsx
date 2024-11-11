import { IoSearch } from "react-icons/io5";
import { RiAddCircleLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";

import React, { useState } from "react";

import ConfirmModal from "./Modal/ConfirmModal";
import Successfully from "./Modal/Successfully";
import UpdateProductModal from "./Modal/UpdateProdModal";
import AddProductModal from "./Modal/AddProductModal";
import DateTime from "./DateTime";

function Product() {
  // DELETE
  const [isConfirmModal, setConfirmModalVisible] = useState(false);
  const showConfirmModal = () => setConfirmModalVisible(true);
  const closeModalConfirmModal = () => setConfirmModalVisible(false);

  // UPDATE
  const [isUpdateProd, setIsModalVisible] = useState(false);
  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  // ADD
  const [isAddProdModalVisible, setIsAddProdModalVisible] = useState(false);
  const openAddProdModal = () => setIsAddProdModalVisible(true);
  const closeAddProdModal = () => setIsAddProdModalVisible(false);

  // SUCCESFULLY
  const [isSuccessfullydModal, setSaveModal] = useState(false);
  const showSuccessfullySaveModal = () => setSaveModal(true);
  const closeSuccessfullySaveModal = () => setSaveModal(false);

  const handleConfirm = () => {
    console.log("Product saved successfully");
    closeSuccessfullySaveModal(); // Close the success modal
    closeModalConfirmModal(); // Close the confirm modal
  };


  // State for search term
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data for products
  const products = [
    { id: "1001", name: "Matcha", price: "40.00", category: "Non-Coffee" },
    { id: "1002", name: "Espresso", price: "50.00", category: "Coffee" },
    { id: "1003", name: "Latte", price: "45.00", category: "Coffee" },
    { id: "1004", name: "Cappuccino", price: "60.00", category: "Coffee" },
  ];

   // Filtered products based on search term
   const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.id.includes(searchTerm) ||
      product.price.includes(searchTerm)

  );

  return (
    <div className="main">
      <div className="topbar-con">
        <h2>Product</h2>
       <DateTime/>
      </div>

      <div className="details">
        <div className="flex flex-col">
          <div className="flex justify-between mt-5 mb-3 items-center">
            {/* Search Bar */}
            <div className="search w-[250px]">
              <label>
                <IoSearch className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm state
                />
              </label>
            </div>
            {/* Add Product Button */}
            <button className="button" onClick={openAddProdModal}>
              Products <RiAddCircleLine className="button-icon" />
            </button>
          </div>

          {/* Table Section */}
          <div className="con-table daily-table p-1 rounded-lg bg-border-color w-full overflow-hidden h-full">
            <div className="table-wrapper-prod table-con bg-card-bg border border-border-color">
              <table>
                <thead>
                  <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Map over filtered products */}
                  {filteredProducts.map((product) => (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>{product.category}</td>
                      <td>
                        <div className="action-btn">
                          <button onClick={showConfirmModal}>
                            <MdDelete className="del" />
                          </button>
                          <button onClick={openModal}>
                            <MdModeEdit className="update" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* DELETE */}
      {/* Confirm Deletion Modal */}
      {isConfirmModal && (
        <ConfirmModal
          closeModalConfirmModal={closeModalConfirmModal}
          showSuccessfullySaveModal={showSuccessfullySaveModal}
        />
      )}

      {/* UPDATE */}
      {/* Show the AddProductModal if isModalVisible is true */}
      {isUpdateProd && (
        <UpdateProductModal
          closeModal={closeModal}
          showSuccessfullySaveModal={showSuccessfullySaveModal}
        />
      )}

      {/* ADD */}
      {/* Show the AddProductModal if isModalVisible is true */}
      {isAddProdModalVisible && (
        <AddProductModal
          closeModal={closeAddProdModal}
          showSuccessfullySaveModal={showSuccessfullySaveModal}
        />
      )}

      {/* Successfully */}
      {isSuccessfullydModal && (
        <Successfully onConfirm={handleConfirm} />
      )}
    </div>
  );
}

export default Product;
