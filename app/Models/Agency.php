<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Agency extends Model
{
    protected $fillable = ['name', 'domain', 'settings'];

    protected $casts = [
        'settings' => 'array',
    ];

    protected static function booted()
    {
        static::created(function ($agency) {
            AgencySetting::create([
                'agency_id' => $agency->id,
                'settings' => [
                    'userPlan' => [
                        'price' => 30,
                    ],
                ],
            ]);
        });
    }

    public function agencyUsers()
    {
        return $this->hasMany(AgencyUser::class);
    }

    public function subscription()
    {
        return $this->hasOne(AgencySubscription::class);
    }

    // In Agency model (Agency.php)
    public function user()
    {
        return $this->belongsTo(User::class);  // One agency can have many users
    }
    public function forms()
    {
        return $this->hasMany(AgencyForm::class);
    }

    public function appointments()
    {
        return $this->hasMany(Appointment::class);
    }

    public function agencySettings()
    {
        return $this->hasOne(AgencySetting::class);
    }
}
