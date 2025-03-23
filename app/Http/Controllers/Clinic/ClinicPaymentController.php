<?php

namespace App\Http\Controllers\Clinic;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClinicPaymentController extends Controller
{
    public function showPayments(){

        return Inertia::render('ClinicPage/Payments');

    }
}
