import React, { useEffect, useState } from "react";

function UpdateProductModal({ closeModal, showModalSaveChanges }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Trigger modal to fade in when component mounts
    return () => setIsVisible(false); // Ensure fade-out before unmount
  }, []);
  

  const ModalSaveChanges = () => {
    setIsVisible(false); // Start fade-out effect
    setTimeout(() => {
      closeModal(); // Close the AddProductModal after fade-out
      showModalSaveChanges(); // Show the confirmation modal
    }, 300); // Match delay to transition duration
  };


  return (
    <div className={`w-full z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
      <div className={` bg-white p-6 rounded-lg shadow-lg w-[300px] text-center transform ${isVisible ? 'translate-y-0' : '-translate-y-10'} transition-transform duration-300`}>
        <h3 className="text-lg font-semibold mb-4">Update Product Details</h3>

        {/* Product Name Input */}
        <div className="mb-4">
          <label className="block text-left font-medium mb-1">Product Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter product name"
          />
        </div>

        {/* Price Input */}
        <div className="mb-4">
          <label className="block text-left font-medium mb-1">Price</label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter price"
          />
        </div>

        {/* Product Category Dropdown */}
        <div className="mb-4">
          <label className="block text-left font-medium mb-1">Product Category</label>
          <select className="w-full border border-gray-300 rounded px-3 py-2">
            <option value="">Select category</option>
            <option value="Coffee">Coffee</option>
            <option value="Non-Coffee">Furniture</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex justify-around">
          <button
            className="btn-confirm bg-blue-500 text-white py-1 px-4 rounded"
            onClick={ModalSaveChanges}
          >
            Save
          </button>
          <button
            className="btn-cancel bg-gray-300 py-1 px-4 rounded"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateProductModal;
