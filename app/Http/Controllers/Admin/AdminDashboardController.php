<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Enums\AdminInertiaViews;
use Inertia\Inertia;

class AdminDashboardController extends Controller
{
    public function showDashboard()
    {
        return Inertia::render(AdminInertiaViews::ADMIN_DASHBOARD->value);
    }
}
