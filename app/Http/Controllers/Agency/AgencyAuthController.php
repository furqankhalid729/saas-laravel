<?php

namespace App\Http\Controllers\Agency;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Enums\AgencyInertiaViews;
use App\Models\Agency;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Support\Str;

class AgencyAuthController extends Controller
{
    public function showSignUpForm()
    {
        return Inertia::render(AgencyInertiaViews::Agency_Sign_Up->value);
    }

    public function register(Request $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->companyemail,
            'password' => Hash::make($request->password),
            'role' => 'agency',
        ]);

        return response()->json(['success' => true]);

    }
    
  


}