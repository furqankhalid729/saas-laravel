<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\PatientIntake;

class CheckUserIntake
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $excludedRoutes = [
            'user.forms.patient-intake.create',
            'user.forms.patient-intake.store',
        ];
    
        if (in_array($request->route()->getName(), $excludedRoutes)) {
            return $next($request);
        }
        $user = auth()->user();

        if ($user && !PatientIntake::where('user_id', $user->id)->exists()) {
            return redirect()->route('user.forms.patient-intake.create')->with('message', 'Please complete your intake form first.');
        }

        return $next($request);
    }
}
