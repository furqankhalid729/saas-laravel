<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Enums\AdminInertiaViews;
use Inertia\Inertia;

class AdminFormController extends Controller
{
    public function showForms()
    {
        return Inertia::render(AdminInertiaViews::ADMIN_FORMS->value);
    }

    public function addNewFormField()
    {
        return Inertia::render(AdminInertiaViews::ADMIN_ADD_FORM_FIELD->value);
    }
}
