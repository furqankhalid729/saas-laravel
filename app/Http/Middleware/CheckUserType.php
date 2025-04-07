<?php

// app/Http/Middleware/CheckUserType.php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckUserType
{
    // public function handle(Request $request, Closure $next, ...$types)
    // {
    //     $user = $request->user();
        
    //     if (!$user || !in_array($user->role, $types)) {
    //         // abort(403, 'Unauthorized access');
    //         return redirect()->route('u_login');
    //     }

    //     return $next($request);
    // }

    public function handle(Request $request, Closure $next, ...$types)
{
    $user = $request->user();

    if (!$user) {
        return redirect()->route('u_login');
    }

    if (!in_array($user->role, $types)) {
        return redirect()->route($this->getDashboardRouteFor($user->role));
    }

    return $next($request);
}

protected function getDashboardRouteFor($type)
{
    return match ($type) {
        'user' => 'user_dashboard',
        'agency' => 'admin_dashboard',
        'admin' => 'clinic_dashboard',
        default => 'u_login',
    };
}

}
