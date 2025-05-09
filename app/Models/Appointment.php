<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    protected $fillable = [
        'agency_id',
        'user_id',
        'appointment_date',
        'appointment_time',
        'status',
        'notes',
        'amount',
        'payment_status',
    ];
    protected $casts = [
        'appointment_date' => 'date',
        'appointment_time' => 'string',
        'amount' => 'decimal:2',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function agency()
    {
        return $this->belongsTo(Agency::class);
    }
}
