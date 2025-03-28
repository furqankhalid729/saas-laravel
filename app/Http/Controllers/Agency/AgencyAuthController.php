<?php

namespace App\Http\Controllers\Agency;

use App\Http\Controllers\Controller;
use App\Enums\AgencyInertiaViews;
use App\Models\Agency;
use App\Models\User;
use GuzzleHttp\Psr7\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class AgencyAuthController extends Controller
{
    public function showSignUpForm()
    {
        return Inertia::render(AgencyInertiaViews::Agency_Sign_Up->value);
    }

    public function register()
    {
        $agency = Agency::create([
            'name' => 'Global Visa Experts',
            'slug' => 'global-visa',
            'user_id' => null,
            'settings' => [
                'theme' => 'default',
                'currency' => 'USD'
            ]
        ]);

        $user = User::create([
            'name' => 'Agency Admin',
            'email' => 'admin@globalvisa.com',
            'password' => Hash::make('agency123'),
            'role' => 'agency',
        ]);

        $agency->user_id = $user->id;
        $agency->save();

        return response()->json(['message' => 'Agency created successfully']);
    }



}