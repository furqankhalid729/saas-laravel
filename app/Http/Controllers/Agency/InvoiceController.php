<?php

namespace App\Http\Controllers\Agency;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Invoice;
use App\Models\User;
use Inertia\Inertia;
use App\Enums\AgencyInertiaViews;
use Illuminate\Support\Facades\Log;

class InvoiceController extends Controller
{
    public function index()
    {
        $invoices = Invoice::latest()->get();
        return Inertia::render(AgencyInertiaViews::ADMIN_INVOICES->value, [
            'invoices' => $invoices
        ]);
    }

    public function create()
    {
        $customers = User::all();

        return Inertia::render(AgencyInertiaViews::ADMIN_INVOICES_CREATE->value, [
            'customers' => $customers
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'invoice_number' => 'required|unique:invoices',
            'issued_date' => 'required|date',
            'due_date' => 'required|date',
            'status' => 'required',
            'total' => 'required|numeric',
            'user_id' => 'required|exists:users,id',
            'items' => 'required|array',
        ]);

        $invoice = Invoice::create($request->only([
            'invoice_number',
            'account_number',
            'issued_date',
            'due_date',
            'status',
            'total',
            'user_id'
        ]));

        foreach ($request->items as $item) {
            $invoice->items()->create([
                'description' => $item['description'],
                'price' => $item['price'],
                'quantity' => $item['quantity'],
                'total' => $item['price'] * $item['quantity']
            ]);
        }

        return redirect()->route('agency.invoices.index')->with('success', 'Invoice created.');
    }

    public function edit(Invoice $invoice)
    {
        $invoice->load('items');
        $customers = User::all();

        return Inertia::render(AgencyInertiaViews::ADMIN_INVOICES_EDIT->value, [
            'invoice' => $invoice,
            'customers' => $customers
        ]);
    }

    public function update(Request $request, Invoice $invoice)
    {
        $request->validate([
            'invoice_number' => 'required|unique:invoices,invoice_number,' . $invoice->id,
            'issued_date' => 'required|date',
            'due_date' => 'required|date',
            'status' => 'required',
            'total' => 'required|numeric',
            'user_id' => 'required|exists:users,id',
            'items' => 'required|array',
        ]);

        Log::info('Updating invoice: ' . $request->total);

        $invoice->update($request->only([
            'invoice_number',
            'account_number',
            'issued_date',
            'due_date',
            'status',
            'total',
            'user_id'
        ]));

        // Delete existing items and recreate
        $invoice->items()->delete();

        foreach ($request->items as $item) {
            $invoice->items()->create([
                'description' => $item['description'],
                'price' => $item['price'],
                'quantity' => $item['quantity'],
                'total' => $item['price'] * $item['quantity']
            ]);
        }

        return redirect()->route('agency.invoices.index')->with('success', 'Invoice updated.');
    }

    public function destroy(Invoice $invoice)
    {
        $invoice->delete();

        return redirect()->route('invoices.index')->with('success', 'Invoice deleted.');
    }
}
