<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminClientController extends Controller
{
    
public function viewClientList(){

    return Inertia::render('AdminPage/ClientList');

}


public function showClientForm(){

    return Inertia::render('AdminPage/Client/ClientForm');

}

public function viewNewClientForms(){

    return Inertia::render('AdminPage/Forms/RequestNewForm');

}

}
