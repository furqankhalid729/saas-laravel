<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Enums\UserInertiaViews;
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
}
