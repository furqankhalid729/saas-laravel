<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia; 
use App\Http\Controllers\Admin\AdminAuthController;
use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\AdminClientController;
use App\Http\Controllers\Admin\AdminEmployeeController;
use App\Http\Controllers\Admin\AdminAppointmentController;
use App\Http\Controllers\Admin\AdminPaymentController;
use App\Http\Controllers\Admin\AdminReportController;
use App\Http\Controllers\Admin\AdminDocumentController;
use App\Http\Controllers\Admin\AdminFormController;
use App\Http\Controllers\Admin\AdminChatController;
use App\Http\Controllers\Admin\AdminSettingController;
use App\Http\Controllers\Admin\AdminLabResultController;
use App\Http\Controllers\User\UserAuthController;
use App\Http\Controllers\User\UserDashboardController;
use App\Http\Controllers\User\UserAppointmentController;
use App\Http\Controllers\User\UserFormController;
use App\Http\Controllers\User\UserMemberController;
use App\Http\Controllers\User\UserInvoiceController;
use App\Http\Controllers\User\UserLabResultController;
use App\Http\Controllers\Clinic\ClinicAuthController;
use App\Http\Controllers\Clinic\ClinicDashboardController;
use App\Http\Controllers\Clinic\ClinicClientController;
use App\Http\Controllers\Clinic\ClinicPaymentController;
use App\Http\Controllers\Clinic\ClinicFormController;
Route::get('/', function () {
    return Inertia::render('Test');
});

Route::get('/test-1', function () {
    return Inertia::render('Test1');
});


// Admin side

Route::prefix('admin')->name('admin.')->group(function () {

    // Authentication Routes
    Route::get('/sign-up', [AdminAuthController::class, 'showSignUpForm'])->name('signup');

    // Dashboard
    Route::get('/dashboard', [AdminDashboardController::class, 'viewDashboard'])->name('dashboard');

    // Clients
    Route::prefix('clients')->name('clients_')->group(function () {
        Route::get('/', [AdminClientController::class, 'viewClientList'])->name('list');
        Route::get('/form', [AdminClientController::class, 'showClientForm'])->name('form');
        Route::get('/new-forms', [AdminClientController::class, 'viewNewClientForms'])->name('new.form');
    });

    // Appointments
    Route::get('/appointments', [AdminAppointmentController::class, 'viewAppointments'])->name('appointments');

    // Chat
    Route::get('/chat', [AdminChatController::class, 'viewChat'])->name('chat');

    // Payments
    Route::get('/choose-plan', [AdminPaymentController::class, 'showPlanSelection'])->name('choose_plan'); //******
    Route::get('/payments', [AdminPaymentController::class, 'viewPayments'])->name('payments');

    // Reports
    Route::get('/reports', [AdminReportController::class, 'viewReports'])->name('reports');

    // Employees
    Route::prefix('employees')->name('employees_')->group(function () {
        Route::get('/', [AdminEmployeeController::class, 'viewEmployeeList'])->name('list');
        Route::get('/add-new', [AdminEmployeeController::class, 'showAddEmployeeForm'])->name('add');
    });

    // Documents
    Route::prefix('documents')->name('documents_')->group(function () {
        Route::get('/', [AdminDocumentController::class, 'viewDocuments'])->name('list');
        Route::get('/collab-documents', [AdminDocumentController::class, 'viewCollabDocuments'])->name('collab');
    });

    // Forms
    Route::prefix('forms')->name('forms_')->group(function () {
        Route::get('/', [AdminFormController::class, 'viewForms'])->name('list');
        Route::get('/add-new-form-field', [AdminFormController::class, 'showAddFormField'])->name('add.field');
        Route::get('/pending-form', [AdminFormController::class, 'viewPendingForms'])->name('pending');
    });


    // Settings
    Route::get('/settings', [AdminSettingController::class, 'viewSettings'])->name('settings');

    // Labs Result
    Route::get('/labs-result', [AdminLabResultController::class, 'viewLabResults'])->name('labs.result');
});


// User side
Route::prefix('user')->name('user_')->group(function () {

    // Authentication Routes
    Route::controller(UserAuthController::class)->group(function () {
        Route::get('/sign-up', 'showSignUp')->name('signup');
        Route::get('/text-code', 'showTextCode')->name('text_code');
        Route::get('/enter-code', 'showEnterCode')->name('enter_code');
        Route::get('/login', 'showLogin')->name('login');
        Route::get('/upload-photo', 'showUploadPhoto')->name('upload_photo');
    });

    // Dashboard
    Route::get('/dashboard', [UserDashboardController::class, 'showDashboard'])->name('dashboard');

    // Forms
    Route::prefix('forms')->name('forms_')->controller(UserFormController::class)->group(function () {
        Route::get('/intake-form', 'showIntakeForm')->name('intake_form');
        Route::get('/medical-info-form', 'showMedicalInfoForm')->name('medical_info_form');
        Route::get('/requested', 'showRequestedForms')->name('requested');
        Route::get('/requested/edit', 'editRequestedForm')->name('edit_requested');
    });

    // Appointments
    Route::prefix('appointment')->name('appointments_')->controller(UserAppointmentController::class)->group(function () {
        Route::get('/', 'showAppointments')->name('show');
        Route::get('/book-new', 'bookNewAppointment')->name('book_new');
    });

    // Lab Results
    Route::get('/labs-result', [UserLabResultController::class, 'showLabResults'])->name('labs_results');

    // Family Members
    Route::prefix('family-members')->name('family_members_')->controller(UserMemberController::class)->group(function () {
        Route::get('/', 'showFamilyMembers')->name('show');
        Route::get('/add', 'addFamilyMember')->name('add');
    });

    // Invoices
    Route::get('/invoices', [UserInvoiceController::class, 'showInvoices'])->name('invoices');
});


// Clinic Side
Route::prefix('clinic')->name('clinic_')->group(function () {

    // Authentication Routes
    Route::controller(ClinicAuthController::class)->group(function () {
        Route::get('/login', 'showLogin')->name('login');
        Route::get('/text-code', 'showTextCode')->name('text.code');
        Route::get('/enter-code', 'showEnterCode')->name('enter.code');
    });

    // Dashboard
    Route::get('/dashboard', [ClinicDashboardController::class, 'showDashboard'])->name('dashboard');

    // Clients Management
    Route::prefix('clients')->name('clients_')->controller(ClinicClientController::class)->group(function () {
        Route::get('/', 'showClients')->name('show');
        Route::get('/view-details', 'viewClientDetails')->name('view');
    });

    // Payments
    Route::get('/payments', [ClinicPaymentController::class, 'showPayments'])->name('payments');

    // Forms
    Route::prefix('forms')->name('forms_')->controller(ClinicFormController::class)->group(function () {
        Route::get('/', 'showForms')->name('show');
        Route::get('/add-field', 'addNewFormField')->name('add.field');
    });
});
// Clinic Screens


// Route::get('/clinic/login', function () {
//     return Inertia::render('ClinicPage/ClinicScreens/LoginScreen');
// });

// Route::get('/clinic/text-code', function () {
//     return Inertia::render('ClinicPage/ClinicScreens/TextCodeScreen');
// });

// Route::get('/clinic/enter-code', function () {
//     return Inertia::render('ClinicPage/ClinicScreens/EnterCodeScreen');
// });

// // clinic pages


// Route::get('/clinic/dashboard', function () {
//     return Inertia::render('ClinicPage/ClinicDashboard');
// });

// Route::get('/clinic/clients', function () {
//     return Inertia::render('ClinicPage/Clients/Clients');
// });

// Route::get('/clinic/clients/clients-view', function () {
//     return Inertia::render('ClinicPage/Clients/ClientsView');
// });

// Route::get('/clinic/payments', function () {
//     return Inertia::render('ClinicPage/Payments');
// });

// Route::get('/clinic/forms', function () {
//     return Inertia::render('ClinicPage/Forms');
// });

// Route::get('/clinic/add-new-form-field', function () {
//     return Inertia::render('ClinicPage/FormsTabs/AddNewField');
// });