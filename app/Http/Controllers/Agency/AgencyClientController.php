<?php

namespace App\Http\Controllers\Agency;

use App\Enums\AgencyInertiaViews;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AgencyClientController extends Controller
{
    
    public function viewClientList()
    {
        return Inertia::render(AgencyInertiaViews::AgencyClientListPage->value);
    }

    public function showClientForm()
    {
        return Inertia::render(AgencyInertiaViews::AgencyClientFormPage->value);
    }

    public function viewNewClientForms()
    {
        return Inertia::render(AgencyInertiaViews::AgencyClientNewFormsPage->value);
    }


    
}
