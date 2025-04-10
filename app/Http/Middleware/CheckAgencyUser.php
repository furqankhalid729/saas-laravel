<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class CheckAgencyUser
{
    public function handle(Request $request, Closure $next)
    {
        if (Auth::guard('agency_user')->check()) {
            return $next($request);
        }

        return redirect()->route('u_login')->with('error', 'Unauthorized access.');
    }
}