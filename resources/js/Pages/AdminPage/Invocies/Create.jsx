import React from 'react';
import AgencyLayout from '../../../Layout/AgencyLayout';
import InvoiceForm from '../../../Components/AdminComponents/InvoiceForm';

function Create({ customers, user_id }) {
  console.log(user_id)
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Create Invoice</h1>
      <InvoiceForm 
        customers={customers} 
        user_id={user_id}
      />
    </div>
  );
}

Create.layout = (page) => <AgencyLayout children={page} title="Create Invoices" />;
export default Create;
