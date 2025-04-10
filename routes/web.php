<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Agency\AgencyAuthController;
use App\Http\Controllers\Agency\AgencyDashboardController;
use App\Http\Controllers\Agency\AgencyClientController;
use App\Http\Controllers\Agency\AgencyEmployeeController;
use App\Http\Controllers\Agency\AgencyAppointmentController;
use App\Http\Controllers\Agency\AgencyPaymentController;
use App\Http\Controllers\Agency\AgencyReportController;
use App\Http\Controllers\Agency\AgencyDocumentController;
use App\Http\Controllers\Agency\AgencyFormController;
use App\Http\Controllers\Agency\AgencyChatController;
use App\Http\Controllers\Agency\AgencySettingController;
use App\Http\Controllers\Agency\AgencyLabResultController;
use App\Http\Controllers\User\UserAuthController;
use App\Http\Controllers\User\UserDashboardController;
use App\Http\Controllers\User\UserAppointmentController;
use App\Http\Controllers\User\UserFormController;
use App\Http\Controllers\User\UserMemberController;
use App\Http\Controllers\User\UserInvoiceController;
use App\Http\Controllers\User\UserLabResultController;
use App\Http\Controllers\Admin\AdminAuthController;
use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\AdminClientController;
use App\Http\Controllers\Admin\AdminPaymentController;

use App\Http\Controllers\Admin\AdminFormController;

Route::get('/', function () {
    return Inertia::render('Test');
});

Route::get('/test-1', function () {
    return Inertia::render('Test1');
});
// Authentication Routes
Route::get('/sign-up', [AgencyAuthController::class, 'showSignUpForm'])->name('signup');
Route::post('/sign-up', [AgencyAuthController::class, 'register'])->name('signup_agency');
Route::get('/login', [AgencyAuthController::class, 'login'])->name('login_agency');
Route::get('/check', [AgencyAuthController::class, 'checkSubscription'])->name('check_subscription');

Route::get('/dump-session', [UserAuthController::class, 'dumpSession']);
Route::get('/flush-session', [UserAuthController::class, 'flushSession']);
// Agency side

// Route::prefix('admin')->name('admin_')->group(function () {
// Route::prefix('admin')->name('admin_')->middleware(['auth:web', 'role:agency'])->group(function () {
Route::prefix('admin')->name('admin_')->middleware(['auth:web', 'role:agency', 'check.subscription'])->group(function () {

    // Dashboard
    Route::get('/dashboard', [AgencyDashboardController::class, 'viewDashboard'])->name('dashboard');

    // Clients
    Route::prefix('clients')->name('clients_')->group(function () {
        Route::get('/', [AgencyClientController::class, 'viewClientList'])->name('list');
        Route::get('/form', [AgencyClientController::class, 'showClientForm'])->name('form');
        Route::get('/new-forms', [AgencyClientController::class, 'viewNewClientForms'])->name('new.form');
    });

    // Appointments
    Route::get('/appointments', [AgencyAppointmentController::class, 'viewAppointments'])->name('appointments');

    // Chat
    Route::get('/chat', [AgencyChatController::class, 'viewChat'])->name('chat');

    // Payments
    Route::get('/choose-plan', [AgencyPaymentController::class, 'showPlanSelection'])->name('choose_plan'); //******
    Route::get('/payments', [AgencyPaymentController::class, 'viewPayments'])->name('payments');

    // Reports
    Route::get('/reports', [AgencyReportController::class, 'viewReports'])->name('reports');

    // Employees
    Route::prefix('employees')->name('employees_')->group(function () {
        Route::get('/', [AgencyEmployeeController::class, 'viewEmployeeList'])->name('list');
        Route::get('/add-new', [AgencyEmployeeController::class, 'showAddEmployeeForm'])->name('add');
    });

    // Documents
    Route::prefix('documents')->name('documents_')->group(function () {
        Route::get('/', [AgencyDocumentController::class, 'viewDocuments'])->name('list');
        Route::get('/collab-documents', [AgencyDocumentController::class, 'viewCollabDocuments'])->name('collab');
    });

    // Forms
    Route::prefix('forms')->name('forms_')->group(function () {
        Route::get('/', [AgencyFormController::class, 'viewForms'])->name('list');
        Route::get('/add-new-form-field', [AgencyFormController::class, 'showAddFormField'])->name('add.field');
        Route::get('/pending-form', [AgencyFormController::class, 'viewPendingForms'])->name('pending');
    });


    // Settings
    Route::get('/settings', [AgencySettingController::class, 'viewSettings'])->name('settings');

    // Labs Result
    Route::get('/labs-result', [AgencyLabResultController::class, 'viewLabResults'])->name('labs.result');
});


// User side
// Route::get('/user/sign-up', [UserAuthController::class, 'showSignUp'])->name('user_signup');

// Route::prefix('u')->name('u_')->group(function () {
//     Route::controller(UserAuthController::class)->group(function () {
//         Route::get('/sign-up', 'showSignUp')->name('sign_up');
//         Route::post('/sign-up', 'register')->name('sign_up_user');
//         Route::get('/text-code', 'showTextCode')->name('text_code');
//         Route::get('/enter-code', 'showEnterCode')->name('enter_code');
//         Route::get('/login', 'showLogin')->name('login');
//         Route::post('/login', 'login')->name('login_user');
//         Route::get('/upload-photo', 'showUploadPhoto')->name('upload_photo');
//     });
// });
Route::prefix('u')->name('u_')->group(function () {
    Route::controller(UserAuthController::class)->group(function () {
        // Route::get('/sign-up', 'showSignUp')->name('sign_up');
        // Route::post('/sign-up', 'register')->name('sign_up_user');
        Route::get('/{slug}/sign-up', 'showSignUp')->name('sign_up');
        Route::post('/{slug}/sign-up', 'register')->name('sign_up_user');
        Route::get('/text-code', 'showTextCode')->name('text_code');
        Route::get('/enter-code', 'showEnterCode')->name('enter_code');
        // Route::prefix('a')->name('a_')->group(function () {
        Route::get('/{agency}/login', [UserAuthController::class, 'showLogin'])->name('login');
        Route::post('/{agency}/login', 'login')->name('login_user');
        // });
        // Route::post('/login', 'login')->name('login_user');
        Route::get('/upload-photo', 'showUploadPhoto')->name('upload_photo');
    });
});

// Route::prefix('user')->name('user_')->group(function () {
Route::prefix('user')->name('user_')->middleware(['auth:agency_user'])->group(function () {


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
Route::prefix('c')->controller(AdminAuthController::class)->group(function () {
    Route::get('/login', 'showLogin')->name('login');
    Route::get('/text-code', 'showTextCode')->name('text.code');
    Route::get('/enter-code', 'showEnterCode')->name('enter.code');
});
// Route::prefix('clinic')->name('clinic_')->group(function () {
Route::prefix('clinic')->name('clinic_')->middleware(['auth:web', 'role:admin'])->group(function () {    // Authentication Routes


    // Dashboard
    Route::get('/dashboard', [AdminDashboardController::class, 'showDashboard'])->name('dashboard');

    // Clients Management
    Route::prefix('clients')->name('clients_')->controller(AdminClientController::class)->group(function () {
        Route::get('/', 'showClients')->name('show');
        Route::get('/view-details', 'viewClientDetails')->name('view');
    });

    // Payments
    Route::get('/payments', [AdminPaymentController::class, 'showPayments'])->name('payments');

    // Forms
    Route::prefix('forms')->name('forms_')->controller(AdminFormController::class)->group(function () {
        Route::get('/', 'showForms')->name('show');
        Route::get('/add-field', 'addNewFormField')->name('add.field');
    });
});
// Clinic Screens
