import React from 'react';
import JobForm from './JobFormAdd'



const Modal = ({ isOpen, onClose }) => {


  if (!isOpen) return null;


  //   const handleFileUpload = (event,setImage)=>{
    
  //     const file = event.target.files[0];
  //     console.log('selected file', file)
      
  // if (file) {
  //   const reader = new FileReader();

  //   reader.onloadend = () => {
  //     console.log('File loaded successfully'); // Log success
  //     console.log('File data URL:', reader.result); // Log the result

  //     // Ensure setImage is a function
  //     if (typeof setImage === 'function') {
  //       setImage(reader.result); // Set the image URL in the state
  //     } else {
  //       console.error('setImage is not a function');
  //     }
  //   };

  //   reader.readAsDataURL(file); // Read the file as a Data URL
  // } else {
  //   console.warn('No file selected');
  // }

  //   }
  
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



