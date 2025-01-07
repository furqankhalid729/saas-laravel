<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia; 

Route::get('/', function () {
    return Inertia::render('Test');
});

Route::get('/test-1', function () {
    return Inertia::render('Test1');
});


// Admin side

// Admin Screens

Route::get('/admin/sign-up', function () {
    return Inertia::render('AdminPage/SignUp');
});

Route::get('/admin/choose-plan', function () {
    return Inertia::render('AdminPage/ChoosePlan');
});

// Admin Pages

Route::get('/admin/dashboard', function () {
    return Inertia::render('AdminPage/AdminDashboard');
});

Route::get('/admin/client-list', function () {
    return Inertia::render('AdminPage/ClientList');
});

Route::get('/admin/client-list/client-form', function () {
    return Inertia::render('AdminPage/Client/ClientForm');
});

Route::get('/admin/client-list/client-form/new-forms', function () {
    return Inertia::render('AdminPage/Forms/RequestNewForm');
});