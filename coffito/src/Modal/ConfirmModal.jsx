
import React, { useEffect, useState } from "react";


function ConfirmModal({closeModalConfirmModal, showSuccessfullySaveModal}) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true); // Trigger modal to fade in when component mounts
        return () => setIsVisible(false); // Ensure fade-out before unmount
      }, []);
      
    
      const ModalSaveChanges = () => {
        setIsVisible(false); // Start fade-out effect
        setTimeout(() => {
            closeModalConfirmModal(); // Close the AddProductModal after fade-out
          showSuccessfullySaveModal(); // Show the confirmation modal
        }, 300); // Match delay to transition duration
      };

      
  return (
    <div className={`w-full z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
    <div className={` bg-white p-6 rounded-lg shadow-lg w-[300px] text-center transform ${isVisible ? 'translate-y-0' : '-translate-y-10'} transition-transform duration-300`}>
         <h3 className="text-lg font-semibold mb-4">Confirm Deletion</h3>
        <p>Are you sure you want to delete this product?</p>
        <div className="mt-4 flex justify-around">
          <button
            className="btn-confirm bg-red-500 text-white py-1 px-4 rounded"
            onClick={ModalSaveChanges}
          >
            Yes
          </button>
          <button
            className="btn-cancel bg-gray-300 py-1 px-4 rounded"
            onClick={closeModalConfirmModal}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}




export default ConfirmModal;
