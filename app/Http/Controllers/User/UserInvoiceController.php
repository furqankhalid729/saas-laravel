<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Enums\UserInertiaViews;
use Inertia\Inertia;
use App\Models\Invoice;
use App\Models\InvoiceItem;


class UserInvoiceController extends Controller
{
    public function index()
    {
        $user_id = auth()->user()->id;
        $agency_id = session('current_agency_id');
        $invoices = Invoice::where('user_id', $user_id)
            ->where('agency_id', $agency_id)
            ->orderBy('created_at', 'desc')
            ->with(['items'])
            ->get();
        return Inertia::render(UserInertiaViews::USER_INVOICES->value, [
            'invoices' => $invoices,
        ]);
    }

    public function show($id)
    {
        $user_id = auth()->user()->id;
        $agency_id = session('current_agency_id');
        $invoice = Invoice::where('user_id', $user_id)
            ->where('agency_id', $agency_id)
            ->where('id', $id)
            ->with(['items'])
            ->firstOrFail();

        return Inertia::render(UserInertiaViews::USER_INVOICE_DETAIL->value, [
            'invoice' => $invoice,
        ]);
    }
}
