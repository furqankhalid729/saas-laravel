<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PatientIntake extends Model
{
    protected $fillable = [
        'uploaded_id_file_path',
        'form_of_identification',
        'document_identification_number',
        'i_485_helper',
        'first_name',
        'middle_name',
        'last_name',
        'address_line_1',
        'address_line_2',
        'city',
        'state',
        'zip_code',
        'apartment_type',
        'dob',
        'requested_appointment_date',
        'gender',
        'country_of_birth',
        'city_of_birth',
        'age',
        'alien_number',
        'appointment_type',
        'has_health_insurance',
        'patient_status',
        'user_id',
        'payment_type',
        'transaction_id',
    ];
}
