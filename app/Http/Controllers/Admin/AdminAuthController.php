<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Enums\AdminInertiaViews;
use Inertia\Inertia;

class AdminAuthController extends Controller
{
    public function showLogin()
    {
        return Inertia::render(AdminInertiaViews::ADMIN_LOGIN->value);
    }

    public function showTextCode()
    {
        return Inertia::render(AdminInertiaViews::ADMIN_TEXT_CODE->value);
    }

    public function showEnterCode()
    {
        return Inertia::render(AdminInertiaViews::ADMIN_ENTER_CODE->value);
    }
}
