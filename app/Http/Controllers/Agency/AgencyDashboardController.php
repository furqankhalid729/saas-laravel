<?php

namespace App\Http\Controllers\Agency;

use App\Http\Controllers\Controller;
use App\Enums\AgencyInertiaViews;
use Inertia\Inertia;

class AgencyDashboardController extends Controller
{
    public function viewDashboard()
    {
        return Inertia::render(AgencyInertiaViews::Agency_Dashboard->value);
    }
}