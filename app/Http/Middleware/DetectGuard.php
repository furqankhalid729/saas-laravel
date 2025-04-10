<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;
class DetectGuard
{
    public function handle(Request $request, Closure $next)
    {
        if (Auth::guard('web')->check()) {
            session(['guard' => 'web']);
        } elseif (Auth::guard('agency_user')->check()) {
            session(['guard' => 'agency_user']);
        } else {
            session(['guard' => null]);
        }

        return $next($request);
    }
}
