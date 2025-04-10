<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Enums\UserInertiaViews;
use App\Models\Agency;
use App\Models\AgencyUser;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class UserAuthController extends Controller
{

    // public function showSignUp()
    // {

    //     return Inertia::render(UserInertiaViews::USER_SIGN_UP->value);

    // }

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

    // public function showLogin()
    // {
    //     return Inertia::render(UserInertiaViews::USER_LOGIN->value);
    // }


    public function showLogin($agency = null)
    {
        $agencyData = null;

        if ($agency) {
            $agencyData = Agency::where('slug', $agency)->firstOrFail();
        }

        return Inertia::render(UserInertiaViews::USER_LOGIN->value, [
            'agency' => $agencyData
        ]);
    }


    public function showUploadPhoto()
    {
        return Inertia::render(UserInertiaViews::USER_UPLOAD_PHOTO->value);
    }




    // public function register(Request $request, $slug)
    // {
    //     $agency = Agency::where('slug', $slug)->firstOrFail();

    //     $alreadyLinked = AgencyUser::where('email', $request->email)
    //         ->where('agency_id', $agency->id)
    //         ->exists();

    //     if ($alreadyLinked) {
    //         return response()->json(['message' => 'User already onboarded with this agency'], 409);
    //     }

    //     $clientId = strtoupper(substr($agency->name, 0, 3)) . '-' . mt_rand(1000, 9999);

    //     AgencyUser::create([
    //         'agency_id' => $agency->id,
    //         'email' => $request->email,
    //         'password' => Hash::make($request->password),
    //         'client_id' => $clientId,
    //         'phoneNo' => $request->phoneNo ?? null,
    //         'relation' => $request->relation ?? null,
    //         'age' => $request->age ?? null,
    //         'gender' => $request->gender ?? null,
    //         'address' => $request->address ?? null,
    //     ]);

    //     return response()->json(['message' => 'User onboarded to agency successfully']);
    // }


    public function register(Request $request, $slug)
    {
        $agency = Agency::where('slug', $slug)->firstOrFail();

        $alreadyLinked = AgencyUser::where('email', $request->email)
            ->where('agency_id', $agency->id)
            ->exists();

        if ($alreadyLinked) {
            return response()->json(['message' => 'User already onboarded with this agency'], 409);
        }

        $clientId = strtoupper(substr($agency->name, 0, 3)) . '-' . mt_rand(1000, 9999);

        $agencyUser = AgencyUser::create([
            'agency_id' => $agency->id,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'client_id' => $clientId,
            'phoneNo' => $request->phoneNo ?? null,
            'relation' => $request->relation ?? null,
            'age' => $request->age ?? null,
            'gender' => $request->gender ?? null,
            'address' => $request->address ?? null,
        ]);
        Auth::guard('agency_user')->login($agencyUser);
        session(['agency_user_id' => $agencyUser->id]);
        session(['guard' => 'agency_user']);

        return redirect()->route('user_dashboard');
    }


    // public function login(Request $request, $agencySlug = null)
    // {
    //     // dd($request->all());
    //     if ($agencySlug) {
    //         $agency = Agency::where('slug', $agencySlug)->first();

    //         if (!$agency) {
    //             return redirect()->back()->withErrors(['agency' => 'Agency not found.']);
    //         }

    //         $agencyUser = AgencyUser::where('agency_id', $agency->id)
    //             ->where('email', $request->username)
    //             ->first();
    //     } 

    //     if ($agencyUser && Hash::check($request->password, $agencyUser->password)) {
    //         Auth::guard('agency_user')->login($agencyUser);
    //         session(['agency_user_id' => $agencyUser->id]);
    //         app('session')->put('guard', 'agency_user'); 
    //         return redirect()->route('user_dashboard');
    //     } else {
    //         return redirect()->back()->withErrors(['email' => 'Invalid email or password.']);
    //     }
    // }


    public function login(Request $request, $agencySlug = null)
    {
        if ($agencySlug) {
            $agency = Agency::where('slug', $agencySlug)->first();
            if (!$agency) {
                return redirect()->back()->withErrors(['agency' => 'Agency not found.']);
            }
    
            $agencyUser = AgencyUser::where('agency_id', $agency->id)
                ->where('email', $request->username)
                ->first();
        }
    
        if ($agencyUser && Hash::check($request->password, $agencyUser->password)) {
            Auth::guard('agency_user')->login($agencyUser);
            $request->session()->regenerate();
            $request->session()->put('agency_user_id', $agencyUser->getKey());
            $request->session()->put('guard', 'agency_user');
    
            // Debugging (optional)
            // dd($request->session()->all(), Auth::guard('agency_user')->user());
    
            return redirect()->route('user_dashboard');
        } else {
            return redirect()->back()->withErrors(['email' => 'Invalid email or password.']);
        }
    }

    public function dumpSession(Request $request)
{
    dd($request->session()->all());
}
public function flushSession(Request $request)
{
    $request->session()->flush();
    // return redirect()->back()->with('message', 'Session flushed!');
}
}
