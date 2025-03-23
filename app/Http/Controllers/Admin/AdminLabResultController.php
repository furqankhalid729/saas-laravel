<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminLabResultController extends Controller
{
    public function viewLabResults(){

        return Inertia::render('AdminPage/LabsResult');

    }
}
