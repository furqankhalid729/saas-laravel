<?php

namespace App\Http\Controllers\Agency;

use App\Http\Controllers\Controller;
use App\Enums\AgencyInertiaViews;
use App\Models\Agency;
use App\Models\Appointment;
use Inertia\Inertia;

class AgencyDashboardController extends Controller
{
    public function viewDashboard()
    {
        $activeAgencyId = session('active_agency_id');
        if (!$activeAgencyId) {
            return redirect()->route('agency.login.show');
        }
        $agencyData = Agency::where('id', $activeAgencyId)->with('appointments.user')->first();
        
        return Inertia::render(AgencyInertiaViews::Agency_Dashboard->value,[
            'agencyData' => $agencyData,  
        ]);
    }
}