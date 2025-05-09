<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Enums\UserInertiaViews;
use App\Models\Agency;
use App\Models\AgencyUser;
use App\Models\User;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class UserAuthController extends Controller
{

    public function showSignUp($slug)
    {
        return Inertia::render(UserInertiaViews::USER_SIGN_UP->value, [
            'slug' => $slug
        ]);
    }

    public function showTextCode()
    {
        return Inertia::render(UserInertiaViews::USER_TEXT_CODE->value);
    }

    public function showEnterCode()
    {
        return Inertia::render(UserInertiaViews::USER_ENTER_CODE->value);
    }

    public function showLogin($agency = null)
    {
        $agencyData = null;
        if ($agency) {
            $agencyData = Agency::where('domain', $agency)->firstOrFail();
        }
        return Inertia::render(UserInertiaViews::USER_LOGIN->value, [
            'agency' => $agencyData
        ]);
    }


    public function showUploadPhoto()
    {
        return Inertia::render(UserInertiaViews::USER_UPLOAD_PHOTO->value);
    }


    public function register(Request $request, $slug)
    {
        
        $agency = Agency::where('domain', $slug)->firstOrFail();
        $existingUser = User::where('email', $request->email)->first();
        if ($existingUser) {
            $alreadyLinked = AgencyUser::where('user_id', $existingUser->id)
                ->where('agency_id', $agency->id)
                ->exists();
            if ($alreadyLinked) {
                return redirect()->back()
                    ->withErrors(['email' => 'This email is already registered with agency.'])
                    ->withInput();
            }
        }

        $user = $existingUser ?? User::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone_number' => $request->phoneNo,
            'relation' => $request->relation,
            'age' => $request->age,
            'gender' => $request->gender,
            'address' => $request->address,
        ]);

        AgencyUser::create([
            'user_id' => $user->id,
            'agency_id' => $agency->id,
            'role' => 'client',
            'password' => Hash::make($request->password),
        ]);
        $request->session()->flush();
        return redirect()->route('user.login', ['agency' => $slug])
            ->with('message', 'Registration successful! Please log in.');
    }

    public function login(Request $request, $agencySlug = null)
    {
        $agency = Agency::where('domain', $agencySlug)->firstOrFail();
        $user = User::where('email', $request->username)->firstOrFail();
        // Fetch the agency via pivot
        Log::info('User login attempt', [
            $agency,
            $user
        ]);
        $agencyUser = AgencyUser::where('user_id', $user->id)
            ->where('agency_id', $agency->id)
            ->first();
            
        if (! $agencyUser) {
            return response()->json(['error' => 'User not assigned to any agency'], 404);
        }
        $agency = $agencyUser->agency;

        Log::info('User login attempt', [
            $agency
        ]);
        if (!Hash::check($request->password, $agencyUser->password)) {
            return response()->json(['error' => 'Invalid credentials'], 401);
        }
        Auth::login($user);
        session(['current_agency_id' => $agency->id]);
        return redirect()->route('user.dashboard');
    }

    public function flushSession(Request $request)
    {
        Auth::logout();
        $request->session()->flush();
        // return redirect()->back()->with('message', 'Session flushed!');
    }


}
