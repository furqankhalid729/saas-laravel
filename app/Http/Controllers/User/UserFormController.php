<?php

namespace App\Http\Controllers\User;


use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Enums\UserInertiaViews;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use App\Models\PatientIntake;

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

    public function showRequestedForms()
    {
        return Inertia::render(UserInertiaViews::USER_REQUESTED_FORMS->value);
    }

    public function editRequestedForm()
    {
        return Inertia::render(UserInertiaViews::USER_EDIT_REQUESTED_FORM->value);
    }
}
