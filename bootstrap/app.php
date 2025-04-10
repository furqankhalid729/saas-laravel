<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use App\Http\Middleware\HandleInertiaRequests;
use App\Providers\AuthServiceProvider; // Add this

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        api: __DIR__ . '/../routes/api.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->append([
            \App\Http\Middleware\DetectGuard::class,
        ]);

        $middleware->web(append: [
            HandleInertiaRequests::class,
        ]);

        // Route Middleware Aliases
        $middleware->alias([
            'role' => \App\Http\Middleware\CheckRole::class,
            'agency_user' => \App\Http\Middleware\CheckAgencyUser::class,
            'check.subscription' => \App\Http\Middleware\CheckAgencySubscription::class, // Add this line

        ]);

        $middleware->statefulApi();
    })
    ->withProviders([ 
        AuthServiceProvider::class,
    ])
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();