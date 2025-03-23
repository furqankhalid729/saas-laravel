<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminAppointmentController extends Controller
{
    
public function viewAppointments(){
    
    return Inertia::render('AdminPage/Appointments');

}
    
}
