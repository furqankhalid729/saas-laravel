<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminDocumentController extends Controller
{
    public function viewDocuments(){

        return Inertia::render('AdminPage/Documents');

    }

    public function viewCollabDocuments(){

        return Inertia::render('AdminPage/CollabDocuments');

    }
}
