<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Enums\UserInertiaViews;
use Inertia\Inertia;

class UserFormController extends Controller
{
    public function showIntakeForm()
    {
        return Inertia::render(UserInertiaViews::USER_INTAKE_FORM->value);
    }

    public function showMedicalInfoForm()
    {
        return Inertia::render(UserInertiaViews::USER_MEDICAL_INFO_FORM->value);
    }

    public function showRequestedForms()
    {
        return Inertia::render(UserInertiaViews::USER_REQUESTED_FORMS->value);
    }

    public function editRequestedForm()
    {
        return Inertia::render(UserInertiaViews::USER_EDIT_REQUESTED_FORM->value);
    }
}
