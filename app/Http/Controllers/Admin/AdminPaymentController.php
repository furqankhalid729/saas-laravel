<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Enums\AdminInertiaViews;
use Inertia\Inertia;

class AdminPaymentController extends Controller
{
    public function showPayments()
    {
        return Inertia::render(AdminInertiaViews::ADMIN_PAYMENTS->value);
    }
}
