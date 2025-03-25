<?php

namespace App\Http\Controllers\Agency;

use App\Enums\AgencyInertiaViews;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class AgencyAppointmentController extends Controller
{
    public function viewAppointments()
    {
        return Inertia::render(AgencyInertiaViews::AgencyAppointmentsPage->value);
    }
}
