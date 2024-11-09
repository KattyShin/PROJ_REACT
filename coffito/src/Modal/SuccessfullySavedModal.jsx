import React, { useEffect, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";

function SuccessfullySavedModal({ onConfirm }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fade in and slide down when component mounts
    setIsVisible(true);

    // Set a timer to automatically close after 3 seconds
    const hideModal = setTimeout(() => {
      setIsVisible(false); // Start fade-out and slide up
      setTimeout(onConfirm, 300); // Call onConfirm after fade-out completes
    }, 800); // Stay visible for 3 seconds

    // Cleanup the timeout on unmount
    return () => clearTimeout(hideModal);
  }, [onConfirm]);

  return (
    <div
      className={`modal-main-con ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300`}
    >
      <div
        className={`modal-con ${
          isVisible ? "translate-y-0" : "-translate-y-10"
        } transition-transform duration-300`}
      >
        <h3 className="text-lg font-semibold mb-4">Confirm Changes</h3>
        <p>Successfully saved</p>
        <div className="SucSaveIcon">
          <FaCircleCheck />
        </div>
      </div>
    </div>
  );
}

export default SuccessfullySavedModal;
