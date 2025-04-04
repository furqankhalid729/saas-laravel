<?php

namespace App\Http\Controllers\Agency;

use App\Http\Controllers\Controller;
use App\Enums\AgencyInertiaViews;
use Inertia\Inertia;

class AgencyEmployeeController extends Controller
{
    public function viewEmployeeList()
    {
        return Inertia::render(AgencyInertiaViews::Agency_Employee_List->value);
    }

    public function showAddEmployeeForm()
    {
        return Inertia::render(AgencyInertiaViews::Agency_Add_Employee_Form->value);
    }
}