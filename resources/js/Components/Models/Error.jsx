import React from 'react';

const ErrorModal = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
        <h2 className="text-xl font-semibold text-red-600 mb-4">Error</h2>
        <p className="text-gray-700 mb-6">{message}</p>
        <div className="flex justify-end">
          <button
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
