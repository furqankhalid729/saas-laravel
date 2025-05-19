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


// Agency Start UP Routes
Route::get('agency/sign-up', [AgencyAuthController::class, 'showSignUpForm'])->name('agency.signup');
Route::post('agency/sign-up', [AgencyAuthController::class, 'register'])->name('agency.signup.store');
Route::get('agency/login', [AgencyAuthController::class, 'login'])->name('agency.login.show');
Route::post('agency/login', [AgencyAuthController::class, 'authenticate'])->name('agency.login');
Route::get('agency/choose-plan', [AgencyPaymentController::class, 'showPlanSelection'])->name('agency.subscription');
Route::post('agency/activate-plan', [AgencyPaymentController::class, 'activateSubscription'])->name('agency.subscription.activate');

// User Start UP Routes
Route::name('user.')->group(function () {
    Route::controller(UserAuthController::class)->group(function () {
        Route::get('/{slug}/sign-up', 'showSignUp')->name('signup');
        Route::post('/{slug}/sign-up', 'register')->name('signup.store');

        Route::get('/text-code', 'showTextCode')->name('text_code');
        Route::get('/enter-code', 'showEnterCode')->name('enter_code');

        Route::get('/{agency}/login', [UserAuthController::class, 'showLogin'])->name('login');
        Route::post('/{agency}/login', 'login')->name('login_user');

        Route::get('/upload-photo', 'showUploadPhoto')->name('upload_photo');
    });
});

Route::get('/flush-session', [UserAuthController::class, 'flushSession']);

// Agency side
Route::prefix('agency')->name('agency.')->middleware(['auth:web', 'check.subscription'])->group(function () {
    // Dashboard
    Route::get('/dashboard', [AgencyDashboardController::class, 'viewDashboard'])->name('dashboard');
    // Clients
    Route::prefix('clients')->name('clients.')->group(function () {
        Route::get('/', [AgencyClientController::class, 'viewClientList'])->name('list');
        Route::get('/detail/{id}', [AgencyClientController::class, 'viewClientDetail'])->name('detail');
        Route::get('/form', [AgencyClientController::class, 'showClientForm'])->name('form');
        Route::get('/new-forms', [AgencyClientController::class, 'viewNewClientForms'])->name('new.form');
    });
    // Appointments
    Route::get('/appointments', [AgencyAppointmentController::class, 'index'])->name('appointment.index');
    Route::get('/appointments/add', [AgencyAppointmentController::class, 'create'])->name('appointment.create');
    Route::post('/appointments/add', [AgencyAppointmentController::class, 'store'])->name('appointment.store');
    // Chat
    Route::get('/chat', [AgencyChatController::class, 'viewChat'])->name('chat');
    // Payments
     //******
    Route::get('/payments', [AgencyPaymentController::class, 'viewPayments'])->name('payments');
    // Reports
    Route::get('/reports', [AgencyReportController::class, 'viewReports'])->name('reports');

    // Employees
    Route::prefix('employee')->name('employee.')->group(function () {
        Route::get('/', [AgencyEmployeeController::class, 'viewEmployeeList'])->name('index');
        Route::get('/add-new', [AgencyEmployeeController::class, 'showAddEmployeeForm'])->name('create');
    });
    // Documents
    Route::prefix('documents')->name('documents.')->group(function () {
        Route::get('/', [AgencyDocumentController::class, 'viewDocuments'])->name('list');
        Route::get('/collab-documents', [AgencyDocumentController::class, 'viewCollabDocuments'])->name('collab');
    });
    // Forms
    Route::prefix('forms')->name('forms.')->group(function () {
        Route::get('/', [AgencyFormController::class, 'index'])->name('list');
        Route::get('/view/{id}', [AgencyFormController::class, 'show'])->name('show');
        Route::get('/add-new-form', [AgencyFormController::class, 'showAddFormField'])->name('create');
        Route::get('/pending-form', [AgencyFormController::class, 'viewPendingForms'])->name('pending');

        Route::post('/add-new-form', [AgencyFormController::class, 'storeForm'])->name('store');
        Route::post('/request-form', [AgencyFormController::class, 'requestForm'])->name('request');
        
        Route::delete('/delete/{id}', [AgencyFormController::class, 'destroy'])->name('delete');
    });
    // Settings
    Route::get('/settings', [AgencySettingController::class, 'viewSettings'])->name('settings');
    // Labs Result
    Route::get('/labs-result', [AgencyLabResultController::class, 'viewLabResults'])->name('labs.result');
});


Route::prefix('user')->name('user.')->middleware(['auth:web','check.user.intake'])->group(function () {
    // Dashboard
    Route::get('/dashboard', [UserDashboardController::class, 'showDashboard'])->name('dashboard');
    // Forms
    Route::prefix('forms')->name('forms.')->controller(UserFormController::class)->group(function () {
        Route::get('/patient-intake', 'showIntakeForm')->name('patient-intake.create');
        Route::post('/patient-intake', 'storeIntakeFormDetails')->name('patient-intake.store');
        Route::get('/medical-info-form', 'showMedicalInfoForm')->name('medical_info_form');
        Route::get('/requested', 'showRequestedForms')->name('requested');
        Route::get('/requested/add/{id}', 'getFormDetails')->name('add.info');
        Route::get('/requested/{id}', 'showRequestedForm')->name('requested.show');
        Route::get('/requested/edit', 'editRequestedForm')->name('edit_requested');
    });

    // Appointments
    Route::prefix('appointment')->name('appointments.')->controller(UserAppointmentController::class)->group(function () {
        Route::get('/', 'index')->name('show');
        Route::get('/book-new', 'bookNewAppointment')->name('book_new');
    });

    // Lab Results
    Route::get('/labs-result', [UserLabResultController::class, 'showLabResults'])->name('labs_results');

    // Family Members
    Route::prefix('family-members')->name('family-members.')->controller(UserMemberController::class)->group(function () {
        Route::get('/', 'showFamilyMembers')->name('show');
        Route::get('/add', 'addFamilyMember')->name('add');
        Route::post('/add', 'storeFamilyMember')->name('store');
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
