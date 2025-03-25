<?php

namespace App\Http\Controllers\Clinic;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClinicFormController extends Controller
{
    public function showForms(){

        return Inertia::render('ClinicPage/Forms');

    }

    public function addNewFormField(){

        return Inertia::render('ClinicPage/FormsTabs/AddNewField');

    }
}
