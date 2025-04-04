<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Enums\UserInertiaViews;
use Inertia\Inertia;

class UserInvoiceController extends Controller
{
    public function showInvoices()
    {
        return Inertia::render(UserInertiaViews::USER_INVOICES->value);
    }
}
