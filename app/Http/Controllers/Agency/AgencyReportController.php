<?php

namespace App\Http\Controllers\Agency;

use App\Http\Controllers\Controller;
use App\Enums\AgencyInertiaViews;
use Inertia\Inertia;

class AgencyReportController extends Controller
{
    public function viewReports()
    {
        return Inertia::render(AgencyInertiaViews::Agency_Report_List->value);
    }
}

