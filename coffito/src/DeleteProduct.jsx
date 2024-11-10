import { IoSearch } from "react-icons/io5";
import { RiDeleteBack2Line } from "react-icons/ri";
import React, { useState } from "react";
import ConfirmModal from "./Modal/ConfirmModal";
import SuccessfullyDeletedModal from "./Modal/SuccessfullyDeleted";

function DeleteProduct() {
  const [isConfirmModal, setConfirmModalVisible] = useState(false);
  const [isSuccessfullyDeletedModal, setSaveModal] = useState(false);
  // Function to open the modal
  const showConfirmmodal = () => {
    setConfirmModalVisible(true);
  };

  // Function to close the modal
  const closeModalConfirmModal = () => {
    setConfirmModalVisible(false);
  };

  const showSuccessfullySaveModal = () => {
    setSaveModal(true);
  };

  // Function to close the modal
  const closeSuccessfullySaveModal = () => {
    setSaveModal(false);
  };

  const handleConfirm = () => {
    // Proceed with the desired action after confirmation, e.g., reset or navigate
    console.log("Product saved successfully");
    closeSuccessfullySaveModal(); // Close the confirmation modal
    closeModal(); // Close the AddProductModal or reset to initial state
  };

  return (
    <div class="main">
      <div className="topbar-con">
        <h2>Delete Product</h2>
        <label htmlFor="">Sunday, 02 November 2024 at 9:46 AM</label>
      </div>

      <div class="details">
        <div class="flex flex-col ">
          <div class="flex justify-between mt-5 mb-3 items-center ">
            {/* Search Bar */}
            <div class="search w-[250px]">
              <label>
                <IoSearch className="text-gray-400 mr-2" />
                <input type="text" placeholder="Search" />
              </label>
            </div>

            {/* Export Button */}
            <button class="button" onClick={showConfirmmodal}>
              Delete Product{" "}
            </button>
          </div>

          {/* Table Section */}
          <div className="con-table daily-table p-1 rounded-lg bg-border-color w-full overflow-hidden h-full">
            <div className="table-wrapper-prod table-con bg-card-bg border border-border-color">
              {/* --Table Ari */}

              <table>
                <thead>
                  <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Category</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>1001</td>
                    <td>Matcha</td>
                    <td>40.00</td>
                    <td>Non-Coffee</td>
                  </tr>

                  <tr>
                    <td>1001</td>
                    <td>Matcha</td>
                    <td>40.00</td>
                    <td>Non-Coffee</td>
                  </tr>
                  <tr>
                    <td>1001</td>
                    <td>Matcha</td>
                    <td>40.00</td>
                    <td>Non-Coffee</td>
                  </tr>
                  <tr>
                    <td>1001</td>
                    <td>Matcha</td>
                    <td>40.00</td>
                    <td>Non-Coffee</td>
                  </tr>
                  <tr>
                    <td>1001</td>
                    <td>Matcha</td>
                    <td>40.00</td>
                    <td>Non-Coffee</td>
                  </tr>

                  <tr>
                    <td>1001</td>
                    <td>Matcha</td>
                    <td>40.00</td>
                    <td>Non-Coffee</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {isConfirmModal && (
        <ConfirmModal
          closeModalConfirmModal={closeModalConfirmModal}
          showSuccessfullySaveModal={showSuccessfullySaveModal}
        />
      )}

      {isSuccessfullyDeletedModal && (
        <SuccessfullyDeletedModal onConfirm={handleConfirm} />
      )}
    </div>
  );
}

export default DeleteProduct;
