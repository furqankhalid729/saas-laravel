<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\UserFormController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::middleware('auth:web')->group(function () {
    Route::post('/store-form-details', [UserFormController::class, 'storeSubmittedForm'])->name('store.form.details');
});
