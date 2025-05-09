<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RequestedForm extends Model
{
    use HasFactory;

    protected $fillable = [
        'agency_id',
        'user_id',
        'agency_form_id',
        'status',
        'submitted_data',
        'requested_at',
        'completed_at',
    ];

    protected $casts = [
        'submitted_data' => 'array',
        'requested_at' => 'datetime',
        'completed_at' => 'datetime',
    ];

    public function agency()
    {
        return $this->belongsTo(Agency::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function agencyForm()
    {
        return $this->belongsTo(AgencyForm::class);
    }
}
