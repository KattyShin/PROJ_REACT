import { IoSearch } from "react-icons/io5";
import { BiExport } from "react-icons/bi";
import React, { useState } from "react";

import AddProductModal from "./Modal/AddProductModal";
import SuccessfullySavedModal from "./Modal/SuccessfullySavedModal";



function AddProduct() {
  const [isAddProdModalVisible, setIsModalVisible] = useState(false);
  const [isModalSaveVisible, setIsConfirmationVisible] = useState(false);

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);
  const showModalSaveChanges = () => setIsConfirmationVisible(true);
  const closeConfirmationModal = () => setIsConfirmationVisible(false);

  const handleConfirm = () => {
    // Proceed with the desired action after confirmation, e.g., reset or navigate
    console.log("Product saved successfully");
    closeConfirmationModal(); // Close the confirmation modal
    closeModal(); // Close the AddProductModal or reset to initial state
  };

  return (
    <div class="main">
      <div className="topbar-con">
        <h2>Add Product</h2>
        <label htmlFor="">Sunday, 02 November 2024 at 9:46 AM</label>
      </div>

      <div class="details">
        <div class="flex flex-col ">
          <div class="flex justify-between mt-2 mb-3 items-center ">
            {/* Search Bar */}
            <div class="search w-[250px]">
              <label>
                <IoSearch className="text-gray-400 mr-2" />
                <input type="text" placeholder="Search" />
              </label>
            </div>
            {/* Export Button */}
            <button class="button" onClick={openModal}>
              Add Product <BiExport />
            </button>

           
          </div>

          {/* Table Section */}
          <div className="con-table daily-table p-2 rounded-lg bg-border-color w-full overflow-hidden h-full">
            <div className="table-con bg-card-bg border border-border-color">
              {/* --Table Ari */}
            </div>
          </div>
        </div>
      </div>


 
      {/* Show the AddProductModal if isModalVisible is true */}
      {isAddProdModalVisible && (
        <AddProductModal closeModal={closeModal} showModalSaveChanges={showModalSaveChanges} />
      )}
      
      {/* Show the ConfirmationModal if isConfirmationVisible is true */}
      {isModalSaveVisible && <SuccessfullySavedModal onConfirm={handleConfirm} />}



    </div>
  );
}

export default AddProduct;
