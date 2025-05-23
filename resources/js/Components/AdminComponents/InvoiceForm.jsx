import React, {useMemo} from 'react';
import { useForm } from '@inertiajs/react';

export default function InvoiceForm({ customers, invoice = null, user_id }) {
    const { data, setData, post, put, processing, errors } = useForm({
        invoice_number: invoice?.invoice_number || '',
        account_number: invoice?.account_number || '',
        issued_date: invoice?.issued_date || '',
        due_date: invoice?.due_date || '',
        status: invoice?.status || 'unpaid',
        total: invoice?.total || 0,
        user_id: invoice?.user_id || user_id || '',
        items: invoice?.items || [{ description: '', price: 0, quantity: 1 }],
    });

    const calTotal = () => {
        const sum = data.items.reduce((sum, item) => {
            const price = parseFloat(item.price) || 0;
            const quantity = parseFloat(item.quantity) || 0;
            return sum + price * quantity;
        }, 0);
        setData('total', sum);
    };

    const handleItemChange = (index, field, value) => {
        const updatedItems = [...data.items];
        updatedItems[index][field] = field === 'description' ? value : parseFloat(value);
        setData('items', updatedItems);
        calTotal();
    };

    const addItem = () => {
        setData('items', [...data.items, { description: '', price: 0, quantity: 1 }]);
        calTotal();
    };

    const removeItem = (index) => {
        const updatedItems = [...data.items];
        updatedItems.splice(index, 1);
        setData('items', updatedItems);
        calTotal();
    };

    const submit = (e) => {
        e.preventDefault();
        invoice ? put(route('agency.invoices.update', invoice.id)) : post(route('agency.invoices.store'));
    };

    return (
        <form onSubmit={submit} className="space-y-6 bg-white p-6 rounded shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block mb-1 text-sm font-medium">Invoice Number</label>
                    <input
                        className="w-full border-gray-300 rounded shadow-sm"
                        value={data.invoice_number}
                        onChange={e => setData('invoice_number', e.target.value)}
                        placeholder="INV-1001"
                    />
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium">Account Number</label>
                    <input
                        className="w-full border-gray-300 rounded shadow-sm"
                        value={data.account_number}
                        onChange={e => setData('account_number', e.target.value)}
                        placeholder="ACC-5678"
                    />
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium">Issued Date</label>
                    <input
                        type="date"
                        className="w-full border-gray-300 rounded shadow-sm"
                        value={data.issued_date}
                        onChange={e => setData('issued_date', e.target.value)}
                    />
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium">Due Date</label>
                    <input
                        type="date"
                        className="w-full border-gray-300 rounded shadow-sm"
                        value={data.due_date}
                        onChange={e => setData('due_date', e.target.value)}
                    />
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium">Status</label>
                    <select
                        className="w-full border-gray-300 rounded shadow-sm"
                        value={data.status}
                        onChange={e => setData('status', e.target.value)}
                    >
                        <option value="unpaid">Unpaid</option>
                        <option value="paid">Paid</option>
                    </select>
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium">Customer</label>
                    <select
                        className="w-full border-gray-300 rounded shadow-sm"
                        value={data.user_id}
                        onChange={e => setData('user_id', e.target.value)}
                    >
                        <option value="">Select Customer</option>
                        {customers.map(c => (
                            <option key={c.id} value={c.id}>{c.name}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Invoice Items</h3>
                {data.items.map((item, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 bg-gray-100 p-4 rounded relative">
                        <input
                            className="border-gray-300 rounded shadow-sm"
                            value={item.description}
                            onChange={e => handleItemChange(index, 'description', e.target.value)}
                            placeholder="Description"
                        />
                        <input
                            type="number"
                            className="border-gray-300 rounded shadow-sm"
                            value={item.price}
                            onChange={e => handleItemChange(index, 'price', e.target.value)}
                            placeholder="Price"
                        />
                        <input
                            type="number"
                            className="border-gray-300 rounded shadow-sm"
                            value={item.quantity}
                            onChange={e => handleItemChange(index, 'quantity', e.target.value)}
                            placeholder="Quantity"
                        />
                        <button
                            type="button"
                            onClick={() => removeItem(index)}
                            className="text-red-600 hover:underline text-sm self-center"
                        >
                            Remove
                        </button>
                    </div>
                ))}

                <button
                    type="button"
                    onClick={addItem}
                    className="mt-2 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm"
                >
                    + Add Item
                </button>
            </div>

            <div>
                <button
                    type="submit"
                    disabled={processing}
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                >
                    {invoice ? 'Update' : 'Create'} Invoice
                </button>
            </div>
        </form>
    );
}
