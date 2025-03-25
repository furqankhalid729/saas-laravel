<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminFormController extends Controller
{
    public function viewForms(){

        return Inertia::render('AdminPage/Forms/Forms');

    }

    public function showAddFormField(){

        return Inertia::render('AdminPage/Forms/AddNewField');

    }

    public function viewPendingForms(){

        return Inertia::render('AdminPage/PendingForm');

    }
}
