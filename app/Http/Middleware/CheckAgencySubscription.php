<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\UserSubscription;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;

class CheckAgencySubscription
{
    public function handle(Request $request, Closure $next)
    {
        $user = Auth::user();

        if (! $user) {
            return redirect()->route('agency.login.show')->withErrors(['auth' => 'You must be logged in.']);
        }

        $agencyId = session('active_agency_id');

        if (! $agencyId) {
            return redirect()->route('agency.login.show')->withErrors(['agency' => 'No active agency found.']);
        }
        Log::info('Agency ID in subscirption check: ' . $agencyId);
        $agency = \App\Models\Agency::with('subscription')->find($agencyId);

        if (
            ! $agency ||
            ! $agency->subscription ||
            ! $agency->subscription->is_active ||
            ($agency->subscription->ends_at && Carbon::parse($agency->subscription->ends_at)->isPast())
        ) {
            return redirect()->route('agency.subscription')->withErrors(['subscription' => 'Your subscription has expired.']);
        }

        return $next($request);
    }
}
