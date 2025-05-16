<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Enums\UserInertiaViews;
use Inertia\Inertia;
use App\Models\Appointment;

class UserAppointmentController extends Controller
{
    public function index()
    {
        $agency_id = session('current_agency_id');
        $appointments = Appointment::where('agency_id', $agency_id)
            ->where('user_id', auth()->user()->id)
            ->orderBy('appointment_date', 'desc')
            ->with(['agency'])
            ->get();
        return Inertia::render(UserInertiaViews::APPOINTMENT->value,[
            'appointments' => $appointments,
        ]);
    }

    public function bookNewAppointment()
    {
        return Inertia::render(UserInertiaViews::BOOK_NEW_APPOINTMENT->value);
    }
}
