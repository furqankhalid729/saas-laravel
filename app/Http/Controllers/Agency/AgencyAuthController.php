<?php

namespace App\Http\Controllers\Agency;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Enums\AgencyInertiaViews;
use App\Models\User;
use App\Models\Agency;
use App\Models\AgencyUser;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;

class AgencyAuthController extends Controller
{
    public function showSignUpForm()
    {
        return Inertia::render(AgencyInertiaViews::Agency_Sign_Up->value);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'companyname' => 'required|string|max:255|unique:agencies,domain',
            'username' => 'required|string|max:255',
            'email' => 'required|email',
            'password' => 'required|string|min:8',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        // Step 1: Check if the email is already linked to any agency
        $existingUser = User::where('email', $request->email)->first();

        if ($existingUser) {
            $alreadyLinked = AgencyUser::where('user_id', $existingUser->id)->exists();

            if ($alreadyLinked) {
                return redirect()->back()
                    ->withErrors(['email' => 'This email is already registered under another agency.'])
                    ->withInput();
            }
        }

        // Step 2: Create agency
        $agency = Agency::create([
            'name' => $request->companyname,
            'domain' => Str::slug($request->companyname) . '-' . Str::random(5),
        ]);

        // Step 3: Create or use existing user
        $user = $existingUser ?? User::create([
            'name' => $request->name,
            'email' => $request->email,
            'agency_id' => $agency->id,
        ]);

        // Step 4: Create agency_user relationship
        AgencyUser::create([
            'user_id' => $user->id,
            'agency_id' => $agency->id,
            'role' => 'admin',
            'password' => Hash::make($request->password),
        ]);

        // Step 5: Log the user in (optional)
        auth()->login($user);
        return redirect()->route('agency.dashboard');
    }

    public function login(Request $request)
    {
        return Inertia::render(AgencyInertiaViews::Agency_Login->value);
    }

    public function authenticate(Request $request)
    {
        Log::info('User check done');
        $request->validate([
            'email' => 'required|email|exists:users,email', 
            'password' => 'required|string|min:8',         
        ]);

        // Find the user by email
        $user = User::where('email', $request->email)->first();
        
        if (! $user) {
            // This shouldn't happen due to the validation rule, but just in case
            return back()->withErrors(['email' => 'No user found with this email.']);
        }

        // Get agency_user record
        $agencyUser = AgencyUser::where('user_id', $user->id)->first();

        if (! $agencyUser || ! Hash::check($request->password, $agencyUser->password)) {
            return back()->withErrors(['password' => 'Incorrect password.']);
        }

        // Log the user in
        auth()->login($user);

        // Store agency context in session (you can use it later for multi-agency management)
        session(['active_agency_id' => $agencyUser->agency_id]);

        // Redirect based on role
        return redirect()->route(
            $agencyUser->role === 'admin' ? 'agency.dashboard' : 'user.dashboard'
        );
    }

}
