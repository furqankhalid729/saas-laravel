<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\UserSubscription;

class CheckAgencySubscription
{
    public function handle(Request $request, Closure $next)
    {
        $user = Auth::user();

        if ($user->role !== 'agency') {
            return redirect()->route('login')->with('error', 'Unauthorized access.');
        }

        $subscription = UserSubscription::where('user_id', $user->id)
                                        ->latest()
                                        ->first();

        if (!$subscription || $subscription->start_date > now() || $subscription->end_date < now()) {
            // return redirect()->route('admin_choose_plan')->with('error', 'Please subscribe to access this page.');
            return redirect()->route('admin_choose_plan')->with('error', 'Please subscribe to access this page.');
        }

        return $next($request);
    }
}
