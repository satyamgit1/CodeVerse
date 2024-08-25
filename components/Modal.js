import React from "react";

const Modal = ({ show, onClose, onConfirm, title, message }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-sm w-full">
        <div className="px-6 py-4">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <p className="mt-2 text-sm text-gray-600">{message}</p>
        </div>
        <div className="px-6 py-4 bg-gray-100 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
