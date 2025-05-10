import React, { useState } from 'react';
import { Link, router } from '@inertiajs/react';
import { IoChevronBack } from 'react-icons/io5';
import { ReactFormBuilder } from 'react-form-builder2';
import 'react-form-builder2/dist/app.css';
import AgencyLayout from '../../../Layout/AgencyLayout';
import axios from 'axios';
import ErrorModal from '../../../Components/Models/Error';

const AddNewForms = () => {
  const [formName, setFormName] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [formData, setFormData] = useState([]);

  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSaveForm = (data) => {
    console.log(data.task_data);
    setFormData(data.task_data)
  }

  const handleSubmit = async () => {
    if (!formName) {
      alert("Form name is required");
      return;
    }

    const data = {
      form_name: formName,
      description: formDescription,
      form_data: JSON.stringify(formData),
    };

    try {
      const response = await axios.post(route('agency.forms.store'), data);
      if (response.status === 200) {
        router.visit(route('agency.forms.list'));
      } else {
        setErrorMessage(response.data.message || 'Failed to save form. please try again.');
        setErrorModalVisible(true);
      }
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again.');
      setErrorModalVisible(true);
    }
  };

  return (
    <div className="w-full">
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossOrigin="anonymous"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        rel="stylesheet"
      />
      {/* Save button */}
      <div className="flex justify-between items-center h-[70px] px-5 bg-white">
        <Link href={route('agency.forms.list')} className="flex items-center gap-2">
          <IoChevronBack />
        </Link>
        <button
          onClick={handleSubmit} // Trigger the submit function when clicked
          className="bg-black text-white px-4 py-1 rounded-full"
        >
          Save
        </button>
      </div>

      {/* Form Name Input */}
      <div className="bg-white p-4 shadow-lg rounded">
        <div className='mb-6'>
          <label htmlFor="form-name" className="block text-gray-700">Form Name</label>
          <input
            type="text"
            id="form-name"
            value={formName}
            onChange={(e) => setFormName(e.target.value)} // Handle name input change
            className="w-full p-2 mt-2 border border-gray-300 rounded"
            placeholder="Enter form name"
          />
        </div>
        <div className='mb-6'>
          <label htmlFor="form-description" className="block text-gray-700">Form Description</label>
          <textarea
            id="form-description"
            className="w-full p-2 mt-2 border border-gray-300 rounded"
            placeholder="Enter form description"
            value={formDescription}
            onChange={(e) => setFormDescription(e.target.value)}
          />
        </div>

      </div>

      {/* Form Builder Component */}
      <div className="bg-white p-4 shadow-lg rounded mt-4">
        <ReactFormBuilder
          data={formData}
          onPost={handleSaveForm}
          editMode={false}
        />
      </div>
      {errorModalVisible && (
        <ErrorModal
          message={errorMessage}
          onClose={() => setErrorModalVisible(false)}
        />
      )}
    </div>
  );
};

AddNewForms.layout = (page) => <AgencyLayout children={page} title="Client Form" />;
export default AddNewForms;
