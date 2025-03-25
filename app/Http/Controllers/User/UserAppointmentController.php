<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserAppointmentController extends Controller
{
    public function showAppointments(){

        return Inertia::render('UserPage/Appointment');

    }

    public function bookNewAppointment(){

        return Inertia::render('UserPage/BookNew Appointment/NewAppointment');

    }
}
