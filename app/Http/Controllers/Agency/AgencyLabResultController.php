<?php

namespace App\Http\Controllers\Agency;

use App\Http\Controllers\Controller;
use App\Enums\AgencyInertiaViews;
use Inertia\Inertia;

class AgencyLabResultController extends Controller
{
    public function viewLabResults()
    {
        return Inertia::render(AgencyInertiaViews::Agency_Lab_Results->value);
    }
}
