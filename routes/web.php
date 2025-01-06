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

Route::get('/admin/dashboard', function () {
    return Inertia::render('AdminPage/AdminDashboard');
});