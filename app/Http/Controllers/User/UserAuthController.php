<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Enums\UserInertiaViews;
use App\Models\Agency;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

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



    public function register()
    {
        $data = [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'password' => 'password123',
            'agency_id' => 1,
            'invite_code' => '123456'
        ];

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'role' => 'user',
        ]);

        $agency = Agency::find($data['agency_id']);
        $clientId = strtoupper(substr($agency->name, 0, 3)) . '-' . mt_rand(1000, 9999);

        $user->agencies()->attach($data['agency_id'], [
            'client_id' => $clientId,
            'status' => $data['invite_code'] ? 'active' : 'pending'
        ]);

        return response()->json(['message' => 'User created successfully']);
    }

}
