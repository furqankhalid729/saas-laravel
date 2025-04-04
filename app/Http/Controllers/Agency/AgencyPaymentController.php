<?php

namespace App\Http\Controllers\Agency;

use App\Http\Controllers\Controller;
use App\Enums\AgencyInertiaViews;
use Inertia\Inertia;

class AgencyPaymentController extends Controller
{
    public function viewPayments()
    {
        return Inertia::render(AgencyInertiaViews::Agency_Payment_List->value);
    }

    public function showPlanSelection()
    {
        return Inertia::render(AgencyInertiaViews::Agency_Plan_Selection->value);
    }
}
