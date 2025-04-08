<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckUserType
{
    public function handle(Request $request, Closure $next, ...$types)
    {
        $guard = session('guard', 'web');

        $user = Auth::guard($guard)->user();

        if (!$user) {
            return redirect()->route('u_sign_up_user');
        }

        $role = $this->getUserRole($user);
        error_log('User role: ' . $role);
        if (!in_array($role, $types)) {
            return redirect()->route($this->getDashboardRouteFor($role));
        }

        return $next($request);
    }

    protected function getUserRole($user)
    {
        if ($user instanceof \App\Models\AgencyUser) {
            return 'user';
        }

        return $user->role ?? 'unknown';
    }

    protected function getDashboardRouteFor($type)
    {
        return match ($type) {
            'user'   => 'user_dashboard',
            'agency' => 'admin_dashboard',
            'admin'  => 'clinic_dashboard',
            default  => 'u_login',
        };
    }
}
