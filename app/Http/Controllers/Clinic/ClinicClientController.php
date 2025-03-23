<?php

namespace App\Http\Controllers\Clinic;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClinicClientController extends Controller
{
    public function showClients(){

        return Inertia::render('ClinicPage/Clients/Clients');
    }

    public function viewClientDetails(){

        return Inertia::render('ClinicPage/Clients/ClientsView');

    }
}
