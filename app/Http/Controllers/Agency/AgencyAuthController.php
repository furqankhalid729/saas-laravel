<?php

namespace App\Http\Controllers\Agency;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Enums\AgencyInertiaViews;
use App\Models\Agency;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
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
        // dd($request->all());
        // $request->validate([
        //     'name' => 'required|string',
        //     'companyemail' => 'required|email|unique:users,email',
        //     'password' => 'required|min:6',
        //     'agency_name' => 'required|string',
        // ]);
    
        $user = User::create([
            'name' => $request->name,
            'email' => $request->companyemail,
            'password' => Hash::make($request->password),
            'role' => 'agency',
        ]);
    
        $agency = Agency::create([
            'name' => $request->companyname,
            'slug' => Str::slug($request->companyname) . '-' . Str::random(5),
            'user_id' => $user->id,
        ]);

        Auth::login($user);
        session(['guard' => 'web']);
        session(['agency_id' => $agency->id]);
    
        return redirect()->route('admin_dashboard');

    }
    public function login(Request $request)
    {
        $user = User::where('email', 'ammar@gmail.com')
                    ->where('role', 'agency') 
                    ->first();
    
        // Static plain password (not hashed)
        $staticPassword = 'password'; // Yeh woh plain password hai jo user banate waqt diya tha
    
        if ($user && Hash::check($staticPassword, $user->password)) {
            Auth::login($user);
            
            $agency = Agency::where('user_id', $user->id)->first();
    
            session(['guard' => 'web']);
            session(['agency_id' => $agency->id]);
    
            return redirect()->route('admin_dashboard');
        } else {
            return redirect()->back()->withErrors(['companyemail' => 'Invalid email or password.']);
        }
    }
}