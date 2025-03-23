<?php

namespace App\Http\Controllers\Clinic;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClinicAuthController extends Controller
{
    public function showLogin(){

        return Inertia::render('ClinicPage/ClinicScreens/LoginScreen');

    }

    public function showTextCode(){

        return Inertia::render('ClinicPage/ClinicScreens/TextCodeScreen');

    }

    public function showEnterCode(){

        return Inertia::render('ClinicPage/ClinicScreens/EnterCodeScreen');

    }
}
