<?php

namespace App\Http\Controllers\User;


use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Enums\UserInertiaViews;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use App\Models\PatientIntake;
use App\Models\RequestedForm;
use App\Models\AgencyForm;

class UserFormController extends Controller
{
    public function showIntakeForm()
    {
        return Inertia::render(UserInertiaViews::USER_INTAKE_FORM->value);
    }
    public function storeIntakeFormDetails(Request $request)
    {
        $user = auth()->user();
        $request->merge([
            'appointment_type' => 'Individual',
            'patient_status' => 'new',
            'user_id' => $user->id,
            'i_485_helper' => 'no',
            'gender' => $user->gender,
        ]);
        $validatedData = $request->validate([
            'uploaded_id_file_path'        => 'nullable|string',
            'form_of_identification'       => 'required|string',
            'document_identification_number' => 'required|string',
            'i_485_helper'                 => 'nullable|string',
            'first_name'                   => 'required|string|max:255',
            'middle_name'                  => 'nullable|string|max:255',
            'last_name'                    => 'required|string|max:255',
            'address_line_1'               => 'required|string',
            'address_line_2'               => 'nullable|string',
            'city'                         => 'required|string',
            'state'                        => 'required|string',
            'zip_code'                     => 'required|string|max:10',
            'apartment_type'               => 'nullable|string',
            'dob'                          => 'required|date',
            'requested_appointment_date'   => 'nullable|date',
            'gender'                       => 'nullable|string',
            'country_of_birth'            => 'nullable|string',
            'city_of_birth'               => 'nullable|string',
            'age'                          => 'required|integer|min:0',
            'alien_number'                => 'nullable|string',
            'appointment_type'            => 'required|string',
            'has_health_insurance'        => 'required',
            'patient_status'              => 'required|string',
            'user_id'                      => "required|exists:users,id",
            'payment_type'                => 'required|string',
            'transaction_id'              => 'nullable|string',
        ]);
        $patient = PatientIntake::create($validatedData);

        return response()->json([
            'success' => true,
            'message' => 'Patient intake submitted successfully.',
            'data' => $patient
        ]);
    }

    public function showMedicalInfoForm()
    {
        return Inertia::render(UserInertiaViews::USER_MEDICAL_INFO_FORM->value);
    }

    public function showRequestedForm($id)
    {
        $currentAgencyId = session('current_agency_id');
        $form = AgencyForm::findOrFail($id);
        $user_data = RequestedForm::where('agency_form_id', $id)
            ->where('user_id', auth()->user()->id)
            ->where('agency_id', $currentAgencyId)
            ->first();
        return Inertia::render(UserInertiaViews::SHOW_FORM->value, [
            'form' => [
                'id' => $form->id,
                'form_name' => $form->form_name,
                'form_data' => json_decode($form->form_data),
                'user_data' => $user_data
            ],
        ]);
    }

    public function getFormDetails($id)
    {
        $form = AgencyForm::findOrFail($id);
        return Inertia::render(UserInertiaViews::ADD_FORM_DATA->value, [
            'form' => [
                'id' => $form->id,
                'form_name' => $form->form_name,
                'form_data' => json_decode($form->form_data),
            ],
        ]);
    }

    public function showRequestedForms()
    {
        $agency_id = session('current_agency_id');
        $requestedForms = RequestedForm::where('agency_id', $agency_id)
            ->where('user_id', auth()->user()->id)
            ->orderBy('requested_at', 'desc')
            ->with(['agencyForm'])
            ->get();
        return Inertia::render(UserInertiaViews::USER_REQUESTED_FORMS->value, [
            'requestedForms' => $requestedForms
        ]);
    }

    public function editRequestedForm()
    {
        return Inertia::render(UserInertiaViews::USER_EDIT_REQUESTED_FORM->value);
    }

    public function storeSubmittedForm(Request $request)
    {
        $currentAgencyId = session('current_agency_id');
        $userId = auth()->user()->id;
        if (!$currentAgencyId || !$userId) {
            return response()->json(['error' => 'No agency/User found in session'], 400);
        }
        $request->validate([
            'form_id' => 'required|integer',
            'data' => 'required|array',
        ]);

        $submission = RequestedForm::updateOrCreate(
            [
                'user_id' => $userId,
                'agency_id' => $currentAgencyId,
                'agency_form_id' => $request->form_id,
            ],
            [
                'submitted_data' => $request->data,
                'status' => 'completed',
                'completed_at' => now(),
            ]
        );

        return response()->json([
            'message' => 'Form data saved successfully',
            'submission' => $submission,
        ]);
    }
}
