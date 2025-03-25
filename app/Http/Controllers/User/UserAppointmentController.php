<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Enums\UserInertiaViews;
use Inertia\Inertia;

class UserAppointmentController extends Controller
{
    public function showAppointments()
    {
        return Inertia::render(UserInertiaViews::APPOINTMENT->value);
    }

    public function bookNewAppointment()
    {
        return Inertia::render(UserInertiaViews::BOOK_NEW_APPOINTMENT->value);
    }
}
