<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Enums\AdminInertiaViews;
use Inertia\Inertia;

class AdminClientController extends Controller
{
    public function showClients()
    {
        return Inertia::render(AdminInertiaViews::ADMIN_CLIENTS_LIST->value);
    }

    public function viewClientDetails()
    {
        return Inertia::render(AdminInertiaViews::ADMIN_CLIENT_DETAILS->value);
    }
}
