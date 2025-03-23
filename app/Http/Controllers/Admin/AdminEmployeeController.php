<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminEmployeeController extends Controller
{
    public function viewEmployeeList(){

        return Inertia::render('AdminPage/EmployeeList');

    }

    public function showAddEmployeeForm(){

        return Inertia::render('AdminPage/AddNewEmployee');

    }
}
