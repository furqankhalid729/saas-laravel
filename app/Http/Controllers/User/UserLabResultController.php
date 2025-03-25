<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Enums\UserInertiaViews;
use Inertia\Inertia;

class UserLabResultController extends Controller
{
    public function showLabResults()
    {
        return Inertia::render(UserInertiaViews::USER_LABS_RESULT->value);
    }
}
