<?php

namespace App\Http\Controllers\Agency;

use App\Http\Controllers\Controller;
use App\Enums\AgencyInertiaViews;
use Inertia\Inertia;

class AgencySettingController extends Controller
{
    public function viewSettings()
    {
        return Inertia::render(AgencyInertiaViews::Agency_Settings_Page->value);
    }
}
