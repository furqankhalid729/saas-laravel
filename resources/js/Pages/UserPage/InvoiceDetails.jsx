import React from 'react';

export default function InvoicePage({ invoice }) {
    const issuedDate = new Date(invoice.issued_date).toLocaleDateString();
    const dueDate = new Date(invoice.due_date).toLocaleDateString();
    const overdueDays = Math.ceil((new Date() - new Date(invoice.due_date)) / (1000 * 60 * 60 * 24));

    return (
        <div className="bg-gray-50 min-h-screen p-6 font-sans text-gray-800">
            <div className="max-w-5xl mx-auto bg-white shadow rounded-lg p-8 flex flex-col md:flex-row gap-6">
                <div class="flex-1">
                    <h1 className="text-3xl font-bold mb-4">Invoices</h1>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-4 mb-6">
                        <div>
                            <h2 className="text-xl font-semibold">Invoice #{invoice.invoice_number}</h2>
                            <p className="text-sm text-gray-600">Issued date: {issuedDate}</p>
                        </div>
                        <span className="text-sm text-red-500 font-medium border border-red-300 rounded px-2 py-1 capitalize">{invoice.status}</span>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-1">Service Charges</h3>
                        <p className="text-sm text-gray-600">
                            <strong>Appointment Info:</strong> $30 per patient is all that is needed for an appointment deposit.<br />
                            <strong>Return Policy:</strong> There is no return for any services that the Atello provides.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <div>
                            <p><strong>Account number:</strong> {invoice.account_number}</p>
                            <p><strong>Reference number:</strong> #{invoice.invoice_number}</p>
                            <p className="text-red-500">
                                <strong>Pay by:</strong> {dueDate} {overdueDays > 0 && <span className="ml-2">⚠️ {overdueDays} days overdue</span>}
                            </p>
                        </div>
                        <div className="text-right">
                            <p><strong>Appointment Date:</strong></p>
                            <p>October 23, 2024</p>
                            <p>8:00 AM - 9:00 AM</p>
                            <p className="font-semibold text-lg mt-2">${invoice.total.toFixed(2)}</p>
                        </div>
                    </div>

                    <table className="w-full mb-6 text-left border-t border-b overflow-x-auto block sm:table">
                        <thead>
                            <tr className="border-b">
                                <th className="py-2 font-semibold">Item</th>
                                <th className="py-2 font-semibold">Price</th>
                                <th className="py-2 font-semibold">Total price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {invoice.items.map(item => (
                                <tr className="border-b" key={item.id}>
                                    <td className="py-2">{item.description}</td>
                                    <td className="py-2">${item.price.toFixed(2)}</td>
                                    <td className="py-2">${item.total.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr className="font-bold">
                                <td className="py-2">Total incl. VAT</td>
                                <td></td>
                                <td className="py-2">${invoice.total.toFixed(2)}</td>
                            </tr>
                        </tfoot>
                    </table>

                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 space-y-2 sm:space-y-0">
                        <button className="text-sm underline">Preview invoice pdf</button>
                        <button className="text-sm underline">Download invoice pdf</button>
                    </div>
                </div>

                <div className="flex flex-col gap-6 mb-6">
                    <div className="col-span-1 bg-gray-100 p-4 rounded">
                        <h4 className="text-md font-semibold mb-3">Payment Method</h4>
                        <div className="space-y-3">
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="payment" checked readOnly />
                                <span className="text-sm font-medium">VISA ••••8092</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="payment" disabled />
                                <span className="text-sm">Apple Pay</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="payment" disabled />
                                <span className="text-sm">PayPal</span>
                            </label>
                            <a href="#" className="text-xs text-blue-500 underline">Manage credit cards</a>
                        </div>
                    </div>

                    <div className="col-span-1 bg-gray-100 p-4 rounded">
                        <h4 className="text-md font-semibold mb-3">Summary</h4>
                        <div className="text-sm space-y-1">
                            <p>Payment: <span className="float-right">${invoice.total.toFixed(2)}</span></p>
                            <p>Payment method fee: <span className="float-right">$0.00</span></p>
                            <p className="font-bold text-lg mt-2">Total Charge: <span className="float-right text-red-500">${invoice.total.toFixed(2)}</span></p>
                        </div>
                        <button className="w-full mt-4 bg-black text-white py-2 rounded hover:bg-gray-800">Pay now</button>
                        <p className="text-xs text-gray-500 mt-2">Payment securely processed by PayPal</p>
                    </div>

                    <div className="col-span-1 bg-gray-100 p-4 rounded">
                        <h4 className="text-md font-semibold mb-3">Timeline</h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                            <li>● Invoice created <span className="block text-gray-400">{new Date(invoice.created_at).toLocaleString()}</span></li>
                            <li>● Invoice sent via email <span className="block text-gray-400">{new Date(invoice.created_at).toLocaleString()}</span></li>
                            <li>● Invoice sent via letter <span className="block text-gray-400">{new Date(invoice.created_at).toLocaleString()}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
