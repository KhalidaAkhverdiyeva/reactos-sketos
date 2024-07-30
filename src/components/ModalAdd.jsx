import React from 'react';
import JobForm from './JobFormAdd';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div>
      <div
        onClick={onClose}
        className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-auto"
      >
        <div
          className="modal-content bg-[#2A3042] p-6 rounded-lg w-[500px] relative"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-white text-2xl font-semibold mb-4">Add Job</h2>
          <JobForm onClose={onClose} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
