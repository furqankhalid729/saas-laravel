import React from 'react';

const DeleteModal = ({ message = "Are you sure you want to delete this?", onClose, onDelete }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
        <h2 className="text-xl font-semibold text-red-600 mb-4">Confirm Deletion</h2>
        <p className="text-gray-700 mb-6">{message}</p>
        <div className="flex justify-end space-x-3">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
