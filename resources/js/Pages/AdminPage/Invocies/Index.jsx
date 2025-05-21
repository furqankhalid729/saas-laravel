import React from 'react';
import axios from 'axios';
import { Link } from '@inertiajs/react';
import AgencyLayout from '../../../Layout/AgencyLayout';

function Index({ invoices }) {
    const handleDelete = async (id) => {
        if (confirm('Are you sure?')) {
            try {
                await axios.delete(route('agency.invoices.destroy', id));
            } catch (error) {
                console.error('Failed to delete invoice:', error);
                alert('Error deleting invoice');
            }
        }
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Invoices</h1>
                <Link
                    href={route('agency.invoices.create')}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    Create New Invoice
                </Link>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100 text-left text-sm uppercase text-gray-600">
                            <th className="px-4 py-3 border">Invoice #</th>
                            <th className="px-4 py-3 border">Customer</th>
                            <th className="px-4 py-3 border">Status</th>
                            <th className="px-4 py-3 border">Total</th>
                            <th className="px-4 py-3 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoices.map((invoice) => (
                            <tr key={invoice.id} className="border-b">
                                <td className="px-4 py-3 border">{invoice.invoice_number}</td>
                                <td className="px-4 py-3 border">{invoice.customer?.name}</td>
                                <td className="px-4 py-3 border capitalize">{invoice.status}</td>
                                <td className="px-4 py-3 border">${invoice.total.toFixed(2)}</td>
                                <td className="px-4 py-3 border space-x-2">
                                    <Link
                                        href={route('agency.invoices.edit', invoice.id)}
                                        className="text-blue-600 hover:underline"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(invoice.id)}
                                        className="text-red-600 hover:underline"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {invoices.length === 0 && (
                            <tr>
                                <td colSpan="5" className="px-4 py-3 text-center text-gray-500">
                                    No invoices found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

Index.layout = (page) => <AgencyLayout children={page} title="Invoices" />;
export default Index;