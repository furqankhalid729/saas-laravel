<?php

namespace App\Http\Controllers\Agency;

use App\Http\Controllers\Controller;
use App\Enums\AgencyInertiaViews;
use Inertia\Inertia;

class AgencyFormController extends Controller
{
    public function viewForms()
    {
        return Inertia::render(AgencyInertiaViews::Agency_Forms_List->value);
    }

    public function showAddFormField()
    {
        return Inertia::render(AgencyInertiaViews::Agency_Add_Form_Field->value);
    }

    public function viewPendingForms()
    {
        return Inertia::render(AgencyInertiaViews::Agency_Pending_Forms->value);
    }
}