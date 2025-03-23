<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserInvoiceController extends Controller
{
    public function showInvoices(){

        return Inertia::render('UserPage/Invoices');

    }
}
