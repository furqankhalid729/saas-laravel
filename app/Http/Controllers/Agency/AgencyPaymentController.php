<?php

namespace App\Http\Controllers\Agency;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Enums\AgencyInertiaViews;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class AgencyPaymentController extends Controller
{
    public function viewPayments()
    {
        return Inertia::render(AgencyInertiaViews::Agency_Payment_List->value);
    }

    public function showPlanSelection()
    {
        return Inertia::render(AgencyInertiaViews::Agency_Plan_Selection->value);
    }

    public function activateSubscription(Request $request)
    {
        // Validate the request data
        $request->validate([
            'plan_id' => 'required|integer',
        ]);

        $user = auth()->user();
        $agencyUser = $user->agencyUsers()->where('role', 'admin')->first();
        if ($agencyUser) {
            // Get the agency associated with the user
            $agency = $agencyUser->agency;

            // Log the agency ID
            Log::info('Agency ID: ' . $agency->id);

            // Now you can use the agency ID to update or create the subscription
            $agency->subscription()->updateOrCreate([], [
                'plan_name' => 'Starter',
                'price' => 29,
                'starts_at' => now(),
                'ends_at' => now()->addMonth(),
                'is_active' => true,
            ]);
        } else {
            // Handle case where the user is not an admin of any agency
            Log::error('User is not an admin of any agency.');
        }


        return redirect()->route('agency.dashboard')->with('success', 'Subscription activated successfully.');
    }
}
