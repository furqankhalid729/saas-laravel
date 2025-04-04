<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Enums\UserInertiaViews;
use Inertia\Inertia;

class UserDashboardController extends Controller
{
    public function showDashboard()
    {
        return Inertia::render(UserInertiaViews::USER_DASHBOARD->value);
    }
}
