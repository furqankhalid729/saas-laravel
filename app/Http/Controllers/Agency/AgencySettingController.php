<?php

namespace App\Http\Controllers\Agency;

use App\Http\Controllers\Controller;
use App\Enums\AgencyInertiaViews;
use Inertia\Inertia;

use App\Models\Agency;

class AgencySettingController extends Controller
{
    public function viewSettings()
    {
        $agency_id = session('active_agency_id');
        $agency = Agency::where('id', $agency_id)->with('agencySettings')->first();
        if (!$agency) {
            return redirect()->route('agency.login.show');
        }
        return Inertia::render(AgencyInertiaViews::Agency_Settings_Page->value,[
            'agency' => $agency
        ]);
    }
}
