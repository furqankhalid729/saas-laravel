<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserMemberController extends Controller
{
    public function showFamilyMembers(){

        return Inertia::render('UserPage/OtherMembers');

    }
    public function addFamilyMember(){

        return Inertia::render('UserPage/AddMembers');

    }
}
