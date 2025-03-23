<?php

namespace App\Http\Controllers\Clinic;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClinicDashboardController extends Controller
{
    public function showDashboard(){

        return Inertia::render('ClinicPage/ClinicDashboard');

    }
}
