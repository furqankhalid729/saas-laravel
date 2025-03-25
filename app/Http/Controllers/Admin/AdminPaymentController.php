<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminPaymentController extends Controller
{
    
public function viewPayments(){

    return Inertia::render('AdminPage/Payments');
}


public function showPlanSelection(){

    return Inertia::render('AdminPage/ChoosePlan');

}

}
