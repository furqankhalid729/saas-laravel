<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Enums\UserInertiaViews;
use Inertia\Inertia;
use App\Models\Appointment;
use App\Models\RequestedForm;

class UserDashboardController extends Controller
{
    public function showDashboard()
    {
        $agency_id = session('current_agency_id');
        $appointments = Appointment::where('agency_id', $agency_id)
            ->where('user_id', auth()->user()->id)
            ->orderBy('appointment_date', 'desc')
            ->with(['agency'])
            ->get();
        $requestedForms = RequestedForm::where('agency_id', $agency_id)
            ->where('user_id', auth()->user()->id)
            ->orderBy('requested_at', 'desc')
            ->with(['agencyForm'])
            ->get();
        return Inertia::render(UserInertiaViews::USER_DASHBOARD->value,[
            'appointments'=>$appointments,
            'requestedForms' => $requestedForms
        ]);
    }
}
