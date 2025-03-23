<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminAuthController extends Controller
{
    //

    public function showSignUpForm(){

        return Inertia::render('AdminPage/SignUp');

    }
}
