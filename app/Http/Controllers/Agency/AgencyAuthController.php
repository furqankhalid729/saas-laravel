<?php

namespace App\Http\Controllers\Agency;

use App\Http\Controllers\Controller;
use App\Enums\AgencyInertiaViews;
use Inertia\Inertia;

class AgencyAuthController extends Controller
{
    public function showSignUpForm()
    {
        return Inertia::render(AgencyInertiaViews::Agency_Sign_Up->value);
    }
}