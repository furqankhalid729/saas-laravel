<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Enums\UserInertiaViews;
use App\Models\Agency;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
class UserAuthController extends Controller
{
    public function showSignUp()
    {
        return Inertia::render(UserInertiaViews::USER_SIGN_UP->value);
    }


    
    public function showTextCode()
    {
        return Inertia::render(UserInertiaViews::USER_TEXT_CODE->value);
    }

    public function showEnterCode()
    {
        return Inertia::render(UserInertiaViews::USER_ENTER_CODE->value);
    }

    public function showLogin()
    {
        return Inertia::render(UserInertiaViews::USER_LOGIN->value);
    }

    public function showUploadPhoto()
    {
        return Inertia::render(UserInertiaViews::USER_UPLOAD_PHOTO->value);
    }



    public function register(Request $request)
    {

        // $name = $request->name;
        // $email = $request->email;
        // $phoneNo = $request->phoneNo;
        // $relation = $request->relation;
        // $age = $request->age;
        // $gender = $request->gender;
        // $address = $request->address;
        // $terms = $request->terms;
        // dd($request->all());
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make('password'),
            'role' => 'user',
        ]);

        // $agency = Agency::find($data['agency_id']);
        // $clientId = strtoupper(substr($agency->name, 0, 3)) . '-' . mt_rand(1000, 9999);

        // $user->agencies()->attach($data['agency_id'], [
        //     'client_id' => $clientId,
        //     'status' => $data['invite_code'] ? 'active' : 'pending'
        // ]);

        return response()->json(['message' => 'User created successfully']);
    }
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'username' => ['required', 'email'],
            'password' => ['required'],
        ]);
        $credentials['email'] = $credentials['username'];
        unset($credentials['username']);
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            if (Auth::user()->role === 'user') {
                return redirect()->route('user_dashboard');
            } elseif(Auth::user()->role === 'agency') {
                return redirect()->route('admin_dashboard');
            }
            elseif(Auth::user()->role === 'admin'){
                return redirect()->route('clinic_dashboard');
            }
        }

        return back()->withErrors([
            'username' => 'The provided credentials do not match our records.',
        ])->onlyInput('username');
    }
}


