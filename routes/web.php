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

Route::get('/admin/appointments', function () {
    return Inertia::render('AdminPage/Appointments');
});

Route::get('/admin/chat', function () {
    return Inertia::render('AdminPage/Client/Chat');
});

Route::get('/admin/payments', function () {
    return Inertia::render('AdminPage/Payments');
});

Route::get('/admin/reports', function () {
    return Inertia::render('AdminPage/Reports');
});

Route::get('/admin/reports', function () {
    return Inertia::render('AdminPage/Reports');
});

Route::get('/admin/employee-list', function () {
    return Inertia::render('AdminPage/EmployeeList');
});

Route::get('/admin/employee-list/add-new-employee', function () {
    return Inertia::render('AdminPage/AddNewEmployee');
});

Route::get('/admin/documents', function () {
    return Inertia::render('AdminPage/Documents');
});

Route::get('/admin/documents/collab-documents', function () {
    return Inertia::render('AdminPage/CollabDocuments');
});

Route::get('/admin/pending-form', function () {
    return Inertia::render('AdminPage/PendingForm');
});

Route::get('/admin/forms', function () {
    return Inertia::render('AdminPage/Forms/Forms');
});

Route::get('/admin/forms/add-new-form-field', function () {
    return Inertia::render('AdminPage/Forms/AddNewField');
});

Route::get('/admin/settings', function () {
    return Inertia::render('AdminPage/Settings');
});

Route::get('/admin/labs-result', function () {
    return Inertia::render('AdminPage/LabsResult');
});



// User side

// User Screens


Route::get('/user/sign-up', function () {
    return Inertia::render('UserPage/UserScreen/SignUpScreen');
});

Route::get('/user/text-code', function () {
    return Inertia::render('UserPage/UserScreen/TextCodeScreen');
});

Route::get('/user/enter-code', function () {
    return Inertia::render('UserPage/UserScreen/EnterCodeScreen');
});

Route::get('/user/login', function () {
    return Inertia::render('UserPage/UserScreen/LoginScreen');
});

Route::get('/user/upload-photo', function () {
    return Inertia::render('UserPage/UserScreen/UploadPhotoScreen');
});


// User Pages

Route::get('/user/intake-form', function () {
    return Inertia::render('UserPage/Forms/UserIntakeForm');
});

Route::get('/user/medical-info-form', function () {
    return Inertia::render('UserPage/Forms/MedicalInfoForm');
});

Route::get('/user/dashboard', function () {
    return Inertia::render('UserPage/UserDashboard');
});

Route::get('/user/forms', function () {
    return Inertia::render('UserPage/RequestedForm');
});

Route::get('/user/appointment', function () {
    return Inertia::render('UserPage/Appointment');
});

Route::get('/user/appointment/book-new-appointment', function () {
    return Inertia::render('UserPage/BookNew Appointment/NewAppointment');
});

Route::get('/user/labs-result', function () {
    return Inertia::render('UserPage/LabsResult');
});

Route::get('/user/family-members', function () {
    return Inertia::render('UserPage/OtherMembers');
});

Route::get('/user/invoices', function () {
    return Inertia::render('UserPage/Invoices');
});

Route::get('/user/add-members', function () {
    return Inertia::render('UserPage/AddMembers');
});
