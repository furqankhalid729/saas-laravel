<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserFormController extends Controller
{
    public function showIntakeForm(){

        return Inertia::render('UserPage/Forms/UserIntakeForm');

    }

    public function showMedicalInfoForm(){

        return Inertia::render('UserPage/Forms/MedicalInfoForm');

    }

    public function showRequestedForms(){

        return Inertia::render('UserPage/RequestedForm');

    }

    public function editRequestedForm(){

        return Inertia::render('UserPage/EditForm');

    }
}
