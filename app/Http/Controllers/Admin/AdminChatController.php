<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminChatController extends Controller
{
    public function viewChat(){

        return Inertia::render('AdminPage/Client/Chat');

    }
}
