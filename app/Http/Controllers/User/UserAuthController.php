<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserAuthController extends Controller
{
    public function showSignUp(){

        return Inertia::render('UserPage/UserScreen/SignUpScreen');

    }

    public function showTextCode(){

        return Inertia::render('UserPage/UserScreen/TextCodeScreen');

    }

    public function showEnterCode(){

        return Inertia::render('UserPage/UserScreen/EnterCodeScreen');

    }

    public function showLogin(){

        return Inertia::render('UserPage/UserScreen/LoginScreen');
    }

    public function showUploadPhoto(){

        return Inertia::render('UserPage/UserScreen/UploadPhotoScreen');

    }
}
