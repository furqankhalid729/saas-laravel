<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserLabResultController extends Controller
{
    public function showLabResults(){

        return Inertia::render('UserPage/LabsResult');

    }
}
