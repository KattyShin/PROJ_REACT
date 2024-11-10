import { IoSearch } from "react-icons/io5";
import { RiAddCircleLine } from "react-icons/ri";
import React, { useState } from "react";

import ConfirmModal from "./Modal/ConfirmModal";
import SuccessfullyDeletedModal from "./Modal/SuccessfullyDeleted";
import UpdateProductModal from "./Modal/UpdateProdModal";
import AddProductModal from "./Modal/AddProductModal";

function AddProduct() {
  
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
  const [isSuccessfullyDeletedModal, setSaveModal] = useState(false);
  const showSuccessfullySaveModal = () => setSaveModal(true);
  const closeSuccessfullySaveModal = () => setSaveModal(false);

  const handleConfirm = () => {
    console.log("Product saved successfully");
    closeSuccessfullySaveModal(); // Close the success modal
    closeModalConfirmModal(); // Close the confirm modal
  };

  return (
    <div className="main">
      <div className="topbar-con">
        <h2>Add Product</h2>
        <label>Sunday, 02 November 2024 at 9:46 AM</label>
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
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1001</td>
                    <td>Matcha</td>
                    <td>40.00</td>
                    <td>Non-Coffee</td>
                    <td>
                      <div className="flex-col">
                        <button
                          className="bg-red-400 mb-5"
                          onClick={showConfirmModal}
                        >
                          Del
                        </button>
                        <button className="bg-blue-50" onClick={openModal}>
                          Update
                        </button>
                      </div>
                    </td>
                  </tr>
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
      {isSuccessfullyDeletedModal && (
        <SuccessfullyDeletedModal onConfirm={handleConfirm} />
      )}
    </div>
  );
}

export default AddProduct;
