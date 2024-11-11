import React, { useState, useEffect } from "react";
import axios from "axios";

function AddProductModal({
  closeModal,
  showSuccessfullySaveModal,
  addProductToTable,
}) {

  const [prodName, setProdName] = useState("");
  const [prodPrice, setProdPrice] = useState("");
  const [prodCategory, setProdCategory] = useState("Coffee");
  const [error, setError] = useState({
    prodName: "",
    prodPrice: "",
    prodNameExists: false,
  });

  // ANIMATION PART
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true); // Trigger modal to fade in when component mounts
    return () => setIsVisible(false); // Ensure fade-out before unmount
  }, []);

 // SAVE PRODUCT
const handleSaveProduct = async () => {
  let valid = true;
  let errors = { prodName: "", prodPrice: "", prodNameExists: false };

  // Basic validation for name and price
  if (!prodName) {
    errors.prodName = "Please fill in the product name";
    valid = false;
  }

  if (!prodPrice) {
    errors.prodPrice = "Please fill in the product price";
    valid = false;
  }

  // Update error state here to trigger re-render
  setError(errors);

  if (valid) {
    // Proceed with saving product if validation passes
    try {
      const response = await axios.post(
        "http://localhost:5000/api/products",
        {
          prod_name: prodName,
          prod_price: prodPrice,
          prod_category: prodCategory,
        }
      );

      if (response.status === 201) {
        addProductToTable(response.data); // Add product to table
        setIsVisible(false);
        setTimeout(() => {
          closeModal();
          showSuccessfullySaveModal(); // Show success modal
        }, 300);
      }
    } catch (err) {
      console.error("Error adding product:", err);
      // Handle "Product name already exists" error
      if (err.response && err.response.data.message === "Product name already exists") {
        setError((prevErrors) => ({
          ...prevErrors,
          prodNameExists: true,
          prodName: "",
        }));
      }
    }
  }
};


  return (
    <div
      className={`w-full z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300`}
    >
      <div
        className={`bg-white p-6 rounded-lg shadow-lg w-[300px] text-center transform ${
          isVisible ? "translate-y-0" : "-translate-y-10"
        } transition-transform duration-300`}
      >
        <h3 className="text-lg font-semibold mb-4">Add Product Details</h3>

        {/* Product Name Input */}
        <div className="mb-4">
          <label className="block text-left font-medium mb-1">
            Product Name
          </label>
          <input
            type="text"
            className={`w-full border ${
              error.prodName || error.prodNameExists
                ? "border-red-500"
                : "border-gray-300"
            } rounded px-3 py-2`}
            placeholder="Enter product name"
            value={prodName}
            onChange={(e) => setProdName(e.target.value)}
          />
          {error.prodName && (
            <p className="text-red-500 text-sm">{error.prodName}</p>
          )}
          
          {error.prodNameExists && (
            <p className="text-red-500 text-sm">Product name already exists</p>
          )}
        </div>

        {/* Product Price Input */}
        <div className="mb-4">
          <label className="block text-left font-medium mb-1">Price</label>
          <input
            type="number"
            className={`w-full border ${
              error.prodPrice ? "border-red-500" : "border-gray-300"
            } rounded px-3 py-2`}
            placeholder="Enter price"
            value={prodPrice}
            onChange={(e) => setProdPrice(e.target.value)}
          />
          {error.prodPrice && (
            <p className="text-red-500 text-sm">{error.prodPrice}</p>
          )}
        </div>

        {/* Product Category Dropdown */}
        <div className="mb-4">
          <label className="block text-left font-medium mb-1">
            Product Category
          </label>
          <select
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={prodCategory}
            onChange={(e) => setProdCategory(e.target.value)}
          >
            <option value="Coffee">Coffee</option>
            <option value="Non-Coffee">Non-Coffee</option>
          </select>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex justify-around">
          <button
            className="btn-confirm bg-blue-500 text-white py-1 px-4 rounded"
            onClick={handleSaveProduct}
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

export default AddProductModal;
