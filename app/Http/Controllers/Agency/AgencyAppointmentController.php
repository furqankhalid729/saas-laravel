<?php

namespace App\Http\Controllers\Agency;

use App\Enums\AgencyInertiaViews;
use App\Http\Controllers\Controller;
use App\Models\Agency;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Appointment;
use App\Models\User;
use App\Models\AgencyUser;
use App\Models\AgencyTimeLine;

class AgencyAppointmentController extends Controller
{
    public function index()
    {
        $activeAgencyId = session('active_agency_id');
        $appointments = Appointment::where('agency_id', $activeAgencyId)
            ->with(['user' => function ($query) {
                $query->select('id', 'name');
            }])
            ->orderBy('appointment_date', 'desc')
            ->get();
        return Inertia::render(AgencyInertiaViews::AgencyAppointmentsPage->value,[
            'appointments' => $appointments
        ]);
    }

    public function create()
    {
        $activeAgencyId = session('active_agency_id');
        $agencyUsers = AgencyUser::where('agency_id', $activeAgencyId)
            ->where('role', '!=', 'admin')
            ->with('user')
            ->get();
        return Inertia::render(AgencyInertiaViews::AgencyAddAppointment->value,[
            'agencyUsers' => $agencyUsers,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'appointment_date' => 'required|date',
            'appointment_time' => 'required|date_format:H:i',
            'amount' => 'required|numeric',
            'notes' => 'nullable|string',
        ]);

        // Check active agency from session
        $agencyId = session('active_agency_id');
        if (!$agencyId) {
            return response()->json([
                'status' => 'error',
                'message' => 'Active agency not found in session.',
            ], 400);
        }

        // Save appointment
        $appointment = new Appointment();
        $appointment->agency_id = $agencyId;
        $appointment->user_id = $validated['user_id'];
        $appointment->appointment_date = $validated['appointment_date'];
        $appointment->appointment_time = $validated['appointment_time'];
        $appointment->amount = $validated['amount'];
        $appointment->notes = $validated['notes'] ?? null;
        $appointment->save();

        AgencyTimeline::create([
            'agency_id' => $agencyId,
            'user_id' => $validated['user_id'],
            'title' => 'New Appointment',
            'description' => 'New appointment created for user ID: ' . $validated['user_id'],
            'type' => 'appointment',
            'related_id' => $appointment->id,
            'created_by' => auth()->id(),
        ]);

        // Return success response
        return response()->json([
            'status' => 'success',
            'message' => 'Appointment created successfully.',
            'appointment' => $appointment,
        ]);
    }
}
